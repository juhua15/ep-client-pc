<template>
  <div class="home-category">
    <ul class="menu">
      <li
        v-for="item in menuList"
        :key="item.id"
        @mouseenter="currentCategoryId = item.id"
      >
        <RouterLink to="/">{{ item.name }}</RouterLink>
        <template v-if="item.children">
          <RouterLink v-for="child in item.children" :to="`/category/${child.id}`" :key="child.id">{{
            child.name
          }}</RouterLink>
        </template>
        <!-- 骨架 -->
        <template v-else>
          <xtx-skeleton style="margin-right: 20px"  bg="rgba(255,255,255,0.2)" :animated="true" height="20px" width="60px"></xtx-skeleton>
           <xtx-skeleton bg="rgba(255,255,255,0.2)" :animated="true" height="20px" width="60px"></xtx-skeleton>
        </template>
      </li>
    </ul>
      <template v-if="currentCategory && currentCategory.goods&& currentCategory.goods.length">
    <div class="layer">
      <h4>分类推荐 <small>根据您的购买或浏览记录推荐</small></h4>
      <ul>

          <li v-for="item in currentCategory.goods" :key="item.id">
            <RouterLink :to="`/category/sub/${item.id}`">
              <img
                v-lazy="item.picture"
                alt=""
              />
              <div class="info">
                <p class="name ellipsis-2">{{ item.name }}</p>
                <p class="desc ellipsis">{{item.desc}}</p>
                <p class="price"><i>¥</i>{{item.price}}</p>
              </div>
            </RouterLink>
          </li>

      </ul>
    </div>
     </template>
  </div>
</template>

<script>
import { computed, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import xtxSkeleton from '@/components/library/xtx-skeleton.vue'
export default {
  components: { xtxSkeleton },
  name: 'HomeCategory',
  setup () {
    const store = useStore()
    // #region 渲染左侧列表数据
    const band = reactive({
      id: 'brand',
      name: '品牌',
      children: [{ id: 'brand-chilren', name: '品牌推荐' }]
    })
    const menuList = computed(() => {
      const list = store.state.category.list.map((item) => {
        const category = {
          id: item.id,
          name: item.name,
          children: item.children && item.children.slice(0, 2),
          goods: item.goods
        }
        return category
      })
      list.push(band)
      return list
    })
    // #endredion
    const currentCategoryId = ref(null)
    const currentCategory = computed(() => {
      const lists = menuList.value.find(
        (item) => item.id === currentCategoryId.value
      )
      // console.log(lists)
      return lists
    })
    // console.log(currentCategory)
    return {
      menuList,
      currentCategoryId,
      currentCategory
    }
  }
}
</script>

<style scoped lang='less'>
.home-category {
  width: 250px;
  height: 500px;
  background: rgba(0, 0, 0, 0.8);
  position: relative;
  z-index: 99;
  .menu {
    li {
      padding-left: 40px;
      height: 50px;
      line-height: 50px;
      &:hover {
        background: @xtxColor;
      }
      a {
        margin-right: 4px;
        color: #fff;
        &:first-child {
          font-size: 16px;
        }
      }
    }
  }
  .layer {
    width: 990px;
    height: 500px;
    background: rgba(255, 255, 255, 0.8);
    position: absolute;
    left: 250px;
    top: 0;
    display: none;
    padding: 0 15px;
    h4 {
      font-size: 20px;
      font-weight: normal;
      line-height: 80px;
      small {
        font-size: 16px;
        color: #666;
      }
    }
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        width: 310px;
        height: 120px;
        margin-right: 15px;
        margin-bottom: 15px;
        border: 1px solid #eee;
        border-radius: 4px;
        background: #fff;
        &:nth-child(3n) {
          margin-right: 0;
        }
        a {
          display: flex;
          width: 100%;
          height: 100%;
          align-items: center;
          padding: 10px;
          &:hover {
            background: #e3f9f4;
          }
          img {
            width: 95px;
            height: 95px;
          }
          .info {
            padding-left: 10px;
            line-height: 24px;
            width: 190px;
            .name {
              font-size: 16px;
              color: #666;
            }
            .desc {
              color: #999;
            }
            .price {
              font-size: 22px;
              color: @priceColor;
              i {
                font-size: 16px;
              }
            }
          }
        }
      }
    }
  }
  &:hover {
    .layer {
      display: block;
    }
  }
}
.xtx-skeleton {
  animation: fade 1s linear infinite alternate;
}
@keyframes fade {
  from {
    opacity: 0.2;
  }
  to {
    opacity: 1;
  }
}
</style>
