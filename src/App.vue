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
    <a-side-cart></a-side-cart>
    <v-footer></v-footer>
  </v-app>
</template>

<script>
import { mapMutations } from 'vuex'
import ASideCart from '@/components/ASideCart'

export default {
  name: 'app',
  methods: {
    ...mapMutations(['toggleCart'])
  },
  components: {
    ASideCart
  }
}
</script>
