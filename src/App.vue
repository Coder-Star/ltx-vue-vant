<!--
* @author litianxing
* @time 2021/1/11 12:13 上午
* @description APP
-->

<template>
    <div id="app">
        <!--使页面返回时不自动刷新页面-->
        <transition :name="transitionName">
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
      transitionName: "slide-right"
    }
  },
  watch: {
    // 监听路由变化时的状态为前进还是后退，继而变化相应的动画
    $route(to, from) {
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
  }
}
</script>

<style>
    .router-view {
        position: absolute;
        height: 100%;
        width: 100%;
        top: 0;
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
        transition: 0.5s; /*动画时间 */
        position: absolute;
        top: 0;
    }
</style>
