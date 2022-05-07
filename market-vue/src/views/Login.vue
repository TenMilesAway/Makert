<template>
  <div class="login-container">
    <!-- 头部 -->
    <div class="header">
      <div class="logo">
        <img src="@/assets/logo.png" alt="">
        <h3>B&nbspI&nbspS&nbspT&nbspU</h3>
      </div>
    </div>

    <!-- 主体 -->
    <div class="body">
      <div class="login-box">
        <div class="window">

        </div>
      </div>
      <div class="img-box"></div>
    </div>

    <!-- 底部 -->
    <div class="footer">

    </div>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style>
  * {
    padding: 0px;
    margin: 0px;
  }

  /* 头部模块 */
  .header {
    min-height: 50px;
    background-color: #0086CF;
  }

  .header .logo {
    height: 50px;
  }

  .header .logo img {
    vertical-align: middle;
    width: 50px;
    margin-left: 40px;
    margin-top: -15px;
  }

  .header .logo h3 {
    display: inline-block;
    line-height: 50px;
    padding-left: 5px;
    color: white;
    font-size: 24px;
  }

  /* 主体模块 */
  .body {
    display: flex;
    height: 640px;
    background-color: pink;
  }

  .body .login-box {
    overflow: hidden;
    width: 500px;
    height: 100%;
    background-color: skyblue;
  }
  
  .body .login-box .window {
    height: 540px;
    width: 80%;
    margin-top: 50px;
    margin-left: 10%;
    background-color: white;
  }

  .body .img-box {
    flex: 1;
    background-color: red;
  }

  /* 底部模块 */
  .footer {
    height: 120px;
    width: 100%;
    background-color: gray;
  }
</style>