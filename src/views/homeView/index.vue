<template>
  <div class="page-home">
    <div class="home-entry">
      <div class="container">
        <!-- 左侧分类 -->
        <HomeCategory />
        <!-- 轮播图 -->
        <HomeBanner/>
        <!-- 新鲜好物模块面板 -->
        <HomeNews />
        <!-- 人气推荐 -->
        <HomeHot />
      </div>
    </div>
  </div>
</template>
<script>
import HomeCategory from './components/home-category'
import HomeBanner from './components/home-banner.vue'
import HomeNews from './components/home-news.vue'
import HomeHot from './components/home-hot.vue'
export default {
  name: 'HomeView',
  components: { HomeCategory, HomeBanner, HomeNews, HomeHot }
}
</script>
<style scoped lang="less"></style>
