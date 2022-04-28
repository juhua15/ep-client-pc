// 分类模块
import { topCategory } from '@/api/constants'
import { findAllCategory } from '@/api/category'
export default {
  namespaced: true,
  state () {
    return {
      // 分类信息集合,
      list: topCategory.map((item) => {
        return {
          name: item
        }
      })
    }
  },
  mutations: {
    // 修改分类信息
    setList (state, list) {
      state.list = list
    },
    open (state, item) {
      const category = state.list.find(category => category.id === item.id)
      category.open = true
    },
    hide (state, item) {
      const category = state.list.find(category => category.id === item.id)
      category.open = false
    }
  },
  actions: {
    // 获取所有的分类信息
    async getAllCategoryList (constext) {
      const { result } = await findAllCategory()
      result.forEach(item => { item.open = false })
      constext.commit('setList', result)
    }
  }
}
