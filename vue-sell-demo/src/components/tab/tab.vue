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
        <cube-slide-item v-for="(tab, index) of tabs" :key="index">
          <component ref="component" v-bind:is="tab.components" v-bind:data="tab.data"></component>
        </cube-slide-item>
      </cube-slide>
    </div>
  </div>
</template>

<script>

export default {
  name: 'tab',
  props: {
    tabs: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      index: 0,
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
  mounted() {
    this.onChange(this.index)
  },
  methods: {
    onChange(current) {
      this.index = current
      const component = this.$refs.component[current]
      component.fetch && component.fetch()
    },
    onScroll(pos) {
      const slideWidth = this.$refs.slide.slide.scrollerWidth
      const tabBarWidth = this.$refs.tabBar.$el.clientWidth
      const transform = -pos.x / slideWidth * tabBarWidth
      this.$refs.tabBar.setSliderTransform(transform)
    }
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
