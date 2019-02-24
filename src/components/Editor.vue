<template>
    <div class="editor">
        <!-- Toolbar -->
        <div class="toolbar" v-if="usingEditor">
            <button @click.prevent="bold()"><b>B</b></button>
            <button @click.prevent="italic()"><i>I</i></button>
            <button @click.prevent="underline()"><u>U</u></button>
            <button @click.prevent="strikethrough()"><strike>S</strike></button>
            <button @click.prevent="openLookup(!showLookup)">Add Lookup</button>
        </div>
        <!-- /Toolbar -->
        <div class="lookup" v-if="showLookup">
            <input type="text" placeholder="Lookup" v-model="lookup.lookup">
            <select v-model="lookup.route">
                <option value="character">Character</option>
                <option value="location">Location</option>
                <option value="lore">Lore</option>
                <option value="encyclopedia">Encyclopedia</option>
                <option value="news">News</option>
            </select>
            <button @click.prevent="addLookup()">Add</button>
        </div>
        <!-- Doc -->
        <div class="doc" contenteditable ref="content" @keyup="update()" v-html="readyText"></div>
        <!-- /Doc -->
    </div>
</template>


<script>
export default {
    name: 'Editor',

    props: {
        text: String,
        useEditor: String
    },

    data() {
        return {
            showLookup: false,
            lookup: { text:'', lookup:'', route:'' },
            valueText: ''
        }
    },

    computed: {
        readyText() {
            //turn router-links blue
            return this.text.replace("<router-link", '<router-link style="color: blue;"')
        },
        usingEditor() {
            return (this.useEditor == null || this.useEditor == '') ? true : this.useEditor.toLowerCase() == "true"
        }
    },

    methods: {
        bold() {
            document.execCommand('bold')
            this.update()
        },
        italic() {
            document.execCommand('italic')
            this.update()
        },
        underline() {
            document.execCommand('underline')
            this.update()
        },
        strikethrough() {
            document.execCommand('strikethrough')
            this.update()
        },

        update() {
            this.$emit('updated',this.$refs.content.innerHTML.trim())
        },


        /*https://stackoverflow.com/questions/16736680/get-caret-position-in-contenteditable-div-including-tags*/
        getCaretCharacterOffsetWithin(element) {
            var caretOffset = 0;
            var doc = element.ownerDocument || element.document;
            var win = doc.defaultView || doc.parentWindow;
            var sel;
            if (typeof win.getSelection != "undefined") {
                sel = win.getSelection();
                if (sel.rangeCount > 0) {
                    var range = win.getSelection().getRangeAt(0);
                    var preCaretRange = range.cloneRange();
                    preCaretRange.selectNodeContents(element);
                    preCaretRange.setEnd(range.endContainer, range.endOffset);
                    caretOffset = preCaretRange.toString().length;
                }
            } else if ( (sel = doc.selection) && sel.type != "Control") {
                var textRange = sel.createRange();
                var preCaretTextRange = doc.body.createTextRange();
                preCaretTextRange.moveToElementText(element);
                preCaretTextRange.setEndPoint("EndToEnd", textRange);
                caretOffset = preCaretTextRange.text.length;
            }
            return caretOffset;
        },


        openLookup(isOpen) {
            this.showLookup = isOpen
        },

        /**https://stackoverflow.com/questions/4811822/get-a-ranges-start-and-end-offsets-relative-to-its-parent-container/4812022#4812022 */
        addLookup() {
            if(this.lookup.lookup == '') return
            /* eslint-disable */
            var sel = window.getSelection()
            if (!sel.focusNode || (sel.focusOffset == sel.anchorOffset)) {
                return
            }
            this.lookup.text = this._getSelection()

            // var endIndex = this.getCaretCharacterOffsetWithin(this.$refs.content)
            var endIndex = this.getCaretCharacterOffsetWithin(sel.focusNode)

            var startIndex = endIndex - this.lookup.text.length
            console.log("START", startIndex, "END", endIndex)
            if (startIndex === -1) {
                return;
            }

            // let node = this.$refs.content
            // //force focus
            // node.focus()


            var range = document.createRange()
            //Set the range to contain search text
            range.setStart(sel.focusNode, startIndex)
            range.setEnd(sel.focusNode, endIndex)

            

            //Delete search text
            range.deleteContents();
            //Insert replace text
            //sort out the route
            switch(this.lookup.route) {
                case 'character' :
                case 'location' :
                    const routeNode = this._createRouterLink(":to", `{ name:'${this.lookup.route}', params : { name:'${this.lookup.lookup}' } }`, this.lookup.text, this.lookup.lookup, this.lookup.route)
                    range.insertNode(routeNode[1])
                    range.insertNode(routeNode[0])
                    break
                case 'lore' :
                case 'encyclopedia' :
                case 'news' :
                    const shortRouteNode = this._createRouterLink("to", `/${this.lookup.route}#${this.lookup.lookup}`, this.lookup.lookup, this.lookup.lookup, this.lookup.route)
                    range.insertNode(shortRouteNode[1])
                    range.insertNode(shortRouteNode[0])
                    break
            }

            sel.collapse(sel.focusNode, 0)

            //hide lookup
            this.lookup = {text:'', lookup:'', route:''}
            this.showLookup = false
            this.update()
        },

        _createRouterLink(routeAttr, route, title, lookup, routeKey) {
            const validNode = document.createElement("span")
            validNode.setAttribute("v-if", `!cStore.getters.checkIfValidRoute('${lookup}', '${routeKey}')`)
            validNode.style.display = "none"
            validNode.innerHTML = title

            const routeNode = document.createElement("router-link")
            routeNode.setAttribute("v-else", "")
            routeNode.setAttribute(routeAttr, route)
            routeNode.innerHTML = this.lookup.text
            routeNode.style.color = "blue"
            if(title != null) routeNode.title = title

            return [validNode, routeNode]
        },

        _getSelection() {
            return window.getSelection().anchorNode.textContent.substring(window.getSelection().extentOffset, window.getSelection().anchorOffset)
        }
    },
}
</script>


<style scoped lang="scss">
@import '../globals';

.doc {
    background: white;
    height: 100px;
    padding: 10px;
    overflow-y: scroll;
}


</style>