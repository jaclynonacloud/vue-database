<template>
<div class="characters">
    <HeaderImage :src="banner" caption="Babel" />

    <div class="wrapper">
    <h1>Characters</h1>
    <div class="characters-container">
        <!-- Character -->
        <router-link :to="{ name : 'character', params : { name:ch.lookup } }" class="character" v-for="(ch, i) in characters" :key="i">
            <div class="character__image">
                <!-- <img :src="ch.thumbnail || 'https://dummyimage.com/120x120/d6a439/000000.png'" alt="character image"> -->
                <img :src="thumbnails[ch.lookup]" alt="character image" v-if="thumbnails[ch.lookup]">
            </div>
            <div class="character__details">
                <div class="character__details__title" v-html="(ch.preferredName && ch.preferredName != '') ? ch.preferredName : [ch.firstName, ch.middleName, ch.lastName].join(' ')"></div>
                <div class="character__details__description" v-html="ch.shortDescription" v-show="ch.shortDescription != null && ch.shortDescription != ''"></div>
            </div>
        </router-link>
        <!-- /Character -->
    </div>
    </div>
</div>
</template>

<script>
// @ is an alias to /src
import HeaderImage from '@/components/HeaderImage.vue'
import store from '@/store'

export default {
name: 'characters',
components: {
    HeaderImage
},
data() {
    return {
        characters: []
    }
},
created() {

    store.dispatch("waitForData")
        .then(() => {
            // eslint-disable-next-line
            console.log("Data is LOADED!")

            const data = store.state.characters
            if(this.characters != null) {
                this.characters = data.sort((a, b) => a.firstName > b.firstName ? 1 : a.firstName == b.firstName ? 0 : -1)
            }
        })
},
computed: {
    thumbnails() {
        let result = {}
        this.characters.forEach(ch => {
            if(ch.thumbnail != null && ch.thumbnail != '') result[ch.lookup] = require(`@/assets/${ch.thumbnail}`)
        })
        // eslint-disable-next-line
        console.warn("IMAGE")
// eslint-disable-next-line
        console.log(result)
        return result
    },
    banner() {
        return require('@/assets/images/banner.png')
    }
}
}
</script>


<style scoped lang="scss">
@import '../globals';

.characters {
@include display-flex();
flex-flow: column;


.characters-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 5px;
    padding: 0 5px;
    box-sizing: border-box;
    
    width: 100%;

    @media #{$size-medium} {
        grid-template-columns: repeat(2, 1fr);
    }
    @media #{$size-wide} {
        grid-template-columns: repeat(3, 1fr);
    }

    .character {
        @include display-flex();
        width: 100%;

        &__image {
            align-self: center;
        }

        &__details {
            flex: 1;

            &__title {
                position: relative;
                background: $accent-colour;
                width: max-content;
                max-width: 100%;
                padding: 3px 8px;
                margin-left: 10px;
                color: white;
                box-sizing: border-box;
                z-index: 2;
            }

            &__description {
                position: relative;
                top: -5px;
                background: white;
                padding: 9px 15px;
                font-weight: 300;
                box-sizing: border-box;
                z-index: 1;
            }
        }

        &:nth-child(4n-7) {
            
            .character__details {
                &__title {
                    background: mix($accent-colour, $main-colour, 80);
                }
            }
        }

        &:hover {
            .character__details__description {
                background: mix($light-colour, whitesmoke, 20);
            }   
        }
    }
}

}
</style>