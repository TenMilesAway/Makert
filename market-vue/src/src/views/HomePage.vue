<template>
  <div>
    <!-- 头部模块 -->
    <market-header></market-header>

    <!-- 主体模块 -->
    <div class="home-body">
      <!-- 版心 -->
      <div class="edition-center">
        <!-- 搜索 -->
        <div class="home-body-seek">
          <div class="home-body-seek-seekBar">
            <input type="text">
            <div class="home-body-seek-seekBar-imgBox">
              <img src="@/assets/search.png" alt="">
            </div>
          </div>
        </div>
        <!-- 第一层 -->
        <div class="home-body-firstLayer">
          <!-- 左侧导航模块 -->
          <div class="home-body-firstLayer-navi">
            <ul>
              <li>测试1</li>
              <li>测试2</li>
              <li>测试3</li>
              <li>测试4</li>
              <li>测试5</li>
            </ul>
          </div>
          <!-- 右侧轮播图模块 -->
          <div class="home-body-firstLayer-rotation">
            <el-carousel :interval="4000" type="card" height="300px">
              <el-carousel-item v-for="item in 6" :key="item">
                <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" alt="" style="width: 100%">
              </el-carousel-item>
            </el-carousel>
          </div>
        </div>
        <!-- 第二层 -->
        <div class="home-body-secondLayer">
          <!-- vue 官方无限加载 -->
          <!-- <div class="infinite-list-wrapper" style="overflow:auto">
            <ul class="list" v-infinite-scroll="load"
            infinite-scroll-disabled="disabled">
              <li v-for="i in count" class="list-item" :key="i">{{ i }}</li>
            </ul>
            <p v-if="loading">正在加载..</p>
            <p v-if="noMore">没有更多了</p>
          </div> -->
          <commodity></commodity>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MarketHeader from '@/components/MarketHeader.vue'
import Commodity from '@/components/Commodity.vue'

export default {
  name: 'HomePage',
  components: {
    MarketHeader,
    Commodity
  },
  data() {
    return {
      count: 10,
      loading: false
    }
  },
  computed: {
    noMore() {
      return this.count >= 20
    },
    disabled() {
      return this.loading || this.noMore
    }
  },
  methods: {
    load() {
      this.loading = true
      setTimeout(() => {
        this.count += 2
        this.loading = false
      }, 2000)
    }
  }
}
</script>

<style>
  body {
    background-color: #eee;
  }

  .edition-center {
    width: 1200px;
    margin: 0 auto;
  }

  /* 搜索栏 */
  .home-body .home-body-seek {
    height: 100px;
    overflow: hidden;
  }

  .home-body .home-body-seek .home-body-seek-seekBar {
    position: relative;
    width: 600px;
    height: 50px;
    margin: 25px auto;
    border-radius: 5px;
    background-color: rgb(221, 221, 221);
  }

  .home-body .home-body-seek .home-body-seek-seekBar input {
    width: 580px;
    height: 40px;
    padding-left: 10px;
    margin-left: 5px;
    margin-top: 5px;
    border: 0px;
    border-radius: 5px;
    outline: none;
    font-size: 16px;
  }

  .home-body .home-body-seek .home-body-seek-seekBar .home-body-seek-seekBar-imgBox {
    position: absolute;
    right: 5px;
    top: 5px;
    width: 40px;
    height: 40px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    background-color: #3f91e9;
    cursor: pointer;
  }

  .home-body .home-body-seek .home-body-seek-seekBar  .home-body-seek-seekBar-imgBox img {
    width: 30px;
    height: 30px;
    margin-left: 5px;
    margin-top: 5px;
  }

  /* 第一层 */
  .home-body .home-body-firstLayer {
    width: 100%;
    height: 500px;
    background-color: #fff;
    border-radius: 10px;
    overflow: hidden;
  }

  .home-body .home-body-firstLayer .home-body-firstLayer-navi {
    display: inline-block;
    width: 200px;
    height: 480px;
    margin-top: 10px;
    margin-left: 10px;
    background-color: #0BDBB4;
    overflow: hidden;
  }

  .home-body .home-body-firstLayer .home-body-firstLayer-navi ul li {
    height: 40px;
    line-height: 40px;
    padding-left: 10px;
    color: #fff;
    font-size: 16px;
  }

  .home-body .home-body-firstLayer .home-body-firstLayer-navi ul li:hover {
    cursor: pointer;
    background-color: #00DCF2;
  }

  .home-body .home-body-firstLayer .home-body-firstLayer-rotation {
    display: inline-block;
    width: 970px;
    height: 480px;
    margin-left: 8px;
    margin-top: 10px;
    overflow: hidden;
  }

  /* 轮播图 */
  .el-carousel {
    margin-top: 100px;
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  /* 第二层 */
  .home-body .home-body-secondLayer {
    width: 100%;
    margin-top: 50px;
    margin-bottom: 50px;
    background-color: #fff;
    border-radius: 10px;
    overflow: hidden;
  }

</style>