(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9f8d1814"],{"0013":function(t,e,a){"use strict";var r=a("9cb1"),s=a.n(r);s.a},"0204":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header-image"},[a("Feature",{staticClass:"feature-small",attrs:{src:t.src,maxHeight:"80px",imgFit:"cover"}}),a("Feature",{staticClass:"feature-large",attrs:{src:t.src,maxHeight:"120px",caption:t.caption,imgFit:"cover"}}),a("Feature",{staticClass:"feature-wide",attrs:{src:t.src,maxHeight:"160px",caption:t.caption,imgFit:"cover"}})],1)},s=[],c=a("8253"),i={name:"HeaderImage",components:{Feature:c["a"]},props:{src:String,caption:String}},o=i,n=(a("0013"),a("2877")),l=Object(n["a"])(o,r,s,!1,null,"c672811a",null);e["a"]=l.exports},1771:function(t,e,a){var r={"./images/babel-banner.png":"caf2","./images/banner.png":"1936","./logo.png":"cf05","./uploads/headers/red.png":"dc37","./uploads/profiles/cherub.png":"6df9","./uploads/profiles/red.png":"7dc2","./uploads/profiles/suzy.png":"e7b8","./uploads/thumbnails/cherub.png":"d93c","./uploads/thumbnails/red.png":"725a","./uploads/thumbnails/suzy.png":"744c"};function s(t){var e=c(t);return a(e)}function c(t){var e=r[t];if(!(e+1)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return e}s.keys=function(){return Object.keys(r)},s.resolve=c,t.exports=s,s.id="1771"},1936:function(t,e,a){t.exports=a.p+"img/banner.771fbbae.png"},"3c56":function(t,e,a){},"3cfe":function(t,e,a){"use strict";var r=a("3c56"),s=a.n(r);s.a},"3dc7":function(t,e,a){"use strict";var r=a("8261"),s=a.n(r);s.a},"6df9":function(t,e,a){t.exports=a.p+"img/cherub.eada8b2f.png"},"725a":function(t,e,a){t.exports=a.p+"img/red.afa9334b.png"},"744c":function(t,e,a){t.exports=a.p+"img/suzy.a70b92d3.png"},"7dc2":function(t,e,a){t.exports=a.p+"img/red.84750c40.png"},"7f7f":function(t,e,a){var r=a("86cc").f,s=Function.prototype,c=/^\s*function ([^ (]*)/,i="name";i in s||a("9e1e")&&r(s,i,{configurable:!0,get:function(){try{return(""+this).match(c)[1]}catch(t){return""}}})},8261:function(t,e,a){},8265:function(t,e,a){"use strict";var r=a("bfb3"),s=a.n(r);s.a},"9cb1":function(t,e,a){},bfb3:function(t,e,a){},caf2:function(t,e,a){t.exports=a.p+"img/babel-banner.5bda232d.png"},cf05:function(t,e,a){t.exports=a.p+"img/logo.82b9c7a5.png"},d93c:function(t,e,a){t.exports=a.p+"img/cherub.7fa0d803.png"},dc37:function(t,e,a){t.exports=a.p+"img/red.d3574811.png"},dd1e:function(t,e,a){"use strict";
/**
 * v-runtime-template v1.5.2
 * (c) 2018 Alex J <alexjovermorales@gmail.com>
 * @license MIT
 */var r=function(t){return Object.keys(t.data&&t.data()||{}).concat(Object.keys(t.props||{}))},s=function(t,e,a){if(!e.hasOwnProperty(a)){var r=Object.getOwnPropertyDescriptor(t,a);Object.defineProperty(e,a,r)}},c=function(t){var e={};return t.forEach(function(t){t&&Object.getOwnPropertyNames(t).forEach(function(a){return s(t,e,a)})}),e},i=function(t,e){var a={};return e.forEach(function(e){return s(t,a,e)}),a},o={props:{template:String},render:function(t){if(this.template){var e=this.$parent,a=e.$data,s=e.$props,o=e.$options,n=Object.keys(o.methods||{}),l=r(o).concat(n),d=i(this.$parent,n),p=c([a,s,d]),h={template:this.template||"<div></div>",props:l,computed:o.computed,components:o.components};return t(h,{props:p})}}};e["a"]=o},e7b8:function(t,e,a){t.exports=a.p+"img/suzy.f5b66b7c.png"},ecbd:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.loaded?a("div",[t.noData?a("div",[a("h1",[t._v("No character with this name found.  Sorry!")]),a("button",{attrs:{onclick:"window.history.back()"}},[t._v("Go Back")])]):t._e(),t.character?a("div",{staticClass:"character"},[t.character.header&&t.character.header.src?a("HeaderImage",{attrs:{src:t.header,caption:t.character.header.caption}}):t._e(),a("div",{staticClass:"breadcrumbs"},[a("router-link",{staticClass:"breadcrumbs__item",attrs:{to:"/characters"}},[t._v("Characters")]),a("span",{staticClass:"breadcrumbs__item",domProps:{innerHTML:t._s(t.character.preferredName||t.name)}})],1),a("div",{staticClass:"wrapper"},[a("div",{staticClass:"character__details"},[a("div",{staticClass:"image"},[t.character.profile?a("img",{attrs:{src:t.profile,alt:"character image"}}):t._e()]),a("div",{staticClass:"header"},[a("div",{staticClass:"header__title",domProps:{innerHTML:t._s(t.fullName)}}),t.character.lookup&&t.loggedIn?a("router-link",{attrs:{to:{name:"admin-character-edit",params:{name:t.character.lookup}}}},[t._v("Edit")]):t._e(),a("div",{staticClass:"side"},[t.character.maidenName?a("div",{staticClass:"header__maiden"},[t._v("neé "),a("span",{domProps:{innerHTML:t._s(t.character.maidenName)}})]):t._e(),t.character.pronunciation?a("div",{staticClass:"header__pronunction"},[t._v("pronounced: "),a("i",{domProps:{innerHTML:t._s(t.character.pronunciation)}})]):t._e()])],1),a("div",{staticClass:"details"},[t.character.preferredName?a("div",{staticClass:"detail"},[a("div",{staticClass:"title"},[t._v("Preferred Name")]),a("div",{domProps:{innerHTML:t._s(t.character.preferredName)}})]):t._e(),a("div",{staticClass:"detail"},[a("div",{staticClass:"title"},[t._v("Age")]),t.character.age?a("div",[a("span",{domProps:{innerHTML:t._s(-1==t.character.age.local?"??":t.character.age.local)}}),t._v(" (L) \r\n                            "),a("span",{domProps:{innerHTML:t._s(-1==t.character.age.global?"??":t.character.age.global)}}),t._v(" (G)\r\n                        ")]):a("div",[t._v("??")])]),t.character.gender?a("div",{staticClass:"detail"},[a("div",{staticClass:"title"},[t._v("Gender")]),t.character.gender?t.cStore.getters.checkIfValidRoute(t.character.gender.other||t.character.gender.lookup,"encyclopedia")?a("router-link",{attrs:{to:"encyclopedia#"+(t.character.gender.other||t.character.gender.lookup)},domProps:{innerHTML:t._s(t.character.gender.key)}}):a("div",{domProps:{innerHTML:t._s(t.character.gender.key)}}):a("div",[t._v("??")])],1):t._e(),t.character.typeMod||t.character.typeBase?a("div",{staticClass:"detail"},[a("div",{staticClass:"title"},[t._v("Type")]),a("div",{staticClass:"multi"},[t.cStore.getters.checkIfValidRoute(t.character.typeMod.other||t.character.typeMod.lookup,"encyclopedia")?a("router-link",{attrs:{to:"encyclopedia#"+(t.character.typeMod.other||t.character.typeMod.lookup)},domProps:{innerHTML:t._s("None"==t.character.typeMod.key?"":t.character.typeMod.key)}}):a("span",{domProps:{innerHTML:t._s(t.character.typeMod.key)}}),t.cStore.getters.checkIfValidRoute(t.character.typeBase.other||t.character.typeBase.lookup,"encyclopedia")?a("router-link",{attrs:{to:"encyclopedia#"+(t.character.typeBase.other||t.character.typeBase.lookup)},domProps:{innerHTML:t._s(t.character.typeBase.key)}}):a("span",{domProps:{innerHTML:t._s(t.character.typeBase.key)}})],1)]):t._e(),t.character.speciesMod||t.character.speciesBase?a("div",{staticClass:"detail"},[a("div",{staticClass:"title"},[t._v("Species")]),a("div",{staticClass:"multi"},[t.cStore.getters.checkIfValidRoute(t.character.speciesMod.other||t.character.speciesMod.lookup,"encyclopedia")||"None"==t.character.speciesMod.key?"None"!=t.character.speciesMod.key?a("router-link",{attrs:{to:"encyclopedia#"+(t.character.speciesMod.other||t.character.speciesMod.lookup)},domProps:{innerHTML:t._s("None"==t.character.speciesMod.key?"":t.character.speciesMod.key)}}):t._e():a("span",{domProps:{innerHTML:t._s(t.character.speciesMod.key)}}),t.cStore.getters.checkIfValidRoute(t.character.speciesBase.other||t.character.speciesBase.lookup,"encyclopedia")?a("router-link",{attrs:{to:"encyclopedia#"+(t.character.speciesBase.other||t.character.speciesBase.lookup)},domProps:{innerHTML:t._s(t.character.speciesBase.key)}}):a("span",{domProps:{innerHTML:t._s(t.character.speciesBase.key)}})],1)]):t._e(),a("div",{staticClass:"detail"},[a("div",{staticClass:"title"},[t._v("Birthplace")]),t.character.birthplace.key?t.cStore.getters.checkIfValidRoute(t.character.birthplace.other||t.character.birthplace.lookup,"location")?a("router-link",{attrs:{to:{name:"location",params:{name:t.character.birthplace.lookup}}},domProps:{innerHTML:t._s(t.character.birthplace.key)}}):a("div",{domProps:{innerHTML:t._s(t.character.birthplace.key)}}):a("div",[t._v("??")])],1),a("div",{staticClass:"detail"},[a("div",{staticClass:"title"},[t._v("Home")]),t.character.home.key?t.cStore.getters.checkIfValidRoute(t.character.home.other||t.character.home.lookup,"location")?a("router-link",{attrs:{to:{name:"location",params:{name:t.character.home.lookup}}},domProps:{innerHTML:t._s(t.character.home.key)}}):a("div",{domProps:{innerHTML:t._s(t.character.home.key)}}):a("div",[t._v("??")])],1),a("div",{staticClass:"detail"},[a("div",{staticClass:"title"},[t._v("Career")]),t.character.career?a("div",{domProps:{innerHTML:t._s(t.character.career)}}):a("div")]),a("div",{staticClass:"detail"},[a("div",{staticClass:"title"},[t._v("Status")]),t.character.status.key?a("router-link",{attrs:{to:"encyclopedia#"+(t.character.status.other||t.character.status.lookup)},domProps:{innerHTML:t._s(t.character.status.key)}}):a("div",[t._v("??")])],1),a("div",{staticClass:"detail"},[a("div",{staticClass:"title"},[t._v("Role")]),t.character.role.key?a("router-link",{attrs:{to:"encyclopedia#"+(t.character.role.other||t.character.role.lookup)},domProps:{innerHTML:t._s(t.character.role.key)}}):a("div",[t._v("??")])],1),a("br"),a("div",{staticClass:"detail"},[a("div",{staticClass:"title"},[t._v("Height")]),t.character.height?a("div",{domProps:{innerHTML:t._s(t.character.height)}}):a("div",[t._v("??")])]),a("div",{staticClass:"detail"},[a("div",{staticClass:"title"},[t._v("Weight")]),t.character.weight?a("div",{domProps:{innerHTML:t._s(t.character.weight)}}):a("div",[t._v("??")])]),t.character.spirituality?a("div",{staticClass:"detail"},[a("div",{staticClass:"title"},[t._v("Spiritual Alignment")]),""==t.character.spirituality.lookup||t.character.spirituality.other?a("div",{domProps:{innerHTML:t._s(t.character.spirituality.key)}}):a("router-link",{attrs:{to:"encyclopedia#"+(t.character.spirituality.other||t.character.spirituality.lookup)},domProps:{innerHTML:t._s(t.character.spirituality.key)}})],1):t._e(),a("div",{staticClass:"detail"},[a("div",{staticClass:"title"},[t._v("Birthday")]),a("div",{domProps:{innerHTML:t._s(t.birthday)}})]),a("div",{staticClass:"detail"},[a("div",{staticClass:"title"},[t._v("Aliases")]),t.character.aliases?a("div",t._l(t.character.aliases,function(e,r){return a("div",{key:r},[t.cStore.getters.checkIfValidRoute(e.other||e.lookup,"character")?a("router-link",{attrs:{to:{name:"character",params:{name:e.other||e.lookup}}},domProps:{innerHTML:t._s(e.key)}}):a("div",{domProps:{innerHTML:t._s(e.key)}})],1)}),0):t._e()])])]),a("div",{staticClass:"character__info"},[a("h1",{domProps:{innerHTML:t._s(t.character.nickName)}}),a("section",{staticClass:"block",attrs:{id:"description"}},[a("h2",{staticClass:"block__header"},[t._v("Description")]),a("div",{staticClass:"block__content"},[a("v-runtime-template",{attrs:{template:t.character.description}})],1)]),a("section",{staticClass:"block",attrs:{id:"history"}},[a("h2",{staticClass:"block__header"},[t._v("History")]),a("div",{staticClass:"block__content"},[a("v-runtime-template",{attrs:{template:t.character.history}})],1)]),a("section",{staticClass:"block",attrs:{id:"characteristics"}},[a("h2",{staticClass:"block__header"},[t._v("Characteristics")]),a("div",{staticClass:"block__content"},[a("v-runtime-template",{attrs:{template:t.character.characteristics}})],1)]),a("section",{staticClass:"block",attrs:{id:"other"}},[a("h2",{staticClass:"block__header"},[t._v("Other")]),a("div",{staticClass:"block__content"},[a("section",{staticClass:"sub-block",attrs:{id:"quotes"}},[a("h2",{staticClass:"sub-block__header"},[t._v("Quotes")]),a("div",{staticClass:"sub-block__content"},[t.character.quotes?a("div",t._l(t.character.quotes,function(e,r){return a("div",{key:r},[e.key?a("div",{domProps:{innerHTML:t._s(e.key)}}):t._e()])}),0):t._e()])]),a("section",{staticClass:"sub-block",attrs:{id:"trivia"}},[a("h2",{staticClass:"sub-block__header"},[t._v("Trivia")]),a("div",{staticClass:"sub-block__content"},[t.character.trivia?a("div",t._l(t.character.trivia,function(e,r){return a("ul",{key:r},[e.key?a("li",[a("span",{domProps:{innerHTML:t._s(e.key)}})]):t._e()])}),0):t._e()])]),t._m(0)])]),a("section",{staticClass:"block",attrs:{id:"relationships"}},[a("h2",{staticClass:"block__header"},[t._v("Relationships")]),a("div",{staticClass:"block__content"},[a("section",{staticClass:"sub-block",attrs:{id:"family"}},[a("h2",{staticClass:"sub-block__header"},[t._v("Family")]),a("div",{staticClass:"sub-block__content"},[t.character.relationships.family?a("div",t._l(t.character.relationships.family,function(e,r){return a("div",{key:r},[e.lookup&&t.cStore.getters.checkIfValidRoute(e.lookup,"character")?a("div",[a("router-link",{attrs:{to:{name:"character",params:{name:e.lookup}}}},[a("span",{domProps:{innerHTML:t._s(e.key)}}),t._v(" \r\n                                            ")]),a("i",{domProps:{innerHTML:t._s(e.relation)}})],1):a("div",[a("span",{domProps:{innerHTML:t._s(e.key)}}),t._v(" \r\n                                            "),a("i",{domProps:{innerHTML:t._s(e.relation)}})])])}),0):t._e()])]),a("section",{staticClass:"sub-block",attrs:{id:"friends"}},[a("h2",{staticClass:"sub-block__header"},[t._v("Friends")]),a("div",{staticClass:"sub-block__content"},[t.character.relationships.friends?a("div",t._l(t.character.relationships.friends,function(e,r){return a("div",{key:r},[e.lookup&&t.cStore.getters.checkIfValidRoute(e.lookup,"character")?a("router-link",{attrs:{to:{name:"character",params:{name:e.lookup}}}},[a("span",{domProps:{innerHTML:t._s(e.key)}}),t._v(" \r\n                                            "),a("i",{domProps:{innerHTML:t._s(e.relation)}})]):a("div",[a("span",{domProps:{innerHTML:t._s(e.key)}}),t._v(" \r\n                                            "),a("i",{domProps:{innerHTML:t._s(e.relation)}})])],1)}),0):t._e()])]),a("section",{staticClass:"sub-block",attrs:{id:"acquaintances"}},[a("h2",{staticClass:"sub-block__header"},[t._v("Acquaintances")]),a("div",{staticClass:"sub-block__content"},[t.character.relationships.acquaintances?a("div",t._l(t.character.relationships.acquaintances,function(e,r){return a("div",{key:r},[e.lookup&&t.cStore.getters.checkIfValidRoute(e.lookup,"character")?a("router-link",{attrs:{to:{name:"character",params:{name:e.lookup}}}},[a("span",{domProps:{innerHTML:t._s(e.key)}}),t._v(" \r\n                                            "),a("i",{domProps:{innerHTML:t._s(e.relation)}})]):a("div",[a("span",{domProps:{innerHTML:t._s(e.key)}}),t._v(" \r\n                                            "),a("i",{domProps:{innerHTML:t._s(e.relation)}})])],1)}),0):t._e()])]),a("section",{staticClass:"sub-block",attrs:{id:"Enemies"}},[a("h2",{staticClass:"sub-block__header"},[t._v("Enemies")]),a("div",{staticClass:"sub-block__content"},[t.character.relationships.enemies?a("div",t._l(t.character.relationships.enemies,function(e,r){return a("div",{key:r},[e.lookup&&t.cStore.getters.checkIfValidRoute(e.lookup,"character")?a("router-link",{attrs:{to:{name:"character",params:{name:e.lookup}}}},[a("span",{domProps:{innerHTML:t._s(e.key)}}),t._v(" \r\n                                            "),a("i",{domProps:{innerHTML:t._s(e.relation)}})]):a("div",[a("span",{domProps:{innerHTML:t._s(e.key)}}),t._v(" \r\n                                            "),a("i",{domProps:{innerHTML:t._s(e.relation)}})])],1)}),0):t._e()])])])])]),a("section",{staticClass:"sub-block"},[a("h2",{staticClass:"sub-block__header"},[t._v("Gallery")]),a("Thumbnails")],1)]),a("Lightbox",{attrs:{title:"Hello World!",content:"Hello",details:[{route:"character",key:"jane doe",title:"Jane Doe"},{route:"about",title:"Hello"},{route:"",title:"World"}]}})],1):t._e()]):t._e()},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"sub-block",attrs:{id:"genetic-breakdown"}},[a("h2",{staticClass:"sub-block__header"},[t._v("Genetic Breakdown")]),a("div",{staticClass:"sub-block__content"},[t._v("\r\n                                Genetic Breakdown Genetic Breakdown Genetic Breakdown\r\n                            ")])])}],c=(a("7f7f"),a("dd1e")),i=a("0204"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"thumbnails"},t._l(10,function(t){return a("div",{key:t,staticClass:"thumbnail"},[a("img",{staticClass:"thumbnail__image",attrs:{src:"https://dummyimage.com/"+130*t+"x"+80*t+"/89ba80/0011ff.png",alt:""}})])}),0)},n=[],l={name:"Thumbnails",props:[],mounted:function(){},data:function(){return{}},methods:{},computed:{}},d=l,p=(a("3cfe"),a("2877")),h=Object(p["a"])(d,o,n,!1,null,"20b807b7",null),u=h.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return null!=t.src&&""!=t.src?a("div",{staticClass:"lightbox",on:{click:function(e){return t.close()},touchmove:function(t){t.stopPropagation(),t.preventDefault()}}},[a("div",{staticClass:"image-container"},[a("aside",{staticClass:"details"},t._l(t.details,function(e,r){return a("div",{key:r,staticClass:"detail"},[e.route?a("router-link",{attrs:{to:{name:e.route,params:{name:e.key}}},domProps:{innerHTML:t._s(e.title)}}):t._e(),e.route?t._e():a("div",{domProps:{innerHTML:t._s(e.title)}})],1)}),0),a("div",{staticClass:"image"},[null!=t.src?a("img",{attrs:{src:t.src,alt:"lightbox image"}}):t._e()])]),a("div",{staticClass:"info"},[a("div",{staticClass:"info__title",domProps:{innerHTML:t._s(t.title)}}),a("div",{staticClass:"info__content",domProps:{innerHTML:t._s(t.content)}})])]):t._e()},m=[],v={name:"Lightbox",props:{src:String,title:String,content:String,details:Array},data:function(){return{isOpen:!1}},methods:{close:function(){this.src=""}}},k=v,f=(a("3dc7"),Object(p["a"])(k,_,m,!1,null,"aa4eb5d2",null)),b=f.exports,y=a("c0d6"),g={name:"characters",components:{VRuntimeTemplate:c["a"],HeaderImage:i["a"],Thumbnails:u,Lightbox:b},data:function(){return{character:{},gallery:[],description:'<router-link to="/about">HI</router-link>',noData:!1,loaded:!1}},created:function(){this.load(this.$route.params.name)},beforeRouteUpdate:function(t,e,a){this.load(t.params.name),a()},methods:{load:function(t){var e=this;this.loaded=!1,y["a"].dispatch("waitForData").then(function(){e.character=y["a"].getters.getCharacterByLookup(t),console.log("CHAR DATA",e.character),null!=e.character?(e.lookup=t,e.character.description="<div>".concat(e.character.description,"</div>"),e.character.history="<div>".concat(e.character.history,"</div>"),e.character.characteristics="<div>".concat(e.character.characteristics,"</div>"),console.log(e.character),e.noData=!1,e.loaded=!0,e.gallery=[{}]):(console.log("FOUND NOTHING"),e.noData=!0,e.loaded=!0)})}},computed:{name:function(){var t=this.character,e=t.firstName,a=t.middleName,r=t.lastName,s=t.preferredName;return null!=s&&""!=s?s:[e,a,r].join(" ")},fullName:function(){return[this.character.firstName,this.character.middleName,this.character.lastName].join(" ")},header:function(){return a("1771")("./".concat(this.character.header.src))},profile:function(){return a("1771")("./".concat(this.character.profile))},birthday:function(){var t=new Date(this.character.birthday);return t.toLocaleDateString("en-US",{month:"long",day:"numeric"})},cStore:function(){return y["a"]},loggedIn:function(){return y["a"].state.loggedIn}}},C=g,M=(a("8265"),Object(p["a"])(C,r,s,!1,null,"219ff88a",null));e["default"]=M.exports}}]);
//# sourceMappingURL=chunk-9f8d1814.ab89b9df.js.map