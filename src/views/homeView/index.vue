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
        <!-- 品牌推荐 -->
        <HomeBrand />
        <!-- 商品区展示 -->
        <HomeProduct />
      </div>
    </div>
  </div>
</template>
<script>
import HomeCategory from './components/home-category'
import HomeBanner from './components/home-banner.vue'
import HomeNews from './components/home-news.vue'
import HomeHot from './components/home-hot.vue'
import HomeBrand from './components/home-brand.vue'
import HomeProduct from './components/home-product.vue'
export default {
  name: 'HomeView',
  components: { HomeCategory, HomeBanner, HomeNews, HomeHot, HomeBrand, HomeProduct }
}
</script>
<style scoped lang="less"></style>
