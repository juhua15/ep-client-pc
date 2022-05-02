// 扩展vue 原有功能：全局组件、自定义指令、原型方法、
// vue 2 插件写法要素
// 导出一个对象有install函数默认传入Vue函数，Vue基础实例上扩展
// vue3 插件写法要素
// 导出一个对象有install函数默认传入app实例，app基础上扩展
import XtxSkeleton from './xtx-skeleton.vue'
import XtxCarousel from './xtx-carousel.vue'
import XtxMore from './xtx-more.vue'
export default {
  install (app) {
    // 在上进行扩展，提供 component directive函数
    // 如果需要挂载原型 app.config.globalProperties 方式挂载
    app.component(XtxSkeleton.name, XtxSkeleton)
    app.component(XtxCarousel.name, XtxCarousel)
    app.component(XtxMore.name, XtxMore)
  }
}
