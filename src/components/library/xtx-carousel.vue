<template>
  <div class='xtx-carousel' @mouseenter="stop" @mouseleave="start">
    <ul class="carousel-body" >
      <li class="carousel-item " v-for="(item,index ) in sliders" :class="{fade:index ===currentIndex }" :key="index">
        <RouterLink to="/">
          <img :src="item.imgUrl" alt="">
        </RouterLink>
      </li>
    </ul>
    <a href="javascript:;" class="carousel-btn prev" @click="toggle(-1)"><i class="iconfont icon-angle-left" ></i></a>
    <a href="javascript:;" class="carousel-btn next" @click="toggle(1)"><i class="iconfont icon-angle-right" ></i></a>
    <div class="carousel-indicator">
      <span v-for="(item,i) in sliders" :key="i" :class="{active:currentIndex===i}" @click="chooseBaner(i)"></span>
    </div>
  </div>
</template>

<script>
import { onUnmounted, ref, watch } from 'vue'
export default {
  name: 'XtxCarousel',
  props: {
    sliders: {
      type: Array,
      default: () => []
    },
    duration: {
      type: Number,
      default: 3000
    },
    aotuPlay: {
      type: Boolean,
      default: false
    }
  },
  setup (props) {
    const currentIndex = ref(0)
    let timmer = null
    const aotuPlayFn = () => {
      clearInterval(timmer)
      timmer = setInterval(() => {
        currentIndex.value === props.sliders.length - 1 ? currentIndex.value = 0 : currentIndex.value++
      }, props.duration)
    }
    // 监听轮播图数据源并根据状态打开定时器
    watch(() => props.sliders, (newValue) => {
      if (newValue.length && props.aotuPlay) {
        currentIndex.value = 0
        aotuPlayFn()
      }
    }, {
      immediate: true
    })
    // 鼠标进入关闭打开
    const stop = () => {
      clearInterval(timmer)
    }
    const start = () => {
      if (props.sliders.length && props.aotuPlay) {
        // currentIndex.value = 0
        aotuPlayFn()
      }
    }
    // 切换轮播图
    const toggle = (step) => {
      const newIndex = currentIndex.value + step
      if (newIndex < 0) {
        currentIndex.value = props.sliders.length - 1
      } else if (newIndex > props.sliders.length - 1) {
        currentIndex.value = 0
      } else {
        currentIndex.value = newIndex
      }
    }
    const chooseBaner = (index) => {
      currentIndex.value = index
    }
    // 销毁定时器
    onUnmounted(() => {
      clearInterval(timmer)
    })
    return {
      currentIndex,
      stop,
      start,
      toggle,
      chooseBaner
    }
  }
}
</script>
<style scoped lang="less">
.xtx-carousel{
  width: 100%;
  height: 100%;
  min-width: 300px;
  min-height: 150px;
  position: relative;
  .carousel{
    &-body {
      width: 100%;
      height: 100%;
    }
    &-item {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      opacity: 0;
      transition: opacity 0.5s linear;
      &.fade {
        opacity: 1;
        z-index: 1;
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
    &-indicator {
      position: absolute;
      left: 0;
      bottom: 20px;
      z-index: 2;
      width: 100%;
      text-align: center;
      span {
        display: inline-block;
        width: 12px;
        height: 12px;
        background: rgba(0,0,0,0.2);
        border-radius: 50%;
        cursor: pointer;
        ~ span {
          margin-left: 12px;
        }
        &.active {
          background:  #fff;
        }
      }
    }
    &-btn {
      width: 44px;
      height: 44px;
      background: rgba(0,0,0,.2);
      color: #fff;
      border-radius: 50%;
      position: absolute;
      top: 228px;
      z-index: 2;
      text-align: center;
      line-height: 44px;
      opacity: 0;
      transition: all 0.5s;
      &.prev{
        left: 20px;
      }
      &.next{
        right: 20px;
      }
    }
  }
  &:hover {
    .carousel-btn {
      opacity: 1;
    }
  }
}
</style>
