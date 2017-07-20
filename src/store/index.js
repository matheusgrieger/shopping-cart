import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cartOpen: false
  },
  mutations: {
    toggleCart (state) {
      state.cartOpen = !state.cartOpen
    }
  }
})

export default store
