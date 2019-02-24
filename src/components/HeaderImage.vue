<template>
<div class="header-image">
    <Feature :src="src" maxHeight="80px" imgFit="cover" class="feature-small" />
    <Feature :src="src" maxHeight="120px" :caption="caption" imgFit="cover" class="feature-large" />
    <Feature :src="src" maxHeight="160px" :caption="caption" imgFit="cover" class="feature-wide" />
</div>
</template>


<script>
// @ is an alias to /src
import Feature from '@/components/Feature.vue'

export default {
    name: 'HeaderImage',
    components: {
        Feature
    },
    props: {
        src: String,
        caption: String
    }
}
</script>


<style scoped lang="scss">
@import '../globals';

.feature-small {
    @media #{$size-large} {
        display: none;
    }
}
.feature-large {
    display: none;
    @media #{$size-large} {
        display: block;
    }
    @media #{$size-wide} {
        display: none;
    }
}
.feature-wide {
    display: none;
    @media #{$size-wide} {
        display: block;
    }
}
</style>
