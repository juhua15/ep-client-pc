import request from '@/utils/request'

/**
 * 获取广告图
 * @returns Promise
 */
export const findBanner = () => {
  return request('/home/banner', 'get')
}
// 获取好物推荐
export const findNew = () => {
  return request('home/new', 'get')
}
// 人气好物
export const findHot = () => {
  return request('home/hot', 'get')
}
