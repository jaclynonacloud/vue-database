<template>
<footer class="main-footer">
    <div class="main-footer__content">
        Vue Database &copy;2019
    </div>
</footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../globals';

.main-footer {
    flex: 1;
    @include display-flex();
    flex-flow: column;
    justify-content: flex-end;

    &__content {
        background: $main-colour;
        padding: 5px 25px;
        color: black;
        font-size: 1.1em;
        text-align: center;
        box-sizing: border-box;
    }
}

</style>
