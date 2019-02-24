<template>
<div class="lightbox" @click="close()" v-if="src != null && src != ''" @touchmove.stop.prevent>
    <div class="image-container">
        <aside class="details">
            <div class="detail" v-for="(detail, i) in details" :key="i">
                <!-- IF there is a route/key, add it -->
                <router-link :to="{ name:detail.route, params:{ name:detail.key } }" v-html="detail.title" v-if="detail.route"></router-link>
                <!-- OTHERWISE< put title in div -->
                <div v-html="detail.title" v-if="!detail.route"></div>
            </div>
        </aside>
        <div class="image">
            <img :src="src" alt="lightbox image" v-if="src != null">
        </div>
    </div>
    <div class="info">
        <div class="info__title" v-html="title"></div>
        <div class="info__content" v-html="content"></div>
    </div>
</div>
</template>

<script>
export default {
    name: 'Lightbox',
    props: {
        src: String,
        title: String,
        content: String,
        details: Array
    },
    data() {
        return {
            isOpen : false
        }
    },
    methods: {
        close() {
            this.src = ''
        }
    },
    // computed: {
    //     transformed() {
    //         return {
    //         template: transformer(...),
    //         props: this.$options.props
    //         }
    //     }
    // }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../globals';

.lightbox {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    @include display-flex();
    flex-flow: column;
    background: mix($dark-colour, transparent, 90);
    height: 100vh;
    z-index: 100;

    .image-container {
        flex: 1;
        max-width: 100vw;
        max-height: 100%;

        .image {
            flex: 1;
            @include display-flex();
            justify-content: center;
            align-items: center;
            width: 100%;
            height: 100%;

            img {
                max-width: 100%;
                max-height: 100%;
                object-fit: scale-down;                
            }

        }
    }
    .info {
        background: $accent-colour;
        height: max-content;
        max-height: 350px;
        padding: 10px 15px;
        color: white;
        box-sizing: border-box;
        border-left: solid 25px $main-colour;

        &__title {
            font-size: 1.3em;
        }

        &__content {
            font-weight: 300;
        }

        &:empty {
            display: none;
        }
    }
    .details {
        position: absolute;
        top: 15vh;
        left: 0;
        background: $main-colour;
        max-width: 200px;
        padding: 15px;
        font-weight: 300;

        &:empty {
            display: none;
        }
    }
}



</style>
