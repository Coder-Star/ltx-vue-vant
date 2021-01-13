<!--
* @author litianxing
* @time 2021/1/11 12:13 上午
* @description APP
-->

<template>
  <div id="app" v-touch:right="onSwipeRight" class="app-container">
    <s-nav-bar :title="navBarTitle" v-if="showNavBar"/>
    <transition :name="transitionName">
      <!--使页面返回时不自动刷新页面-->
      <navigation>
        <router-view class="router-view"></router-view>
      </navigation>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      transitionName: "slide-right",
      navBarTitle: "",
      showNavBar: true
    }
  },
  watch: {
    // 监听路由变化时的状态为前进还是后退，继而变化相应的动画
    $route(to, from) {
      console.log(this.$navigation.getRoutes())
      const { title, showNavBar } = to.meta
      if (this.$tap.validate.validateNotNull(title)) {
        this.navBarTitle = title
      }
      if (this.$tap.validate.validateNotNull(showNavBar)) {
        this.showNavBar = showNavBar
      } else {
        this.showNavBar = true
      }
      const { isBack } = this.$router
      if (isBack === true) {
        this.transitionName = "slide-right"
      } else if (isBack === false) {
        this.transitionName = "slide-left"
      } else {
        // 第一个进入的vue页面关闭动画，isBack值为undefined
        this.transitionName = ""
      }
      this.$router.isBack = false
    }
  },
  methods: {
    onSwipeRight() {
      console.log("返回上一页面")
      this.$router.go(-1)
    }

  }
}
</script>

<style lang="scss" scoped>

  .app-container {
    height: 100vh;
    width: 100vw;
  }

  .router-view {
    width: 100%;
  }

  .slide-left-enter,
  .slide-right-leave-to {
    opacity: 0;
    transform: translateX(100%);
  }

  .slide-left-leave-to,
  .slide-right-enter {
    opacity: 0;
    transform: translateX(-100%);
  }

  .slide-left-enter-active,
  .slide-left-leave-active,
  .slide-right-enter-active,
  .slide-right-leave-active {
    transition: 0.5s; // 动画时间
    position: absolute;
  }
</style>
