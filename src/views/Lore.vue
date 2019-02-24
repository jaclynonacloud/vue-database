<template>
<div class="lore">
    <HeaderImage src="https://dummyimage.com/1600x160/4F96D4/000000.png" caption="Souls" />
    
    <h1 class="lore__title">Lore</h1>

    <div class="lore__items">
        <!-- Lore Bit -->
        <div class="bit" v-for="i of 5" :key="i">
            <div class="bit__title">Lore Bit</div>
            <div class="bit__content">
                Lorem ipsum, id semper lacus. In tempor justo at neque dictum, eget lacinia ipsum porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque luctus viverra lectus tincidunt feugiat. Sed fringilla mollis nibh, non vulputate purus ultrices nec. Ut ac metus feugiat, sollicitudin velit quis, aliquam libero.

Nulla facilisi. Suspendisse potenti. Praesent dictum ligula eu arcu cursus fermentum. In metus justo, pharetra id ultrices posuere, interdum nec mi. Morbi semper ante mi, vitae luctus urna molestie vitae. Donec bibendum, diam vel gravida aliquet, sapien diam pharetra ex, ac convallis dui ligula vel tellus. Integer viverra erat nec blandit fringilla.
            </div>
        </div>
        <!-- /Lore Bit -->
    </div>

</div>
</template>

<script>
// @ is an alias to /src
import HeaderImage from '@/components/HeaderImage.vue'

export default {
name: 'lore',
components: {
    HeaderImage
}
}
</script>


<style scoped lang="scss">
@import '../globals';

.lore {
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



        .bit {
            margin-bottom: 15px;

            &__title {
                padding: 3px 10px;
                color: $accent-colour;
                font-size: 1.4em;
                box-sizing: border-box;
            }
            &__content {
                background: white;
                padding: 6px 8px;
                font-weight: 300;
                box-sizing: border-box;

                @media #{$size-large} {
                    margin: 10px;
                }
            }
        }
    }

}
</style>