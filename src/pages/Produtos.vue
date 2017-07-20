<template>
  <v-toolbar class="elevation-0">
    <v-toolbar-title class="body-1">{{ pageStartEnd }} de {{ total }}</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-select v-model="orderBy.selected" label="Ordenação" single-line :items="orderBy.items" hint="Ordenação" :persistent-hint="orderBy.selected" item-text="label" item-value="value" bottom></v-select>
  </v-toolbar>
</template>

<script>
export default {
  name: 'produtos',
  data () {
    return {
      orderBy: {
        selected: null,
        items: [
          {
            label: 'Menor preço',
            value: 'price-lb'
          },
          {
            label: 'Maior preço',
            value: 'price-bl'
          },
          {
            label: 'Alfabética',
            value: 'alpha'
          }
        ]
      },
      search: '',
      productsPerPage: {
        selected: 8,
        items: [4, 8, 12]
      },
      page: 1,
      total: 20
    }
  },
  computed: {
    pageStartEnd () {
      const start = this.productsPerPage.selected * this.page + 1 - this.productsPerPage.selected
      let end = this.productsPerPage.selected * this.page
      if (end > this.total) {
        end = this.total
      }
      return `${start} a ${end}`
    }
  }
}
</script>
