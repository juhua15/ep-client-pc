<template>
  <!-- 顶部组件 -->
  <AppNavbar />
  <!-- 头部组件 -->
  <AppHeader />
  <AppHeaderSticky/>
  <!-- 二级路由    -->
  <div class="app-body" style="height: 100%">
    <router-view></router-view>
  </div>
  <!-- 底部组件 -->
  <AppFooter />
</template>

<script>
import { useStore } from 'vuex'
import AppNavbar from '@/components/app-navbar.vue'
import AppHeader from '@/components/app-header'
import AppFooter from '@/components/app-footer'
import AppHeaderSticky from '@/components/app-header-sticky.vue'
import { onMounted } from 'vue'
export default {
  name: 'LayoutView',
  components: {
    AppNavbar,
    AppHeader,
    AppFooter,
    AppHeaderSticky
  },
  setup () {
    const store = useStore()
    onMounted(() => {
      store.dispatch('category/getAllCategoryList')
    })
  }
}
</script>
