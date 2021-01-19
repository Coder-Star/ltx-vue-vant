<!--
* @author litianxing
* @time 2021/1/11 12:37 上午
* @description 主菜单页面
-->

<template>
  <div>
    <van-cell
      v-for="(item,index) in list"
      :key="index"
      :title="item.title"
      :label="item.label"
      @click="onClickItem(item, index)"
    />
    <div class="div-style"></div>
  </div>
</template>

<script>
export default {
  name: "MainMenu",
  data() {
    return {
      list: [
        { title: "css", label: "学习", code: "css" },
        { title: "js", label: "js练习", code: "js" }
      ]
    }
  },
  props: {},
  created() {
  },
  computed: {},
  methods: {
    onClickItem(item, index) {
      console.log(item)
      switch (item.code) {
        case "css":
          this.$router.push({
            name: "css-menu"
          })
          break
        case "js":
          this.$router.push({
            name: "js-menu"
          })
          break
        default:
          break
      }
    }
  }
}
</script>

<style scoped lang="scss">

  .div-style {
    background-color: blue;
    width: 750px;
    height: 20px;
  }
</style>
