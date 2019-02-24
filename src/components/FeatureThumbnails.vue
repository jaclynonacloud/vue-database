<template>
    <div class="feature-thumbnails">
        <Feature :src="getSrc()" :caption="getCaption()" :maxHeight="maxHeight" :imgFit="imgFit" />
        <div class="thumbnails">
            <div class="thumbnail" v-for="(el, i) in images" :key="i"
            :class="{ active : index==i }" @click="changeIndex(i)"
            >
                <img :src="el.src" alt="thumbnail image">
                <!-- <div class="thumbnail__text" v-html="el.caption"></div> -->
            </div>
        </div>
    </div>
</template>

<script>
import Feature from '@/components/Feature.vue'

export default {
    name: 'FeatureThumbnails',
    components: {
        Feature
    },
    data() {
        return {
            index: 0,
            images: [
                {src:'https://dummyimage.com/600x400/d6a439/000000.png', caption:"<span class='title'>Test 1</span>Thumbnail image text"},
                {src:'https://dummyimage.com/1200x400/d6a439/000000.png', caption:"<span class='title'>Test 2</span>A lot of thumbnail image text like omg why is this so long"},
                {src:'https://dummyimage.com/600x400/d6a439/000000.png', caption:""},
                {src:'https://dummyimage.com/600x400/d6a439/000000.png', caption:"Some other text with <a href='#'>link</a>"},
                {src:'https://dummyimage.com/200x400/d6a439/000000.png', caption:"Thumbnail image text"}
            ],
            autoplayEvent: null
        }
    },
    props: {
        maxHeight: String,
        imgFit: String,
        // images: Array
        autoplay: String,
        autoplayInterval: String
    },
    mounted: function() {
        this.changeIndex(0)
        //try autoplay
        this.startAutoplay()
    },
    methods: {
        startAutoplay() {
            //start autoplay if allowed
            if(this.autoplay.toLowerCase() == "true") {
                this.autoplayEvent = setInterval(() => {
                    this.index++
                    if(this.index > this.images.length-1) this.index = 0
                }, (this.autoplayInterval) ? parseInt(this.autoplayInterval) : 1000);
            }
        },

        changeIndex(index) {
            this.index = index
            if(this.autoplayEvent != null) {
                window.clearInterval(this.autoplayEvent)
                //start up the autoplay again
                this.startAutoplay()
            }
        },

        getSrc() {
            return this.images[this.index].src
        },
        getCaption() {
            return this.images[this.index].caption
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../globals';

.feature-thumbnails {
    @include display-flex();
    flex-flow: column;

    .thumbnails {
        display: grid;
        grid-template-columns: repeat(3, minmax(100px, 1fr));
        grid-auto-rows: minmax(1fr, 200px);
        grid-gap: 5px;
        margin: 5px 0;

        @media #{$size-medium} {
            grid-template-columns: repeat(4, minmax(150px, 1fr));
            margin: 5px;
        }
        @media #{$size-large} {
            grid-template-columns: repeat(6, minmax(150px, 1fr));
        }

        .thumbnail {
            @include display-flex();
            flex-flow: column;
            justify-content: flex-start;
            align-items: center;
            box-sizing: border-box;


            &__text {
                display: none;

                @media #{$size-large} {
                    display: block;
                    padding: 0 10px;
                    font-size: 1.1em;
                    text-align: center;
                    box-sizing: border-box;
                }
            }

            

            
            &.active {
                
                img {
                    opacity: 1;
                    border-color: $accent-colour;
                }
            }

            img {
                position: relative;
                max-width: 100%;
                max-height: 100px;
                opacity: 0.6;
                transition: opacity ease-in 0.3s;
                cursor: pointer;

                @media #{$size-wide} {
                    max-height: 150px;
                }
            }
        }
    }
}

</style>
