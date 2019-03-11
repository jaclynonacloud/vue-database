<template>
  <div id="app">
    <nav class="nav">
      <div class="nav__collapse" @click="onToggleMenu"><div class="nav__collapse__icon"></div></div>
      <div class="nav__container">
        <div class="nav__items" :class="{'hide' : !showMenu }">
          <div class="nav__logo">Logo</div>
          <div class="nav__item" :class="{'is-active' : subIsActive('/') }">
            <router-link to="/">Home</router-link>
          </div>
          <div class="nav__item" :class="{'is-active': subIsActive('/about')}">
            <router-link to="/about">About</router-link>
          </div>
          <div class="nav__item" :class="{'is-active': subIsActive('/characters')}">
            <router-link to="/characters">Characters</router-link>
          </div>
          <div class="nav__item" :class="{'is-active': subIsActive('/locations')}">
            <router-link to="/locations">Locations</router-link>
          </div>
          <div class="nav__item" :class="{'is-active': subIsActive('/lore')}">
            <router-link to="/lore">Lore</router-link>
          </div>
          <div class="nav__item" :class="{'is-active': subIsActive('/encyclopedia')}">
            <router-link to="/encyclopedia">Encyclopedia</router-link>
          </div>
          <div class="nav__item" :class="{'is-active': subIsActive('/news')}">
            <router-link to="/news">News</router-link>
          </div>
          <div class="nav__item" :class="{'is-active': subIsActive('/admin')}" v-if="loggedIn">
            <router-link to="/admin">Admin</router-link>
          </div>
        </div>
      </div>
    </nav>
    <div class="container">
      <router-view/>
      <Footer />
    </div>
  </div>
</template>


<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue'
import { loadData } from '@/main'
import store from '@/store'

export default {
  name: 'vue-app',
  components: {
    Footer
  },
  data() {
    return {
      showMenu: false
    }
  },
  created() {
    //load all data
    loadData()
  },
  methods: {

    onToggleMenu() {
      this.showMenu = !this.showMenu
    },

    /*https://jsfiddle.net/eywraw8t/383148/*/
    subIsActive(input) {
      const paths = Array.isArray(input) ? input : [input]
      
      return paths.some(path => {
        return this.$route.path.endsWith(path) // current path starts with this path string
      })
    }

  },
  computed: {
    loggedIn() { return store.state.loggedIn }
  }
}
</script>


<style lang="scss">
@import 'globals';
@import 'clear';

#app {
  @include display-flex();
  flex-flow: column;
  background: $light-colour;
  width: calc(100vw - (100vw - 100%));
  min-height: 100vh;
  @extend %quicksand;

  @media #{$size-wide} {
    flex-flow: row;
  }
}
.nav {
  position: fixed;
  left: 0;
  right: 0;
  background: $dark-colour;
  min-height: 60px;
  height: max-content;
  z-index: 99;

  @media #{$size-large} {
    position: relative;
    left: unset;
    right: unset;
  }

  @media #{$size-wide} {
    width: max-content;
    height: inherit;
  }


  &__collapse {
    position: relative;
    @include display-flex();
    justify-content: center;
    align-items: center;
    padding: 5px;
    user-select: none;
    box-sizing: border-box;

    @media #{$size-large} {
      display: none;
    }

    // &:focus,
    // &:hover {
    //   .nav__collapse__icon {
    //     background: $accent-colour;
    //   }
    // }

    &__icon {
      background: $main-colour;
      width: 50px;
      height: 50px;
      margin: auto auto;
      -webkit-clip-path: polygon(0% 0%, 0% 100%, 25% 100%, 25% 25%, 75% 25%, 75% 75%, 25% 75%, 25% 100%, 100% 100%, 100% 0%);
      clip-path: polygon(0% 0%, 0% 100%, 25% 100%, 25% 25%, 75% 25%, 75% 75%, 25% 75%, 25% 100%, 100% 100%, 100% 0%);
      cursor: pointer;

    }
  }

  &__logo {
    background: $dark-colour;
    width: 100%;
    padding: 20px 0;
    margin: auto;
    color: white;
    font-size: 1.4em;
    text-align: center;
    box-sizing: border-box;
  }

  &__container {
    position: relative;
  }


  &__items {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: grid;
    grid-auto-flow: row;
    grid-auto-rows: minmax(40px, auto);
    overflow: hidden;
    max-height: 400px;
    transition: ease all 1s;

    &.hide {
      max-height: 0;
    }

    @media #{$size-large} {
      position: relative;
      top: unset;
      left: unset;
      right: unset;
      grid-auto-flow: column;
      max-height: unset;

      &.hide {
        max-height: unset;
      }
    }

    @media #{$size-wide} {
      grid-auto-flow: row;
      justify-content: flex-start;
    }
  }

  &__item {
    position: relative;
    background: $main-colour;
    @include display-flex();
    justify-content: center;
    align-items: center;
    font-weight: 300;
    font-size: 1.2em;
    cursor: pointer;

    a {

      @media #{$size-medium} {
        @include display-flex();
        justify-content: center;
        align-items: center;
        padding: 5px 15px;
        width: 100%;
        height: 100%;
      }
    }

    &:hover {

      @media #{$size-large} {
        background: mix($main-colour, $accent-colour, 70);
      }
    }

    &.is-active {
      background: $accent-colour;
    }

    a {
      color: white;
      &.router-link-exact-active {
        color: $main-colour;
      }
    }
  } 
}

.container {
  flex: 1;
  @include display-flex();
  flex-flow: column;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  margin-top: 60px;

  @media #{$size-large} {
    flex: 1;
    margin-top: unset;
    overflow-x: hidden;
  }
}
</style>
