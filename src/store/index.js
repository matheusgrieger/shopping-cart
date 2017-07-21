import Vue from 'vue'
import Vuex from 'vuex'
import persistedState from 'vuex-persistedstate'

import products from '@/assets/resources/products'

Vue.use(Vuex)

const store = new Vuex.Store({
  plugins: [persistedState({
    paths: ['cart']
  })],
  state: {
    products,
    cart: []
  },
  mutations: {
    addToCart (state, product) {
      state.cart.push(product)
    },
    removeFromCart (state, index) {
      state.cart.splice(index, 1)
    }
  }
})

export default store
