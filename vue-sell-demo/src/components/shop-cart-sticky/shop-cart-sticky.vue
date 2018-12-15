<template>
  <div class="shop-cart-sticky" v-show="visible">
    <shop-cart
    :selectFoods="selectFoods"
    :minPrice="minPrice"
    :deliveryPrice="deliveryPrice"
    :fold="fold"
    :sticky="sticky"
    ref="shopCart">
    </shop-cart>
  </div>
</template>

<script>
  import ShopCart from 'components/shop-cart/shop-cart'
  import mixinPopup from 'common/mixins/popup.js'

  export default {
    mixins: [mixinPopup],
    name: 'shop-cart-sticky',
    props: {
      selectFoods: {
        type: Array,
        default() {
          return []
        }
      },
      minPrice: {
        type: Number,
        default: 0
      },
      deliveryPrice: {
        type: Number,
        default: 0
      },
      fold: {
        type: Boolean,
        default: true
      },
      list: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {
        sticky: true
      }
    },
    methods: {
      drop(el) {
        this.$refs.shopCart.drop(el)
      }
    },
    components: {
      ShopCart
    }
  }
</script>

<style lang="stylus" scoped>
  .shop-cart-sticky
    position: absolute
    left: 0
    bottom: 0
    z-index: 999
    width: 100%
    height: 48px
</style>
