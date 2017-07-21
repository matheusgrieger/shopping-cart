<template>
  <v-container class="products-page">
    <v-toolbar class="elevation-0 product-toolbar">
      <v-toolbar-title class="body-1 hidden-sm-and-down">{{ pageStartEnd.start }} a {{ pageStartEnd.end }} de {{ totalProducts }}</v-toolbar-title>
      <v-spacer class="hidden-sm-and-down"></v-spacer>
      <v-select :items="orderBy.items" v-model="orderBy.selected" overflow label="Ordenação" item-text="label" item-value="value" @change="resetPagination"></v-select>
      <v-select :items="productsPerPage.items" v-model="productsPerPage.selected" overflow label="Produtos por página" item-text="label" item-value="value" @change="resetPagination"></v-select>
    </v-toolbar>
    <v-container fluid class="pl-0 pr-0">
      <v-layout row-sm column-xs wrap>
        <v-flex xs12 sm6 md4 lg3 xl2 v-for="prod in filteredProducts" class="mb-2" :key="prod.id">
          <v-card>
            <v-card-media class="white--text" src="https://placehold.it/200x200" height="200px">
              <v-container fill-height fluid>
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <span class="headline">{{ prod.title }}</span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-media>
            <v-card-title>
              <div>
                <span class="green--text title">R$ {{ formattedPrice(prod.price) }}</span>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn outline secondary @click.native.stop="addToCart(prod)">
                Comprar
                <v-icon right fa secondary>plus-circle</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-layout row justify-center v-show="totalPages > 1">
      <v-pagination v-model="page" :length="totalPages"></v-pagination>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

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
            value: null
          }
        ]
      },
      productsPerPage: {
        selected: null,
        items: [4, 8, 12]
      },
      page: 1
    }
  },
  methods: {
    resetPagination () {
      this.page = 1
    },

    formattedPrice (price) {
      return price.toFixed(2).replace(/\./, ',')
    },

    addToCart (product) {
      this.$store.commit('addToCart', product)
    }
  },
  computed: {
    pageStartEnd () {
      const start = this.selectedProductsPerPage * this.page + 1 - this.selectedProductsPerPage
      let end = this.selectedProductsPerPage * this.page
      if (end > this.totalProducts) {
        end = this.totalProducts
      }
      return {start, end}
    },

    selectedProductsPerPage () {
      return this.productsPerPage.selected || 8
    },

    totalPages () {
      return Math.ceil(this.totalProducts / this.selectedProductsPerPage)
    },

    totalProducts () {
      return this.products.length
    },

    ...mapState(['products']),

    filteredProducts () {
      return this.products.sort((a, b) => {
        if (this.orderBy.selected === 'price-lb') {
          return a.price - b.price
        } else if (this.orderBy.selected === 'price-bl') {
          return b.price - a.price
        }

        return a.title > b.title ? 1 : -1
      }).slice(this.pageStartEnd.start - 1, this.pageStartEnd.end)
    }
  }
}
</script>
