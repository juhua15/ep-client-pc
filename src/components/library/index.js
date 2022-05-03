// 扩展vue 原有功能：全局组件、自定义指令、原型方法、
// vue 2 插件写法要素
// 导出一个对象有install函数默认传入Vue函数，Vue基础实例上扩展
// vue3 插件写法要素
// 导出一个对象有install函数默认传入app实例，app基础上扩展
import XtxSkeleton from './xtx-skeleton.vue'
import XtxCarousel from './xtx-carousel.vue'
import XtxMore from './xtx-more.vue'
import defaultImg from '@/assets/images/200.png'
export default {
  install (app) {
    // 在上进行扩展，提供 component directive函数
    // 如果需要挂载原型 app.config.globalProperties 方式挂载
    app.component(XtxSkeleton.name, XtxSkeleton)
    app.component(XtxCarousel.name, XtxCarousel)
    app.component(XtxMore.name, XtxMore)
    // 定义指令
    defineDirective(app)
  }
}

// 定义指令
const defineDirective = (app) => {
  // 图片懒加载
  // 先存储图片地址不放在src上
  // 当图片进入可视区，将你存储图片的地址设置给元素即可
  app.directive('lazy', {
    // vue2.0 监听使用指令的dom是否创建好，钩子函数inseted
    // vue3 的指令拥有钩子函数和组件一样，使用指令的dom是否创建好，hooks : mounted
    mounted (el, binding) {
      // 创建一个观察对象来观察当前使用指令的元素
      const observe = new IntersectionObserver(([{ isIntersecting }]) => {
        if (isIntersecting) {
          // 停止观察
          observe.unobserve(el)
          el.onerror = () => {
            el.src = defaultImg
          }
          // 把指令的值设置给el的src属性,binding.value 就是el绑定的值
          el.src = binding.value
        }
      }, {
        threshold: 0
      })
      observe.observe(el)
    }
  })
}
