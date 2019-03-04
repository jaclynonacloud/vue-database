import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import VueAxios from 'vue-axios'
import axios from 'axios'

Vue.use(VueAxios, axios);

// const URL = `https://js-v-database.herokuapp.com/#/:${process.env.PORT || 4000}`
// const URL = `https://js-v-database.herokuapp.com`
const URL = process.env.API_URL || "http://localhost:4000/api"

export default new Vuex.Store({
  state: {
    count: 1,
    characters: [],
    routes: [],
    hasLoaded: false,
    loggedIn: false
  },
  mutations: {

    logIn(state) {
      state.loggedIn = true
    },

    initCharacters(state, payload) {
      state.characters = payload
    },
    addCharacter(state, payload) {
      let { data, callback } = payload
      if(!state.loggedIn) {
        callback("NO_LOGIN")
        return
      }

      //send to axios
      let route = `${URL}/characters/add`
      axios.post(route, data)
          .then(() => {            
            //--add character to store
            if(state.characters == null) state.characters = []
            state.characters.push(payload.data)            
            callback("SUCCESS")
          })
    },
    updateCharacter(state, payload) {
      const { lookup, data, callback } = payload
      if(!state.loggedIn) {
        callback("NO LOGIN")
        return
      }
        //--update character
        let route = `${URL}/characters/update/${lookup}`
        axios.post(route, data)
            .then(() => {
                // addRoute({lookup:data.lookup, route:'character'})

                //--update store
                let character = state.characters.find(ch => ch.lookup == lookup)
                if(character != null) {
                  const index = state.characters.indexOf(character)
                  state.characters[index] = data
                  // eslint-disable-next-line
                  console.log("STATE CHARS", state.characters)
                }

                callback("SUCCESS")
            })

    },

    initRoutes(state, payload) {
      state.routes = payload
    },
    addRoute(state, payload) {
      if(!state.loggedIn) return
      const { lookup, route } = payload
      let src = `${URL}/routes/add`
        axios.post(src, {lookup, route})
            .then(() => {
                // eslint-disable-next-line
                console.log("ADDED ROUTE!")
            })
    },

    loaded(state) {
      state.hasLoaded = true
    }

  },
  actions: {

    loadData ({ commit }) {
      return new Promise(async res => {
        /* eslint-disable */

        console.log("LOADING")

        //load characters
        const characters = await axios.get(`${URL}/characters`)
        console.log("Loaded characters")
        commit('initCharacters', characters.data)
        const routes = await axios.get(`${URL}/routes`)
        console.log("Loaded routes")
        commit('initRoutes', routes.data)

        console.log("----FINISHED LOADING----")
        commit('loaded')

        res()
      })
    },

    waitForData({ commit, state }) {
      if(state.hasLoaded) return Promise.resolve()

      return new Promise(res => {

        /* eslint-disable */
        const interval = window.setInterval(() => {
          if(state.hasLoaded) {
            window.clearInterval(interval)
            res()
          }
        }, 100)

      })
      
      
    },

    loaded ({ commit }) {
      commit('loaded')
    }

  },

  getters: {
    getCharacterByLookup: (state) => (lookup) => {
      return state.characters.find(ch => ch.lookup == lookup)
    },
    checkIfValidRoute: (state) => (lookup, route) => {
      return state.routes.some(rt => rt.lookup == lookup && rt.route == route)
    }
  }

})