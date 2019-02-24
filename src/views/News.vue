<template>
<div class="news">
    <HeaderImage src="https://dummyimage.com/1600x160/4F96D4/000000.png" />
    
    <h1 class="news__title">News</h1>

    <div class="news__items">
        <!-- news story -->
        <article class="story" v-for="i of 5" :key="i">
            <div class="story__title">Title</div>
            <div class="story__date">January 1, 2000</div>
            <div class="story__content">
                newsm ipsum, id semper lacus. In tempor justo at neque dictum, eget lacinia ipsum porttitor. newsm ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque luctus viverra lectus tincidunt feugiat. Sed fringilla mollis nibh, non vulputate purus ultrices nec. Ut ac metus feugiat, sollicitudin velit quis, aliquam libero.

Nulla facilisi. Suspendisse potenti. Praesent dictum ligula eu arcu cursus fermentum. In metus justo, pharetra id ultrices posuere, interdum nec mi. Morbi semper ante mi, vitae luctus urna molestie vitae. Donec bibendum, diam vel gravida aliquet, sapien diam pharetra ex, ac convallis dui ligula vel tellus. Integer viverra erat nec blandit fringilla.
            </div>
        </article>
        <!-- /news story -->
    </div>

</div>
</template>

<script>
// @ is an alias to /src
import HeaderImage from '@/components/HeaderImage.vue'

export default {
name: 'news',
components: {
    HeaderImage
}
}
</script>


<style scoped lang="scss">
@import '../globals';

.news {
    @include display-flex();
    flex-flow: column;

    &__title {
        text-align: center;
        padding: 0 10px;

        @media #{$size-large} {
            text-align: left;
        }
    }

    &__items {
        @include display-flex();
        flex-flow: column;



        .story {
            margin-bottom: 15px;

            &__title {
                padding: 3px 10px;
                color: $accent-colour;
                font-size: 1.4em;
                box-sizing: border-box;
            }
            &__date {
                background: mix($accent-colour, $main-colour, 60);
                color: white;
                padding: 2px 10px;
                font-weight: 300;

                @media #{$size-medium} {
                    margin: 0 10px;
                    width: max-content;
                    min-width: 200px;
                }
            }
            &__content {
                background: white;
                padding: 6px 8px;
                font-weight: 300;
                box-sizing: border-box;

                @media #{$size-large} {
                    margin: 10px;
                    margin-top: 0;
                }
            }
        }
    }

}
</style>