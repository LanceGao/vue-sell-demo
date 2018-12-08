<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
  </div>
</template>

<script>
import VHeader from 'components/v-header/v-header.vue'
import { getSeller } from './api'

export default {
  name: 'app',
  data() {
    return {
      seller: {}
    }
  },
  created() {
    console.log('created', this)
    this._getSeller()
  },
  methods: {
    _getSeller() {
      getSeller().then((data) => {
        console.log('methods', this)
        this.seller = data
        console.log(this.seller)
      })
    }
  },
  components: {
    VHeader
  }
}
</script>
<style lang="stylus">

</style>
