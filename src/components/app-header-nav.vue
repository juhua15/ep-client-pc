<template>
  <ul class="appheadernav">
    <li class="home"><RouterLink to="/">首页</RouterLink></li>
    <li v-for="item in list" :key="item.id" @mouseenter="open(item)" @mouseleave="hide(item)">
      <router-link @click="hide(item)" :to="`/category/${item.id}`">{{ item.name }}</router-link>
      <div class="layer" v-bind:class="{open:item.open}">
        <ul>
          <li v-for="child in item.children" :key="child.id">
            <router-link @click="hide(item)" :to="`/category/sub/${child.id}`">
              <img :src="child.picture" alt="" />
              <p>{{ child.name }}</p>
            </router-link>
          </li>
        </ul>
      </div>
    </li>
  </ul>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'AppHeaderNav',
  setup () {
    const store = useStore()
    const list = computed(() => {
      return store.state.category.list
    })
    const open = (item) => {
      store.commit('category/open', item)
    }
    const hide = (item) => {
      store.commit('category/hide', item)
    }
    return {
      list,
      open,
      hide
    }
  }
}
</script>

<style lang='less' scoped>
.appheadernav {
  position: relative;
  width: 820px;
  display: flex;
  justify-content: space-around;
  padding-left: 40px;
  > li {
    margin-right: 40px;
    width: 38px;
    text-align: center;
    > a {
      font-size: 16px;
      line-height: 32px;
      height: 32px;
      display: inline-block;
    }
    &:hover {
      > a {
        color: @xtxColor;
        border-bottom: 1px solid @xtxColor;
      }
      //   > .layer {
      //     height: 132px;
      //     opacity: 1;
      //   }
    }
  }
}
.layer {
  &.open {
    height: 132px;
    opacity: 1;
  }
  width: 1240px;
  background-color: #fff;
  position: absolute;
  left: -200px;
  top: 56px;
  height: 0;
  overflow: hidden;
  opacity: 0;
  box-shadow: 0 0 5px #ccc;
  transition: all 0.2s 0.1s;
  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0 70px;
    align-items: center;
    height: 132px;
    li {
      width: 110px;
      text-align: center;
      img {
        width: 60px;
        height: 60px;
      }
      p {
        padding-top: 10px;
      }
      &:hover {
        p {
          color: @xtxColor;
        }
      }
    }
  }
}
</style>
