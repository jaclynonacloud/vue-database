import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueAxios from 'vue-axios';
import axios from 'axios';

Vue.use(VueAxios, axios);

import VueDraggable from 'vue-draggable'
Vue.use(VueDraggable)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


export function loadData() {
  // //get all the characters
  // axios.get('http://localhost:4000/characters')
  //   .then(data => {
  //     // eslint-disable-next-line
  //     console.log("ALL CHARACTERS", data)
      
  //     // eslint-disable-next-line
  //     console.log("STORE DATA", store.state.characters)
      
      
  //   })
    // store.commit('initCharacters', data.data)
    //tell functions data is loaded
    //  store.dispatch('loaded')

    store.dispatch('loadData')
    

    // store.subscribe((mutation) => {
    //   if(mutation.type == 'loaded') {
    //     // eslint-disable-next-line
    //     console.log("I am LOADED")
    //   }
    // })
}