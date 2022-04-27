import { createStore } from 'vuex'
import cart from './modules/cart'
import category from './modules/category'
import user from './modules/user'
import createPersistedSate from 'vuex-persistedstate'
// vue2.0 创建仓库 new Vuex.create({})
// vue3.0 使用 createStore（{}) 方法
export default createStore({
  modules: {
    cart,
    category,
    user
  },
  // 配置插件
  plugins: [
    // 默认存储在loaclStoreage中
    createPersistedSate({
      key: 'ep-client-pc-store',
      paths: ['user', 'cart']
    })
  ]
})
