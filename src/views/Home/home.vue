<template>
  <div class="home">
  <!--首页头部-->
  <HeaderTop title="深圳市南山区金蝶大厦">
    <router-link slot="search" to="/search" class="header_search">
      <i class="iconfont icon-sousuo"></i>
    </router-link>
    <router-link slot="login" to="/login" class="header_login">
      <span class="header_login_text">登录|注册</span>
    </router-link>
  </HeaderTop>
  <!--首页导航-->
  <nav class="home_nav  border-1px">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(page, pageIndex) in navTitles" :key="pageIndex">
          <a href="javascript:" class="link_to_food" v-for="(title, index) in page" :key="index">
            <div class="food_container">
              <img :src="imgUrl(pageIndex, index)">
              <span>{{title}}</span>
            </div>
          </a>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </nav>
  <!--首页附近商家-->
  <div class="home_shop_list  border-1px">
    <div class="shop_header">
      <i class="iconfont  icon-xuanxiang"></i>
      <span class="shop_header_title">附近商家</span>
    </div>
    <ShopList></ShopList>
  </div>
</div>
</template>
<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import HeaderTop from '../../components/Head/HeadTop.vue'
import ShopList from '../../components/ShopList/ShopList.vue'
export  default  {
  components: {
    HeaderTop,
    ShopList
  },
  data(){
    return {
      navTitles: [['甜品饮品', '超市便利', '美食', '简餐', '新店特惠', '准时达', '预订早餐', '土豪推荐'], ['甜品饮品', '超市便利', '美食', '简餐', '新店特惠', '准时达', '预订早餐', '土豪推荐']],
    }
  },
  mounted () {
    new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
      },
      loop: true
    })
  },
  methods:{
    imgUrl (pageIndex, index) {
      let url = require('../../assets/nav/' + (pageIndex * 8 + index + 1) + '.jpg')
      return url
    }
  }
}
</script>
<style  lang="stylus"  rel="stylesheet/stylus">
@import  "../../common/stylus/mixins.styl"
  .home {
    width: 100%;
    .icon-sousuo {
      font-size: 25px;
      color: #fff;
    }
    .header_login_text {
      color: #fff;
    }
    .home_nav {
      bottom-border-1px(#e4e4e4)
      margin-top: 45px;
      height: 200px;
      background: #fff;
      .swiper-container {
        width: 100%;
        height: 100%;
        .swiper-wrapper {
          width: 100%;
          height: 100%;
          .swiper-slide {
            display: flex;
            justify-content: center;
            align-items: flex-start;
            flex-wrap: wrap;
            .link_to_food {
              width: 25%;
              .food_container {
                display: block;
                width: 100%;
                text-align: center;
                padding-bottom: 10px;
                font-size: 0;
                img {
                  display: inline-block;
                  width: 50px;
                  height: 50px;
                }
                span {
                  display: block;
                  width: 100%;
                  text-align: center;
                  font-size: 13px;
                  color: #666;
                }
              }
            }
          }
        }
        .swiper-pagination >span.swiper-pagination-bullet-active {
          background  #02a774;
        }
      }
    }
    .home_shop_list {
      top-border-1px(#e4e4e4);
      margin-top: 10px;
      background: #fff;
      .shop_header {
        padding: 10px  10px  0 10px;
        .shop_icon {
          margin-left: 5px;
          color: #999;
        }
        .shop_header_title {
          color: #999;
          font-size: 14px;
          line-height: 20px;
        }
      }
    }
  }
</style>


