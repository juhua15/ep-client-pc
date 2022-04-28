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
    }
  },
  actions: {
    // 获取所有的分类信息
    async getAllCategoryList (constext) {
      const { result } = await findAllCategory()
      console.log(result)
      constext.commit('setList', result)
    }
  }
}
