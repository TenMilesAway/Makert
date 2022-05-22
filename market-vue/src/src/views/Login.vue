<template>
  <div class="login-container">
    <!-- 头部 -->
    <market-header></market-header>

    <!-- 主体 -->
    <div class="login-body">
      <!-- 左侧登录框 -->
      <div class="login-body-box">
        <div class="login-body-reg">
          <router-link to="/reg">
            <img src="../assets/reg_icon.png" alt="">
          </router-link>
        </div>
        <div class="login-body-window">
          <div class="login-body-headtext">
            <h3>账号登陆</h3>
            <h4>每一天，欢乐充斥校园</h4>
          </div>
          <el-form ref="logform" label-width="80px">
            <el-form-item label="用户名：">
              <el-input v-model="userAccount" style="width: 280px"></el-input>
            </el-form-item>
            <el-form-item label="密码：">
              <el-input v-model="userPwd" style="width: 280px"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" style="margin-left: 45px;margin-top: 50px">登陆</el-button>
              <el-button type="info">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <!-- 右侧背景图 -->
      <div class="login-body-imgbox"></div>
    </div>

    <!-- 底部 -->
    <div class="login-footer">

    </div>
  </div>
</template>

<script>
import MarketHeader from '@/components/MarketHeader.vue'

export default {
  name: 'Login',
  data() {
    return {
      labelPosition: 'left',
      userAccount: '',
      userPwd: ''
    }
  },
  components: {
    MarketHeader
  }
}
</script>

<style>
  * {
    padding: 0px;
    margin: 0px;
  }

  /* 登录框背景动画 */
  @keyframes logWindowBgcMove {
    0%, 100% {
      background-position-y: -50px;
      background-position-x: 0px;
    }
    10%, 90% {
      background-position-y: -90px;
      background-position-x: -20px;

    }
    20%, 80% {
      background-position-y: -180px;
      background-position-x: -40px;
    }
    30%, 70% {
      background-position-y: -270px;
      background-position-x: -60px;
    }
    40%, 60% {
      background-position-y: -360px;
      background-position-x: -80px;
    }
    50% {
      background-position-y: -400px;
      background-position-x: -100px;
    }
  }

  /* 主体模块 */
  .login-body {
    display: flex;
    height: 640px;
  }

  .login-body .login-body-box {
    position: relative;
    overflow: hidden;
    width: 500px;
    height: 100%;
    background-image: url('../assets/background_1.png');
    background-repeat: no-repeat;
    background-size: 600px;
    animation: logWindowBgcMove 10s linear infinite;
  }

  .login-body .login-body-box .login-body-reg {
    position: absolute;
    left: 410px;
    top: 130px;
    width: 40px;
    height: 22px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    background-color: rgb(145, 128, 229);
    box-shadow: 2px 2px 3px 0px rgb(108, 81, 81);
  }

  .login-body .login-body-box .login-body-reg img {
    width: 40px;
  }
  
  .login-body .login-body-box .login-body-window {
    height: 540px;
    width: 80%;
    margin-top: 50px;
    margin-left: 10%;
    background-color: #5BD2F5;
    border-radius: 20px;
  }

  .login-body .login-body-box .login-body-window .login-body-headtext {
    width: 100%;
    padding-top: 20px;
    padding-bottom: 10px;
    padding-left: 20px;
    font-size: 25px;
    color: #eee;
  }

  .login-body .login-body-box .login-body-window .login-body-headtext h4 {
    padding-top: 10px;
    padding-bottom: 60px;
  }

  .login-body .login-body-box .login-body-window hr {
    margin-bottom: 40px;
  }

  .login-body .login-body-imgbox {
    flex: 1;
    background-image: url('../assets/img_3.webp');
    background-repeat: no-repeat;
    background-size: 1100px;
  }

  /* 底部模块 */
  .login-footer {
    height: 80px;
    width: 100%;
    background-color: #0086CF;
  }
</style>