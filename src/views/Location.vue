<template>
<div class="location">
    <HeaderImage src="https://dummyimage.com/1600x160/d6a439/000000.png" caption="Interior View" />

    <div class="breadcrumbs">
        <router-link to="/locations" class="breadcrumbs__item">locations</router-link>
        <span v-html="name" class="breadcrumbs__item"></span>
    </div>

    <!-- Wrapper -->
    <div class="wrapper">
        <!-- Details -->
        <div class="location__details">
            <div class="image">
                <img src="https://dummyimage.com/1200x450/d6a439/000000.png" alt="locations image">
            </div>
            <div class="header">
                <div class="header__title">Sparkly City</div>
                <div class="side">
                    <div class="header__area">Sparkle City</div>
                    <div class="header__slogan">Slogan: <i>We sparkle and shine all the time.</i></div>
                </div>
            </div>
            <!-- Details -->
            <div class="details">
                <!-- Area -->
                <div class="detail">
                    <div class="title">Area</div>
                    <div>Main Area</div>
                </div>
                <!-- Population -->
                <div class="detail">
                    <div class="title">Population</div>
                    <div>888, 888, 888</div>
                </div>
                <!-- Demographics -->
                <div class="detail">
                    <div class="title">Demographics</div>
                    <div>Slugcats, Lizards, Vultures</div>
                </div>
                <!-- Venue Type -->
                <div class="detail">
                    <div class="title">Venue Type</div>
                    <div>N/a</div>
                </div>
                <!-- Owner(s) -->
                <div class="detail">
                    <div class="title">Owner(s)</div>
                    <div>N/a</div>
                </div>
                <!-- Established -->
                <div class="detail">
                    <div class="title">Established</div>
                    <div>1883</div>
                </div>
                <br>
                <!-- Controlled By -->
                <div class="detail">
                    <div class="title">Controlled By</div>
                    <div>None</div>
                </div>
                <!-- Atmosphere -->
                <div class="detail">
                    <div class="title">Atmosphere</div>
                    <div>Bustling</div>
                </div>
            </div>
            <!-- /Details -->
        </div>
        <!-- /Details -->

        <!-- Info -->
        <div class="location__info">
            <!-- Description -->
            <section class="block" id="description">
                <h2 class="block__header">Description</h2>
                <div class="block__content" >
                    <v-runtime-template :template="description"></v-runtime-template>
                </div>
            </section>
            <!-- History -->
            <section class="block" id="history">
                <h2 class="block__header">History</h2>
                <div class="block__content">
                    Nulla vulputate porttitor facilisis. Donec iaculis felis vehicula nisi viverra porta. Nullam sit amet aliquam nunc, vel facilisis erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas sodales arcu vitae ipsum tincidunt vulputate. Morbi iaculis dui non enim ornare fringilla. Donec placerat orci in ullamcorper lacinia. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.<br><br>
                    Vestibulum mattis molestie justo et malesuada. Donec ac lectus vel erat congue sollicitudin et ac odio. Vestibulum vitae leo vitae magna hendrerit posuere. Vestibulum vulputate sit amet ligula id laoreet. Sed id sagittis leo, sed feugiat leo. Morbi eget blandit sem, eget tempus nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam consequat justo non nunc commodo semper. Nulla facilisi. Sed non purus ornare odio vehicula mattis ac a odio. Praesent sed dui et nulla sagittis luctus. Phasellus quis suscipit arcu. Suspendisse cursus turpis sed laoreet tempor. Praesent lobortis erat non arcu rhoncus, vitae lacinia ligula ornare. Proin hendrerit nisl ut sagittis placerat.
                </div>
            </section>
            <!-- Culture -->
            <section class="block" id="culture">
                <h2 class="block__header">Culture</h2>
                <div class="block__content">
                    Nulla vulputate porttitor facilisis. Donec iaculis felis vehicula nisi viverra porta. Nullam sit amet aliquam nunc, vel facilisis erat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas sodales arcu vitae ipsum tincidunt vulputate. Morbi iaculis dui non enim ornare fringilla. Donec placerat orci in ullamcorper lacinia. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.<br><br>
                    Vestibulum mattis molestie justo et malesuada. Donec ac lectus vel erat congue sollicitudin et ac odio. Vestibulum vitae leo vitae magna hendrerit posuere. Vestibulum vulputate sit amet ligula id laoreet. Sed id sagittis leo, sed feugiat leo. Morbi eget blandit sem, eget tempus nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam consequat justo non nunc commodo semper. Nulla facilisi. Sed non purus ornare odio vehicula mattis ac a odio. Praesent sed dui et nulla sagittis luctus. Phasellus quis suscipit arcu. Suspendisse cursus turpis sed laoreet tempor. Praesent lobortis erat non arcu rhoncus, vitae lacinia ligula ornare. Proin hendrerit nisl ut sagittis placerat.
                </div>
            </section>
            <!-- Other -->
            <section class="block" id="other">
                <h2 class="block__header">Other</h2>
                <div class="block__content">
                    <!-- Weather -->
                    <section class="sub-block" id="weather">
                        <h2 class="sub-block__header">Weather</h2>
                        <div class="sub-block__content">
                            Weather Weather Weather
                        </div>
                    </section>
                    <!-- Trivia -->
                    <section class="sub-block" id="trivia">
                        <h2 class="sub-block__header">Trivia</h2>
                        <div class="sub-block__content">
                            Trivia Trivia Trivia
                        </div>
                    </section>
                </div>
            </section>
            <!-- Relationships -->
            <section class="block" id="relationships">
                <h2 class="block__header">Relationships</h2>
                <div class="block__content">
                    <!-- Home -->
                    <section class="sub-block" id="home">
                        <h2 class="sub-block__header">Home to</h2>
                        <div class="sub-block__content">
                            Character Character
                        </div>
                    </section>
                    <!-- Birthplace -->
                    <section class="sub-block" id="birthplace">
                        <h2 class="sub-block__header">Birthplace of</h2>
                        <div class="sub-block__content">
                            Character Character
                        </div>
                    </section>
                </div>
            </section>
        </div>
        <!-- /Info -->

        
    </div>
    <!-- /Wrapper -->
    <!-- <Lightbox title="Hello World!" content="Hello" :details="[
        {route:'locations', key:'jane doe', title:'Jane Doe'}, 
        {route:'about', title:'Hello'}, 
        {route:'', title:'World'}
    ]" /> -->
</div>
</template>

<script>
import VRuntimeTemplate from "v-runtime-template"
// @ is an alias to /src
import HeaderImage from '@/components/HeaderImage.vue'
// import Lightbox from '@/components/Lightbox.vue'

export default {
name: 'locations',
components: {
    VRuntimeTemplate,
    HeaderImage,
    // Lightbox
},
data() {
    return {
        name : "",
        description : `<router-link to="/about">HI</router-link>`
    }
},
created() {
    //once loaded, get the data
    this.name = this.$route.params.name
    // this.addLocation()
},
methods: {
    addLocation(){
        let uri = `${process.env.MONGOLAB_URI}/locations/add`;
        this.axios.post(uri, {title:"test", body:"test body"}).then(() => {
            this.$router.push({name: 'locations'})
        })
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


.location {
    width: inherit;

    &__details {
        // background: $accent-colour;
        padding-bottom: 1px;
        margin-bottom: 10px;

        @media #{$size-medium} {
            padding-top: 5px;
        }

        .image {
            @include display-flex();
            justify-content: center;
            max-width: 1200px;
            margin: 0 auto;
            box-sizing: border-box;

            @media #{$size-large} {
                padding: 0 5px;
            }
            
            img {
                display: block;
                width: 100%;
                max-width: inherit;
                object-fit: cover;
                object-position: top left;
                margin: 0 auto;

                @media #{$size-wide} {
                    object-position: center center;
                }
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

                div {
                    padding: 0 3px;
                }

                & > :not(.title) {
                    background: $block-colour-2;
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
                margin: 0 -15px;
                color: white;
                font-size: 1.2em;
                font-weight: 300;
                box-sizing: border-box;

                @media #{$size-medium} {
                    width: 45vw;
                }
            }

            &__content {
                padding: 5px 0;
                box-sizing: border-box;
            }
        }
    }
}
</style>