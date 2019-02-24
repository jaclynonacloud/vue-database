<template>
<div v-if="loaded">
    <!-- No Data -->
    <div v-if="noData">
        <h1>No character with this name found.  Sorry!</h1>
        <button onclick="window.history.back()">Go Back</button>
    </div>
    <!-- /No Data -->
    <!-- Data -->
    <div class="character" v-if="character">
        <HeaderImage :src="header" :caption="character.header.caption" v-if="character.header && character.header.src" />

        <div class="breadcrumbs">
            <router-link to="/characters" class="breadcrumbs__item">Characters</router-link>
            <span v-html="character.preferredName || name" class="breadcrumbs__item"></span>
        </div>

        <!-- Wrapper -->
        <div class="wrapper">
            <!-- Details -->
            <div class="character__details">
                <div class="image">
                    <img :src="profile" alt="character image" v-if="character.profile">
                </div>
                <div class="header">
                    <div class="header__title" v-html="fullName"></div>
                    <router-link :to="{ name:'admin-character-edit', params:{name:character.lookup} }" v-if="character.lookup">Edit</router-link>
                    <div class="side">
                        <div class="header__maiden" v-if="character.maidenName">neé <span v-html="character.maidenName"></span></div>
                        <div class="header__pronunction" v-if="character.pronunciation">pronounced: <i v-html="character.pronunciation"></i></div>
                    </div>
                </div>
                <!-- Details -->
                <div class="details">
                    <!-- Preferred Name -->
                    <div class="detail" v-if="character.preferredName">
                        <div class="title">Preferred Name</div>
                        <div v-html="character.preferredName"></div>
                    </div>
                    <!-- Age -->
                    <div class="detail" >
                        <div class="title">Age</div>
                        <div v-if="!character.age">??</div>
                        <div v-else>
                            <span v-html="character.age.local == -1 ? '??' : character.age.local"></span> (L) 
                            <span v-html="character.age.global == -1 ? '??' : character.age.global"></span> (G)
                        </div>
                    </div>
                    <!-- Gender -->
                    <div class="detail" v-if="character.gender">
                        <div class="title">Gender</div>
                        <div v-if="!character.gender">??</div>
                        <div v-else-if="!cStore.getters.checkIfValidRoute(character.gender.other || character.gender.lookup, 'encyclopedia')" v-html="character.gender.key"></div>
                        <router-link v-else :to="`encyclopedia#${character.gender.other || character.gender.lookup}`" v-html="character.gender.key"></router-link>
                    </div>
                    <!-- Type -->
                    <div class="detail" v-if="character.typeMod || character.typeBase">
                        <div class="title">Type</div>
                        <div class="multi">
                            <span v-if="!cStore.getters.checkIfValidRoute(character.typeMod.other || character.typeMod.lookup, 'encyclopedia')" v-html="character.typeMod.key"></span>
                            <router-link v-else :to="`encyclopedia#${character.typeMod.other || character.typeMod.lookup}`" v-html="character.typeMod.key == 'None' ? '' : character.typeMod.key"></router-link>
                            <span v-if="!cStore.getters.checkIfValidRoute(character.typeBase.other || character.typeBase.lookup, 'encyclopedia')" v-html="character.typeBase.key"></span>
                            <router-link v-else :to="`encyclopedia#${character.typeBase.other || character.typeBase.lookup}`" v-html="character.typeBase.key"></router-link>
                        </div>
                    </div>
                    <!-- Species -->
                    <div class="detail" v-if="character.speciesMod || character.speciesBase">
                        <div class="title">Species</div>
                        <div class="multi">
                            <span v-if="!cStore.getters.checkIfValidRoute(character.speciesMod.other || character.speciesMod.lookup, 'encyclopedia') && character.speciesMod.key != 'None'" v-html="character.speciesMod.key"></span>
                            <router-link v-else-if="character.speciesMod.key != 'None'" :to="`encyclopedia#${character.speciesMod.other || character.speciesMod.lookup}`" v-html="character.speciesMod.key == 'None' ? '' : character.speciesMod.key"></router-link>
                            <span v-if="!cStore.getters.checkIfValidRoute(character.speciesBase.other || character.speciesBase.lookup, 'encyclopedia')" v-html="character.speciesBase.key"></span>
                            <router-link v-else :to="`encyclopedia#${character.speciesBase.other || character.speciesBase.lookup}`" v-html="character.speciesBase.key"></router-link>
                        </div>
                    </div>
                    <!-- Birthplace -->
                    <div class="detail">
                        <div class="title">Birthplace</div>
                        <div v-if="!character.birthplace.key">??</div>
                        <div v-else-if="!cStore.getters.checkIfValidRoute(character.birthplace.other || character.birthplace.lookup, 'location')" v-html="character.birthplace.key"></div>
                        <router-link v-else :to="{ name:'location', params:{ name:character.birthplace.lookup} }" v-html="character.birthplace.key"></router-link>
                    </div>
                    <!-- Home -->
                    <div class="detail">
                        <div class="title">Home</div>
                        <div v-if="!character.home.key">??</div>
                        <div v-else-if="!cStore.getters.checkIfValidRoute(character.home.other || character.home.lookup, 'location')" v-html="character.home.key"></div>
                        <router-link v-else :to="{ name:'location', params:{ name:character.home.lookup} }" v-html="character.home.key"></router-link>
                    </div>
                    <!-- Career -->
                    <div class="detail">
                        <div class="title">Career</div>
                        <div v-if="!character.career"></div>
                        <div v-else v-html="character.career"></div>
                    </div>
                    <!-- Status -->
                    <div class="detail">
                        <div class="title">Status</div>
                        <div v-if="!character.status.key">??</div>
                        <router-link v-else :to="`encyclopedia#${character.status.other || character.status.lookup}`" v-html="character.status.key"></router-link>
                    </div>
                    <!-- Role -->
                    <div class="detail">
                        <div class="title">Role</div>
                        <div v-if="!character.role.key">??</div>
                        <router-link v-else :to="`encyclopedia#${character.role.other || character.role.lookup}`" v-html="character.role.key"></router-link>
                    </div>
                    <br>
                    <!-- Height -->
                    <div class="detail">
                        <div class="title">Height</div>
                        <div v-if="character.height" v-html="character.height"></div>
                        <div v-else>??</div>
                    </div>
                    <!-- Weight -->
                    <div class="detail">
                        <div class="title">Weight</div>
                        <div v-if="character.weight" v-html="character.weight"></div>
                        <div v-else>??</div>
                    </div>
                    <!-- Spritial Alignment -->
                    <div class="detail" v-if="character.spirituality">
                        <div class="title">Spiritual Alignment</div>
                        <div v-if="character.spirituality.lookup == '' || character.spirituality.other" v-html="character.spirituality.key"></div>
                        <router-link v-else :to="`encyclopedia#${character.spirituality.other || character.spirituality.lookup}`" v-html="character.spirituality.key"></router-link>
                    </div>
                    <!-- Sexuality -->
                    <div class="detail" v-if="character.sexuality">
                        <div class="title">Sexuality</div>
                        <div v-if="character.sexuality.lookup == '' || character.sexuality.other" v-html="character.sexuality.key"></div>
                        <router-link v-else :to="`encyclopedia#${character.sexuality.other || character.sexuality.lookup}`" v-html="character.sexuality.key"></router-link>
                    </div>
                    <!-- Sexual Preference -->
                    <div class="detail">
                        <div class="title">Sexual Preference</div>
                        <div v-if="character.sexualPreference.lookup == '' || character.sexualPreference.other" v-html="character.sexualPreference.key"></div>
                        <router-link v-else :to="`encyclopedia#${character.sexualPreference.other || character.sexualPreference.lookup}`" v-html="character.sexualPreference.key"></router-link>
                    </div>
                    <!-- Birthday -->
                    <div class="detail">
                        <div class="title">Birthday</div>
                        <div v-html="birthday"></div>
                    </div>
                    <!-- Aliases -->
                    <div class="detail">
                        <div class="title">Aliases</div>
                        <div v-if="character.aliases">
                            <div v-for="(alias, i) in character.aliases" :key="i">
                                <router-link  v-if="cStore.getters.checkIfValidRoute(alias.other || alias.lookup, 'character')" :to="{ name:'character', params: { name:alias.other || alias.lookup } }" v-html="alias.key"></router-link>
                                <div v-else v-html="alias.key"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /Details -->
            </div>
            <!-- /Details -->

            <!-- Info -->
            <div class="character__info">
                <h1 v-html="character.nickName"></h1>
                <!-- Description -->
                <section class="block" id="description">
                    <h2 class="block__header">Description</h2>
                    <div class="block__content">
                        <v-runtime-template :template="character.description"></v-runtime-template>
                    </div>
                </section>
                <!-- History -->
                <section class="block" id="history">
                    <h2 class="block__header">History</h2>
                    <div class="block__content">
                        <v-runtime-template :template="character.history"></v-runtime-template>
                    </div>
                </section>
                <!-- Characteristics -->
                <section class="block" id="characteristics">
                    <h2 class="block__header">Characteristics</h2>
                    <div class="block__content">
                        <v-runtime-template :template="character.characteristics"></v-runtime-template>
                    </div>
                </section>
                <!-- Other -->
                <section class="block" id="other">
                    <h2 class="block__header">Other</h2>
                    <div class="block__content">
                        <!-- Quotes -->
                        <section class="sub-block" id="quotes">
                            <h2 class="sub-block__header">Quotes</h2>
                            <div class="sub-block__content">
                                <div v-if="character.quotes">
                                    <div v-for="(quote, i) in character.quotes" :key="i">
                                        <div v-html="quote.key" v-if="quote.key"></div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <!-- Trivia -->
                        <section class="sub-block" id="trivia">
                            <h2 class="sub-block__header">Trivia</h2>
                            <div class="sub-block__content">
                                <div v-if="character.trivia">
                                    <ul v-for="(triv, i) in character.trivia" :key="i">
                                        <li v-if="triv.key"><span v-html="triv.key" ></span></li>
                                    </ul>
                                </div>
                            </div>
                        </section>
                        <!-- Genetic Breakdown -->
                        <section class="sub-block" id="genetic-breakdown">
                            <h2 class="sub-block__header">Genetic Breakdown</h2>
                            <div class="sub-block__content">
                                Genetic Breakdown Genetic Breakdown Genetic Breakdown
                            </div>
                        </section>
                    </div>
                </section>
                <!-- Relationships -->
                <section class="block" id="relationships">
                    <h2 class="block__header">Relationships</h2>
                    <div class="block__content">
                        <!-- Family -->
                        <section class="sub-block" id="family">
                            <h2 class="sub-block__header">Family</h2>
                            <div class="sub-block__content">
                                <div v-if="character.relationships.family">
                                    <div v-for="(rel, i) in character.relationships.family" :key="i">
                                        <div v-if="!rel.lookup">
                                            <span v-html="rel.key"></span>&nbsp;
                                            <i v-html="rel.relation"></i>
                                        </div>
                                        <div v-else-if="!cStore.getters.checkIfValidRoute(rel.lookup, 'character')">
                                            <span v-html="rel.key"></span>&nbsp;
                                            <i v-html="rel.relation"></i>
                                        </div>
                                        <div v-else>
                                            <router-link :to="{ name:'character', params:{ name:rel.lookup } }">
                                                <span v-html="rel.key"></span>&nbsp;
                                            </router-link>
                                            <i v-html="rel.relation"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <!-- Friends -->
                        <section class="sub-block" id="friends">
                            <h2 class="sub-block__header">Friends</h2>
                            <div class="sub-block__content">
                                <div v-if="character.relationships.friends">
                                    <div v-for="(rel, i) in character.relationships.friends" :key="i">
                                        <div v-if="!rel.lookup">
                                            <span v-html="rel.key"></span>&nbsp;
                                            <i v-html="rel.relation"></i>
                                        </div>
                                        <div v-else-if="!cStore.getters.checkIfValidRoute(rel.lookup, 'character')">
                                            <span v-html="rel.key"></span>&nbsp;
                                            <i v-html="rel.relation"></i>
                                        </div>
                                        <router-link v-else :to="{ name:'character', params:{ name:rel.lookup } }">
                                            <span v-html="rel.key"></span>&nbsp;
                                            <i v-html="rel.relation"></i>
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <!-- Acquaintances -->
                        <section class="sub-block" id="acquaintances">
                            <h2 class="sub-block__header">Acquaintances</h2>
                            <div class="sub-block__content">
                                <div v-if="character.relationships.acquaintances">
                                    <div v-for="(rel, i) in character.relationships.acquaintances" :key="i">
                                        <div v-if="!rel.lookup">
                                            <span v-html="rel.key"></span>&nbsp;
                                            <i v-html="rel.relation"></i>
                                        </div>
                                        <div v-else-if="!cStore.getters.checkIfValidRoute(rel.lookup, 'character')">
                                            <span v-html="rel.key"></span>&nbsp;
                                            <i v-html="rel.relation"></i>
                                        </div>
                                        <router-link v-else :to="{ name:'character', params:{ name:rel.lookup } }">
                                            <span v-html="rel.key"></span>&nbsp;
                                            <i v-html="rel.relation"></i>
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <!-- Enemies -->
                        <section class="sub-block" id="Enemies">
                            <h2 class="sub-block__header">Enemies</h2>
                            <div class="sub-block__content">
                                <div v-if="character.relationships.enemies">
                                    <div v-for="(rel, i) in character.relationships.enemies" :key="i">
                                        <div v-if="!rel.lookup">
                                            <span v-html="rel.key"></span>&nbsp;
                                            <i v-html="rel.relation"></i>
                                        </div>
                                        <div v-else-if="!cStore.getters.checkIfValidRoute(rel.lookup, 'character')">
                                            <span v-html="rel.key"></span>&nbsp;
                                            <i v-html="rel.relation"></i>
                                        </div>
                                        <router-link v-else :to="{ name:'character', params:{ name:rel.lookup } }">
                                            <span v-html="rel.key"></span>&nbsp;
                                            <i v-html="rel.relation"></i>
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </section>
            </div>
            <!-- /Info -->

            <section class="sub-block">
                <h2 class="sub-block__header">Gallery</h2>
                <Thumbnails />
            </section>

            
        </div>
        <!-- /Wrapper -->

        <Lightbox title="Hello World!" content="Hello" :details="[
            {route:'character', key:'jane doe', title:'Jane Doe'}, 
            {route:'about', title:'Hello'}, 
            {route:'', title:'World'}
        ]" />
    </div>
    <!-- /Data -->
</div>
</template>

<script>
import VRuntimeTemplate from "v-runtime-template"
// @ is an alias to /src
import HeaderImage from '@/components/HeaderImage.vue'
import Thumbnails from '@/components/Thumbnails.vue'
import Lightbox from '@/components/Lightbox.vue'
import store from '@/store'

export default {
name: 'characters',
components: {
    VRuntimeTemplate,
    HeaderImage,
    Thumbnails,
    Lightbox
},
data() {
    return {
        character: {},
        gallery: [],
        description : `<router-link to="/about">HI</router-link>`,
        noData: false,
        loaded: false
    }
},
created() {
    this.load(this.$route.params.name)
},
beforeRouteUpdate(to, from, next) {
    this.load(to.params.name)
    next()
},
methods: {
    load(lookup) {
        this.loaded = false

        store.dispatch("waitForData")
        .then(() => {

            //go get the character
            this.character = store.getters.getCharacterByLookup(lookup)
            // eslint-disable-next-line
            console.log("CHAR DATA", this.character)

            

            if(this.character != null) {
                //once loaded, get the data
                this.lookup = lookup


                //pre-compile editor data
                this.character.description = `<div>${this.character.description}</div>`
                this.character.history = `<div>${this.character.history}</div>`
                this.character.characteristics = `<div>${this.character.characteristics}</div>`

                // eslint-disable-next-line
                console.log(this.character)
                this.noData = false
                this.loaded = true

                //fake gallery images
                this.gallery = [
                    {
                        
                    }
                ]

            }
            else {
                // eslint-disable-next-line
                console.log("FOUND NOTHING")
                this.noData = true
                this.loaded = true
            }

        })
        


        // if(this.lookup != '' && this.lookup != null) {
        //     this.character = null
        //     //go get data
        //     let route = `http://localhost:4000/characters/${this.lookup}`
        //     this.axios.get(route).then(response => {
        //         this.character = response.data

        //         //pre-compile editor data
        //         this.character.description = `<div>${this.character.description}</div>`
        //         this.character.history = `<div>${this.character.history}</div>`
        //         this.character.characteristics = `<div>${this.character.characteristics}</div>`

        //         // eslint-disable-next-line
        //         console.log(this.character)
        //         this.noData = false
        //     })
        //     .catch(() => {
        //         // eslint-disable-next-line
        //         console.log("FOUND NOTHING")
        //         this.noData = true
        //     })
        // }
    }
},
computed: {
    name() {
        let { firstName, middleName, lastName, preferredName } = this.character
        return (preferredName != null && preferredName != '') ? preferredName : [firstName, middleName, lastName].join(' ')
    },
    fullName() {
        return [this.character.firstName, this.character.middleName, this.character.lastName].join(' ')
    },
    header() {
        return require(`@/assets/${this.character.header.src}`)
    },
    profile() {
        return require(`@/assets/${this.character.profile}`)
    },
    birthday() {
        let date = new Date(this.character.birthday)
        return date.toLocaleDateString("en-US", {
            month: 'long',
            day: 'numeric'
        })
    },
    cStore() {
        return store
    }
}
}
</script>


<style scoped lang="scss">
@import '../globals';

$block-colour: mix($main-colour, $light-colour, 30);
$block-colour-2: mix($accent-colour, $light-colour, 10);

.breadcrumbs {
    padding: 3px 10px;
}


.character {
    width: inherit;

    &__details {
        // background: $accent-colour;
        padding-bottom: 1px;

        @media #{$size-medium} {
            padding-top: 5px;
        }

        @media #{$size-large} {
            float: right;
            padding: 5px;
            margin: 0 5px;
            box-sizing: border-box;
        }

        .image {
            @include display-flex();
            justify-content: center;
            max-width: 500px;
            box-sizing: border-box;
            margin: 0 auto;
            
            img {
                display: block;
                width: 100%;
                max-width: 500px;
                object-fit: cover;
                margin: 0 auto;
            }
        }

        .header {
            @include display-flex();
            flex-flow: column;
            font-size: 1.3em;

            .side {
                background: $block-colour;
                margin: 5px;
                padding: 5px;
                padding-left: 5px;
                font-weight: 300;
                border-left: solid 4px $main-colour;
                box-sizing: border-box;
            }

            &__title {
                background: $dark-colour;
                padding: 5px 24px;
                font-size: 1.4em;
                box-sizing: border-box;
                text-align: center;
                color: white;
            }
        }
        .details {
            background: $light-colour;
            display: grid;
            grid-template-columns: 1fr;
            grid-gap: 5px;
            margin: 5px;
            padding: 5px;
            box-sizing: border-box;
            
            .detail {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                grid-gap: 5px;
                color: $accent-colour;
                font-size: 1.1em;
                font-weight: 400;

                & > :not(.title) {
                    background: $block-colour-2;
                }

                & > * {
                    padding: 0 3px;
                }

                .multi {
                    *:nth-child(2) {
                        padding-left: 0.2em;
                    }
                }

                .title {
                    text-align: right;
                    color: black;
                    font-weight: 300;
                }
            }
        }
    }

    &__info {
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 5px;

        @media #{$size-large} {
            display: block;
        }

        h1 {
            padding-left: 10px;
        }


        .sub-block {
            &__header {
                margin: 0 -15px;
            }
        }

        
    }
}

.block {
    max-width: 100%;
    
    @media #{$size-medium} {
        margin-left: 5px;
    }

    &__header {
        background: $dark-colour;
        padding: 5px 10px;
        margin: 0;
        color: white;
        font-weight: 300;
        box-sizing: border-box;

        @media #{$size-medium} {
            width: 85vw;
        }
        @media #{$size-large} {
            width: 25vw;
        }
    }

    &__content {
        padding: 10px 15px;
        font-weight: 300;
        box-sizing: border-box;
    }
}

.sub-block {
    &__header {
        background: $accent-colour;
        padding: 5px 15px;
        margin: 0 5px;
        color: white;
        font-size: 1.2em;
        font-weight: 300;
        box-sizing: border-box;

        @media #{$size-medium} {
            width: 45vw;
        }

        @media #{$size-large} {
            width: 20vw;
        }
    }

    &__content {
        padding: 5px 0;
        box-sizing: border-box;
    }
}
</style>