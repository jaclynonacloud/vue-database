<template>
  <div class="about">
    <Feature src="https://dummyimage.com/1400x400/d6a439/000000.png" maxHeight="400px" imgFit="cover" />
    <div class="wrapper">
      <h1>Welcome to a new kind of database.</h1>
      <p>When it comes to holding data, this database is ready and rearing to go.  Made with the device-first styles, this database can be viewed from any type of screen and still look good.  Want to see more? Browse around and see what you could achieve.</p>
      <blockquote>A new type of experience, but one that is fun and clean.</blockquote><cite>- Jaclyn Staples</cite>
      <h2>A long time coming.</h2>
      <p>After years of developing a multitude of database sites, it's about time that one was built to be a home for all data structures.</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Feature from '@/components/Feature.vue'

export default {
  name: 'about',
  components: {
    Feature
  }
}
</script>


<style scoped lang="scss">
@import '../globals';

.about {
  @include display-flex();
  flex-flow: column;

  .wrapper {
    padding: 5px;
    box-sizing: border-box;
  }

  .feature-thumbnails {
    margin: 5px 0;

    @media #{$size-wide} {
      margin: 0;
    }
  }
}
</style>