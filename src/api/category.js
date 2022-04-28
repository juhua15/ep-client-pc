// 定义分类的api接口函数
import request from '@/utils/request'
/**
 * 获取全部分类（顶级、二级、包含推荐商品）
*/
export const findAllCategory = () => {
  return request('/home/category/head', 'get')
}
