<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab-wrapper">
      <tab :tabs="tabs"></tab>
    </div>
  </div>
</template>

<script>
import VHeader from 'components/v-header/v-header.vue'
import Goods from 'components/goods/goods'
import Ratings from 'components/ratings/ratings'
import Seller from 'components/seller/seller'
import Tab from 'components/tab/tab'
import { getSeller } from './api'
import qs from 'query-string'

export default {
  name: 'app',
  data() {
    return {
      seller: {
        id: qs.parse(location.search).id
      }
    }
  },
  created() {
    this._getSeller()
  },
  methods: {
    _getSeller() {
      getSeller({
        id: this.seller.id
      }).then((data) => {
        this.seller = data
      })
    }
  },
  computed: {
    tabs() {
      return [{
        label: '商品',
        components: Goods,
        data: {
          seller: this.seller
        }
      }, {
        label: '评论',
        components: Ratings,
        data: {
          seller: this.seller
        }
      }, {
        label: '商家',
        components: Seller,
        data: {
          seller: this.seller
        }
      }]
    }
  },
  components: {
    VHeader,
    Tab
  }
}
</script>
<style lang="stylus">
  #app
    .tab-wrapper
      position: fixed
      top: 136px
      left: 0
      right: 0
      bottom: 0
</style>
