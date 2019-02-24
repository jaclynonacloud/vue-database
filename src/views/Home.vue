<template>
  <div class="home">
    <FeatureThumbnails autoplay="false" autoplayInterval="3000" />
    <Feature src="https://dummyimage.com/600x400/d6a439/000000.png" caption="Hello World!" maxHeight="800px" />
  </div>
</template>

<script>
// @ is an alias to /src
import Feature from '@/components/Feature.vue'
import FeatureThumbnails from '@/components/FeatureThumbnails.vue'

export default {
  name: 'home',
  components: {
    Feature,
    FeatureThumbnails
  }
}
</script>


<style scoped lang="scss">
@import '../globals';

.home {
  @include display-flex();
  flex-flow: column;

  .feature-thumbnails {
    margin: 5px 0;

    @media #{$size-wide} {
      margin: 0;
    }
  }
}
</style>