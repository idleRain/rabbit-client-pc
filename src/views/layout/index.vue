<script lang="ts" setup name="Layout">
import AppTopNav from '@/views/layout/components/app-top-nav.vue'
import AppHeader from '@/views/layout/components/app-header.vue'
import AppHeaderSticky from '@/views/layout/components/app-header-sticky.vue'
import AppFooter from '@/views/layout/components/app-footer.vue'
</script>

<template>
  <!-- 顶部导航 -->
  <AppTopNav></AppTopNav>
  <!-- 头部 -->
  <AppHeader></AppHeader>
  <!-- 吸附导航 -->
  <AppHeaderSticky></AppHeaderSticky>
  <!-- 主体 -->
  <main>
    <router-view></router-view>
  </main>
  <!-- 底部 -->
  <AppFooter></AppFooter>
</template>

<style></style>
