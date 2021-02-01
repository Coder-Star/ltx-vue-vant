<!--
 * @author litianxing
 * @time 2021/1/12 8:54 下午
 * @description CSSMenu
-->

<template>
  <div>
   <span>{{date | formatDate('yyyy')}}</span>
  </div>
</template>

<script>
import mixinForm from "../mixins/mixin_form"

export default {
  name: "JSMenu",
  mixins: [mixinForm],
  data() {
    return {
      list: {

      },
      date: Date
    }
  },
  props: {},
  created() {
    this.date = new Date()
    this.testJS()

    const number = 1111111.222222
    console.log(this.$tap.format.formatNumber(number, 2))
  },
  computed: {},
  methods: {
    testJS() {

    }
  }
}
</script>

<style scoped lang="scss">

</style>
