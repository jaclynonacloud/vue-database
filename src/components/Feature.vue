<template>
  <div class="feature" :style="{ 'height' : maxHeight || '35vh' }">
    <div class="feature-image">
      <img :src="src || 'https://dummyimage.com/600x400/b3b3b3/fafafa.png'" alt="feature image" :style="{ 'max-height' : maxHeight || '35vh', 'object-fit' : imgFit || 'contain' }">
    </div>
    <div class="caption-wrapper">
      <div class="feature-image__caption" v-html="caption"></div>
    </div>
  </div>
</template>

<script>
import store from './../store'
export default {
  name: 'Feature',
  data() {
    return {
      count: store.state.count
    }
  },
  props: {
    caption: String,
    src: String,
    maxHeight: String,
    imgFit: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../globals';

.feature {
  @include display-flex();
  flex-flow: column;
  align-items: center;
  background: mix($light-colour, $dark-colour, 80);
  width: 100%;
  max-width: 100%;
  height: 35vh;
}

.caption-wrapper {
  position: relative;
  width: 100%;
}

.feature-image {
  position: relative;
  @include display-flex();
  flex-flow: column;
  justify-content: center;
  // margin: auto;
  width: 100%;
  max-width: 100%;
  min-height: 100%;
  overflow: hidden;

  &__caption {
    position: absolute;
    bottom: 10px;
    background: white;
    padding: 0 4px;
    margin: 0 20px;
    box-sizing: border-box;
    line-height: 1.5em;

    &:empty {
      display: none;
    }

    @media #{$size-wide} {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: max-content;
      background: white;
      color: mix($accent-colour, black, 30);
      padding: 5px 25px;
      margin: 0;
      font-size: 1.2em;
      text-align: left;
    }

    & /deep/ .title {
      background: $accent-colour;
      padding: 4px 8px 4px 5px;
      margin-right: 5px;
      color: white;
      box-sizing: border-box;
    }
  }

  img {
    object-fit: contain;
    max-height: 35vh;
  }
}
</style>
