<template>
  <!-- 头部 -->
    <div class="login-header">
      <div class="login-header-logo">
        <router-link to="/home">
          <img src="@/assets/logo.png" alt="">
          <h3>B&nbspI&nbspS&nbspT&nbspU</h3>
        </router-link>
      </div>
      <div class="login-header-navigation">
        <div class="login-header-navigation-items">
          <ul>
            <li>
              <router-link to="/home">
                商城主页
              </router-link>
            </li>
            <li>
              我的店铺
            </li>
            <li>
              我的订单
            </li>
            <li>
              购物车
            </li>
          </ul>
        </div>
        <div class="login-header-navigation-headPortrait"></div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'MarketHeader',
}
</script>

<style scoped>
  /* router-link 移入动画 */
  @keyframes fontConversionAnimation {
    0% {
      font-weight: 700;
    }
    30% {
      font-weight: 800;
    }
    60% {
      font-weight: 900;
    }
    100% {
      font-weight: 1000;
      color: #81cdf6;
    }
  }

  li {
    display: inline-block;
    list-style: none;
  }
  /* 头部模块 */
  .login-header {
    position: relative;
    left: 0;
    min-height: 50px;
    background-color: #0086CF;
  }

  .login-header .login-header-logo {
    width: 200px;
    height: 50px;
  }

  .login-header .login-header-logo img {
    vertical-align: middle;
    width: 50px;
    margin-left: 40px;
    margin-top: -15px;
  }

  .login-header .login-header-logo h3 {
    display: inline-block;
    line-height: 50px;
    padding-left: 5px;
    color: white;
    font-size: 24px;
  }

  .login-header .login-header-navigation {
    position: absolute;
    right: 20px;
    top: 5px;
    width: 450px;
    height: 40px;
    background-color: rgb(79, 143, 216);
    border-radius: 5px;
  }

  .login-header .login-header-navigation .login-header-navigation-items {
    position: absolute;
    display: flex;
    justify-content: space-around;
    left: 10px;
    top: 2px;
    width: 400px;
    height: 36px;
    line-height: 36px;
  }

  .login-header .login-header-navigation .login-header-navigation-items li {
    width: 90px;
    color: #eee;
  }
  .login-header .login-header-navigation .login-header-navigation-items li>a {
    text-decoration: none;
    color: #eee;
  }

  .login-header .login-header-navigation .login-header-navigation-items li>a:hover {
    animation: fontConversionAnimation 0.15s linear forwards;
  }

  .login-header .login-header-navigation .login-header-navigation-headPortrait {
    position: absolute;
    right: 25px;
    top: 2px;
    display: inline-block;
    width: 36px;
    height: 36px;
    border-radius: 18px;
    background-color: #000;
  }
</style>