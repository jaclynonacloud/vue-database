<template>
<div class="locations">
    <HeaderImage src="https://dummyimage.com/1600x160/d6a439/000000.png" caption="Sparkly City" />

    <div class="wrapper">
    <h1>Locations</h1>
    <div class="locations-container">
        <!-- Location -->
        <router-link :to="{ name : 'location', params : { name : `Location ${i}` } }" class="location" v-for="i in 50" :key="i">
            <div class="location__image">
                <img src="https://dummyimage.com/160x100/d6a439/000000.png" alt="location image">
            </div>
            <div class="location__details">
                <div class="location__details__title">Location  {{ i }}</div>
                <div class="location__details__description">Known for its massive structures and appealing culture, visit location on your way across the globe.</div>
            </div>
        </router-link>
        <!-- /Location -->
    </div>
    </div>
</div>
</template>

<script>
// @ is an alias to /src
import HeaderImage from '@/components/HeaderImage.vue'

export default {
name: 'locations',
components: {
    HeaderImage
}
}
</script>


<style scoped lang="scss">
@import '../globals';

.locations {
@include display-flex();
flex-flow: column;

h1 {
    padding-left: 5px;
}


.locations-container {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 5px;
    padding: 0 5px;
    box-sizing: border-box;
    
    width: 100%;

    @media #{$size-medium} {
        grid-template-columns: repeat(2, 1fr);
    }

    .location {
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

        &:nth-child(5n-8) {
            
            .location__details {
                &__title {
                    background: mix($accent-colour, $main-colour, 80);
                }
            }
        }

        &:hover {
            .location__details__description {
                background: mix($light-colour, whitesmoke, 20);
            }   
        }
    }
}





}
</style>