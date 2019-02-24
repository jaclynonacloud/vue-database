<template>

  <section class="thumbnails">
    <div class="thumbnail" v-for="i in 10" :key="i">
      <img class="thumbnail__image" :src="'https://dummyimage.com/' + (i * 130) + 'x' + (i * 80) + '/89ba80/0011ff.png'" alt="">
      <!-- <img class="thumbnail__image" src="https://dummyimage.com/130x80/89ba80/0011ff.png" alt=""> -->
    </div>
  </section>

</template>

<script>
  export default  {
    name: 'Thumbnails',
    props: [],
    mounted() {

    },
    data() {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped lang="scss">
  @import '../globals';

  .thumbnails {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    padding: 5px 10px;

    .thumbnail {
      @include display-flex();
      justify-content: center;
      max-width: 100%;
      padding: 0;
      margin: 0 0 3px 3px;
      box-sizing: border-box;
      cursor: pointer;
      overflow: hidden;

      @media #{$size-large} {
        max-width: 240px;
      }

      &:hover {
        .thumbnail__image {
          opacity: 1;
        }
      }
      
      &__image {
        display: block;
        width: auto;
        max-height: 80px;
        padding: 0;
        margin: 0;
        opacity: 0.8;
        object-fit: scale-down;
        object-position: center center;
      }
      
    }
  }
</style>
