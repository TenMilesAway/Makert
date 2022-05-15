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
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MarketHeader from '@/components/MarketHeader.vue'

export default {
  name: 'HomePage',
  components: {
    MarketHeader
  }
}
</script>

<style>
  .edition-center {
    width: 1200px;
    margin: 0 auto;
  }

  .home-body .home-body-seek {
    height: 100px;
    background-color: pink;
    overflow: hidden;
  }

  .home-body .home-body-seek .home-body-seek-seekBar {
    width: 600px;
    height: 50px;
    margin: 25px auto;
    border-radius: 5px;
    background-color: #eee;
  }


</style>