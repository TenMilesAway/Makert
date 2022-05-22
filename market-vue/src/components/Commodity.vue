<template>
  <div>
    <el-row>
      <el-col :span="8" v-for="(o, index) in commodity" :key="o" style="width: 200px; margin: 20px">
        <el-card :body-style="{ padding:'0px' }" style="cursor: pointer">
          <img :src="o.commodityPicture.commodityURL[0]" class="image">
          <div style="padding: 14px">
          <span class="commodityName">{{ o.commodityName }}</span>
            <div class="bottom clearfix">
              <div class="currentPrice">{{ '¥ ' + o.commodityCurrentPrice }}</div>
              <div class="originalPrice">{{ '¥ ' + o.commodityOriginalPrice }}</div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Commodity',
  data() {
    return {
      currentDate: new Date(),
      commodity: [
        {
          commodityName: '休闲化妆品休闲化妆品休闲化妆品',
          commodityOriginalPrice: '100.00',
          commodityCurrentPrice: '50.00',
          commodityPicture: {
            commodityURL: [
              'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
              ''
            ]
          }
        },
        {
          commodityName: '休闲化妆品休闲化妆品休闲化妆品',
          commodityOriginalPrice: '100.00',
          commodityCurrentPrice: '50.00',
          commodityPicture: {
            commodityURL: [
              'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
              ''
            ]
          }
        },
        {
          commodityName: '休闲化妆品休闲化妆品休闲化妆品',
          commodityOriginalPrice: '100.00',
          commodityCurrentPrice: '50.00',
          commodityPicture: {
            commodityURL: [
              'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
              ''
            ]
          }
        },
        {
          commodityName: '休闲化妆品休闲化妆品休闲化妆品',
          commodityOriginalPrice: '100.00',
          commodityCurrentPrice: '50.00',
          commodityPicture: {
            commodityURL: [
              'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
              ''
            ]
          }
        },
        {
          commodityName: '休闲化妆品休闲化妆品休闲化妆品',
          commodityOriginalPrice: '100.00',
          commodityCurrentPrice: '50.00',
          commodityPicture: {
            commodityURL: [
              'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
              ''
            ]
          }
        },
        {
          commodityName: '休闲化妆品休闲化妆品休闲化妆品',
          commodityOriginalPrice: '100.00',
          commodityCurrentPrice: '50.00',
          commodityPicture: {
            commodityURL: [
              'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
              ''
            ]
          }
        },
      ]
    }
  }
}
</script>

<style>
  .commodityName {
    display: block;
    width: 180px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .currentPrice {
    display: inline-block;
    font-size: 20px;
    color: #fd3f31;
  }

  .originalPrice {
    display: inline-block;
    font-size: 13px;
    color: #999;
    margin-left: 10px;
    text-decoration: line-through;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
</style>