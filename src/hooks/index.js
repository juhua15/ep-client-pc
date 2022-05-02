// 提供复用逻辑的函数
import { useIntersectionObserver } from '@vueuse/core'
import { ref } from 'vue'
/**
 * 数据懒加载函数
*/
export const useLazyData = (target, apiFn) => {
  const result = ref([])
  const { stop } = useIntersectionObserver(
    target,
    ([{ isIntersecting }], observerElment) => {
      // 是否进入可视区
      if (isIntersecting) {
        stop()
        // 调用Api函数
        apiFn().then((data) => {
          result.value = data.result
          // console.log(result)
        })
      }
    }
  )
  return result
}
