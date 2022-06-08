import { createRouter, createWebHashHistory } from "vue-router"
import Layout from '../views/layout.vue'

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {path: '/', component: () => import('../views/home/index.vue')}
    ]
  },
  {
    path: '/login',
    component: () => import('../views/login/index.vue')
  }
]

/*
*  vue2 new VueRouter({}) 创建路由实例
*  vue3 createRouter({}) 创建路由实例
* */

// 创建路由
const router = createRouter({
  // 使用 hash 路由模式
  history: createWebHashHistory(),
  routes
})

// 默认暴露
export default router
