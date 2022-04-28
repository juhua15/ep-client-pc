import { createRouter, createWebHashHistory } from 'vue-router'
const LayoutView = () => import('@/views/LayoutView')
const HomeView = () => import('@/views/homeView')
const routes = [
  {
    path: '/',
    component: LayoutView,
    children: [
      {
        path: '/',
        component: HomeView
      }
    ]
  }
]

// vue2.0 new VuewRouter({}) 创建路由实例
// Vue3.0 createRouter({}) 创建实例
const router = createRouter({
  history: createWebHashHistory(), // 使用hash的路由模式
  routes
})

export default router
