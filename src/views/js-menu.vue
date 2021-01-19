<!--
 * @author litianxing
 * @time 2021/1/12 8:54 下午
 * @description CSSMenu
-->

<template>
  <div>

  </div>
</template>

<script>
export default {
  name: "JSMenu",
  data() {
    return {
      list: {

      }
    }
  },
  props: {},
  created() {
    this.testJS()
  },
  computed: {},
  methods: {
    testJS() {
      const obj = {
        name: "张三",
        age: "李四"
      }
      console.log(obj)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
