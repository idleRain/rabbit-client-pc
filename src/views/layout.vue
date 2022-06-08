<template>
  <app-navbar></app-navbar>
  <div>顶部通栏</div>
  <div>顶部导航</div>
  <div>
    <!-- 二级路由出口 -->
    <router-view></router-view>
  </div>
  <div>底部</div>
</template>

<script>
import AppNavbar from "../components/app-navbar.vue";
export default {
  name: 'XtxLayout',
  components: {
    AppNavbar
  }

}
</script>
