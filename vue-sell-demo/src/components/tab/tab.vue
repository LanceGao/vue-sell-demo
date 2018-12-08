<template>
  <div class="tab">
    <cube-tab-bar
      v-model="selectedLabel"
      :data="tabs"
      :showSlider=true
      :useTransition=false
      ref="tabBar"
      class="border-bottom-1px"
      >
    </cube-tab-bar>
    <div class="slide-wrapper">
      <cube-slide
      :auto-play=false
      :loop=false
      :show-dots=false
      :initial-index="index"
      ref="slide"
      @change="onChange"
      @scroll="onScroll"
      :options="slideOptions">
        <cube-slide-item>
          <goods></goods>
        </cube-slide-item>
        <cube-slide-item>
          <ratings></ratings>
        </cube-slide-item>
        <cube-slide-item>
          <seller></seller>
        </cube-slide-item>
      </cube-slide>
    </div>
  </div>
</template>

<script>
import Goods from 'components/goods/goods'
import Ratings from 'components/ratings/ratings'
import Seller from 'components/seller/seller'

export default {
  name: 'tab',
  data() {
    return {
      index: 0,
      tabs: [{
        label: '商品'
      }, {
        label: '评论'
      }, {
        label: '商家'
      }],
      slideOptions: {
        listenScroll: true,
        probeType: 3,
        directionLockThreshold: 0
      }
    }
  },
  computed: {
    selectedLabel: {
      get() {
        return this.tabs[this.index].label
      },
      set(newValue) {
        this.index = this.tabs.findIndex((value) => {
          return value.label === newValue
        })
      }
    }
  },
  methods: {
    onChange(current) {
      this.index = current
    },
    onScroll(pos) {
      const slideWidth = this.$refs.slide.slide.scrollerWidth
      const tabBarWidth = this.$refs.tabBar.$el.clientWidth
      const transform = -pos.x / slideWidth * tabBarWidth
      this.$refs.tabBar.setSliderTransform(transform)
    }
  },
  components: {
    Goods,
    Ratings,
    Seller
  }
}
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/variable"

  .tab
    >>> .cube-tab
      padding: 10px 0
    display: flex
    flex-direction: column
    height: 100%
    .slide-wrapper
      flex: 1
      overflow: hidden
</style>
