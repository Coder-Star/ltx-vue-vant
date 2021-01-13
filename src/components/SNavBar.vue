<!--
 * @author litianxing
 * @time 2021/1/12 7:50 下午
 * @description 导航栏组件
-->

<template>
  <div>
    <van-nav-bar
      v-bind="navBarProps"
      left-arrow
      fixed
      placeholder
      safe-area-inset-top
      @click-left="onClickLeft"
    />
  </div>
</template>

<script>
export default {
  name: "SNavBar",
  props: {

  },
  data() {
    return {

    }
  },
  computed: {
    navBarProps() {
      const {
        fixed,
        placeholder,
        safeAreaInsetTop,
        ...other
      } = this.$attrs
      return other
    }
  },
  created() {

  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
