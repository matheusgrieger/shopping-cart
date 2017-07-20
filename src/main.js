import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import './styles/theme.styl'
import Vuetify from 'vuetify'

import './styles/main.scss'

Vue.config.productionTip = false

Vue.use(Vuetify)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
