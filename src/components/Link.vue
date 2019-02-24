<template>
<!-- <router-link :to="{ name:route, params: { name:key } }" v-html="title"></router-link> -->
<router-link to="/about">Hello I'm a link!</router-link>
</template>

<script>
export default {
    name: 'Link',
    props: {
        route : String,
        key : String,
        title : String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../globals';



</style>
