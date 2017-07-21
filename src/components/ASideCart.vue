<template>
  <v-container fluid class="pa-0">
    <v-layout column class="ml-0">
      <v-toolbar dark class="elevation-0">
        <v-toolbar-title>Sacola</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon @click.native="closeCart">
          <v-icon fa>close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-list dark two-line>
        <template v-for="(prod, index) in cart">
          <v-list-tile avatar :key="prod.id" tag="div">
            <v-list-tile-avatar>
              <img src="https://placehold.it/32x32" :alt="prod.title">
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title v-html="prod.title"></v-list-tile-title>
              <v-list-tile-sub-title v-html="formattedPrice(prod.price)"></v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn icon @click.native.stop="removeFromCart(index)">
                <v-icon fa class="error--text">trash</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </template>
      </v-list>
      <v-divider></v-divider>
      <v-layout row justify-space-between>
        <v-flex class="ml-3">
          <p class="subheading mb-0 mt-3 grey--text text--lighten-2">Subtotal</p>
        </v-flex>
        <v-flex class="mr-3 text-xs-right">
          <p class="title mb-0 mt-3 blue--text text--lighten-2">{{ formattedPrice(totalPrice) }}</p>
        </v-flex>
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  methods: {
    closeCart () {
      this.$emit('close-cart')
    },

    formattedPrice (price) {
      return `R$ ${price.toFixed(2).replace(/\./, ',')}`
    },

    removeFromCart (index) {
      this.$store.commit('removeFromCart', index)
    }
  },
  computed: {
    ...mapState(['cart']),

    totalPrice () {
      return this.cart.reduce((total, current) => total + current.price, 0)
    }
  }
}
</script>
