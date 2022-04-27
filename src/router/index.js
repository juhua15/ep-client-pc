import { createRouter, createWebHashHistory } from 'vue-router'

const routes = []

// vue2.0 new VuewRouter({}) 创建路由实例
// Vue3.0 createRouter({}) 创建实例
const router = createRouter({
  history: createWebHashHistory(), // 使用hash的路由模式
  routes
})

export default router
