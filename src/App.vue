<template>
  <v-app id="app">
    <v-toolbar class="elevation-0 main-toolbar" fixed>
      <v-toolbar-title>
        <router-link to="/">
          <img src="./assets/images/logo.svg" alt="Allioop">
        </router-link>
      </v-toolbar-title>
      <v-toolbar-items>
        <v-btn flat to="/produtos" router-link>Produtos</v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-btn icon @click.native.stop="toggleCart">
        <v-icon fa>shopping-bag</v-icon>
      </v-btn>
    </v-toolbar>
    <main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </main>
    <v-navigation-drawer clipped right temporary v-model="cartOpen">
      <a-side-cart></a-side-cart>
    </v-navigation-drawer>
    <v-footer></v-footer>
  </v-app>
</template>

<script>
import ASideCart from '@/components/ASideCart'

export default {
  name: 'app',
  data () {
    return {
      cartOpen: false
    }
  },
  methods: {
    toggleCart () {
      this.cartOpen = !this.cartOpen
    }
  },
  components: {
    ASideCart
  }
}
</script>
