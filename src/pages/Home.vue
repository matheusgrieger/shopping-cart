<template>
  <v-container class="home">
    <v-layout>
      <v-flex xs12 v-html="readme"></v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import readme from '../../README.md'

export default {
  name: 'home',
  data () {
    return {
      readme
    }
  }
}
</script>
