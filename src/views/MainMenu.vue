<!--
* @author litianxing
* @time 2021/1/11 12:37 上午
* @description 主菜单页面
-->

<template>
    <div>
        <van-cell v-for="(item,index) in list" :key="index" :title="item.title" :label="item.label" />
    </div>
</template>

<script>
export default {
  name: "MainMenu",
  data() {
    return {
      list: {
        css: { title: "css", label: "学习" }
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
