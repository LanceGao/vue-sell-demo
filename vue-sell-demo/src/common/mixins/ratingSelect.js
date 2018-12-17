const ALL = 2

export default {
  data() {
    return {
      selectType: ALL,
      onlyContent: false
    }
  },
  methods: {
    onSelect(type) {
      this.selectType = type
    },
    onToggle() {
      this.onlyContent = !this.onlyContent
    }
  },
  computed: {
    computedRatings() {
      let ret = []
      this.ratings.forEach((rating) => {
        if (this.onlyContent && !rating.text) {
          return
        }
        if (this.selectType === 2 || this.selectType === rating.rateType) {
          ret.push(rating)
        }
      })
      return ret
    }
  }
}
