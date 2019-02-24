<template>
<div class="encyclopedia">
    <HeaderImage src="https://dummyimage.com/1600x160/4FD468/000000.png" caption="Spirit" />
    
    <div class="encyclopedia__header">
        <h1 class="encyclopedia__title">Encyclopedia</h1>
        <div class="search">
            <input type="text" placeholder="search encyclopedia" autocomplete="off">
        </div>
    </div>

    <div class="encyclopedia__items">
        <!-- encyclopedia Bit -->
        <div class="bit" v-for="i of 5" :key="i">
            <div class="bit__title">Term</div>
            <div class="bit__content">
                encyclopediam ipsum, id semper lacus. In tempor justo at neque dictum, eget lacinia ipsum porttitor. encyclopediam ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque luctus viverra lectus tincidunt feugiat. Sed fringilla mollis nibh, non vulputate purus ultrices nec. Ut ac metus feugiat, sollicitudin velit quis, aliquam libero.

Nulla facilisi. Suspendisse potenti. Praesent dictum ligula eu arcu cursus fermentum. In metus justo, pharetra id ultrices posuere, interdum nec mi. Morbi semper ante mi, vitae luctus urna molestie vitae. Donec bibendum, diam vel gravida aliquet, sapien diam pharetra ex, ac convallis dui ligula vel tellus. Integer viverra erat nec blandit fringilla.
            </div>
        </div>
        <!-- /encyclopedia Bit -->
    </div>

</div>
</template>

<script>
// @ is an alias to /src
import HeaderImage from '@/components/HeaderImage.vue'

export default {
name: 'encyclopedia',
components: {
    HeaderImage
}
}
</script>


<style scoped lang="scss">
@import '../globals';

.encyclopedia {
    @include display-flex();
    flex-flow: column;

    &__header {
        width: 100%;
        padding: 5px;
        box-sizing: border-box;

        @media #{$size-large} {
            @include display-flex();
            flex-flow: row wrap;
            justify-content: space-between;
            align-items: center;
        }

        .search {
            flex: 1;
            flex-shrink: 0;
            @include display-flex();
            justify-content: center;

            @media #{$size-large} {
                justify-content: flex-end;
            }

            input {
                background: mix(white, $light-colour, 70);
                min-width: 250px;
                width: 100%;
                max-width: 500px;
                padding: 5px 10px;
                border: none;
                border-radius: 25px;
                color: mix($main-colour, $dark-colour, 50);
                user-select: none;
                outline: none;

                &::placeholder {
                    color: mix($light-colour, $main-colour, 70);
                }

                &:hover,
                &:active {
                    background: white;
                }
            }
        }
    }

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