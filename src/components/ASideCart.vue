<template>
  <v-navigation-drawer clipped right temporary v-model="cartOpen">
    <p>Cart wrapper</p>
  </v-navigation-drawer>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['cartOpen'])
  }
}
</script>
