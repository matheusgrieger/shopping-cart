import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Products from '@/pages/Produtos'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/produtos',
      name: 'Produtos',
      component: Products
    }
  ]
})
