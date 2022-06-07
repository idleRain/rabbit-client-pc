import {createRouter, createWebHashHistory} from "vue-router"

const routes: [] = []

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
