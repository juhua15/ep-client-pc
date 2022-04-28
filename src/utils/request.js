// 创建一个axios实例
// 请求拦截器，如果有token经行头部携带
// 响应拦截器 1、剥离无效数据；2处理token失效
// 导出一个函数, 调用当前的axios实例发请求,返回值是promise
import axios from 'axios'
import store from '@/store'
import router from '@/router'
// 导出基准地址；原因其他地方不是通过axios发出请求的地方上需要基准地址
export const baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net/'
const request = axios.create({
  // axios 的配置 : baseURL timeout
  baseURL,
  timeout: 5000
})
request.interceptors.request.use((config) => {
// 拦截器业务逻辑
// 进行请求配置的修改
// 如果本地有token就进行携带
  const { profile } = store.state.user
  if (profile.token) {
    config.headers.Authorization = `Bearer ${profile.token}`
  }
  return config
}, err => {
  return Promise.reject(err)
})
// 响应拦截器
//
request.interceptors.response.use((res) => {
  return res.data
}, err => {
  // 401 状态码进入该函数
  if (err.response && err.response.staus === 401) {
    // 1、清空无效信息
    // 2、跳转到登录页面
    // 3 跳转需要传参（当前页码)给登录页码
    store.commit('user/setUser', {})
    // 当前路由地址
    // 在组件中 ：$router.fullPath
    // js组件中 router.currentRouter.value.fullPath，就是当前路由地址,但是 该数据为ref包裹的响应式数据需要取出value
    const fullPath = encodeURIComponent(router.currentRoute.value.fullPath)
    router.push('/login?redirectUrl' + fullPath)
  }
  return Promise.reject(err)
})

// 请求工具函数
export default (url, method, submitData) => {
  return request({
    url,
    method,
    // 1、如果get请求需要使用prama 传递数据
    // 2、如果不是get需要使用data传递数据
    // 【】 设置一个动态的key 【】 里可以写js表达式 js表达式的执行结果可以用作key

    [method.toUpperCase() === 'GET' ? 'param' : 'data']: submitData
  })
}
