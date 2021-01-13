<!--
 * @author litianxing
 * @time 2021/1/12 8:54 下午
 * @description CSSMenu
-->

<template>
  <div>
    <van-cell v-for="(item,index) in list" :key="index" :title="item.title" :label="item.label"/>
  </div>
</template>

<script>
export default {
  name: "CSSMenu",
  data() {
    return {
      list: {
        css: { title: "flex", label: "布局" }
      }
    }
  },
  props: {},
  created() {

  },
  computed: {},
  methods: {}
}
</script>

<style scoped lang="scss">

</style>
