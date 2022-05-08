<template>
  <div class="reg-container">
    <!-- 头部 -->
    <div class="reg-header">
      <div class="reg-header-logo">
        <img src="@/assets/logo.png" alt="">
        <h3>B&nbspI&nbspS&nbspT&nbspU</h3>
      </div>
    </div>

    <!-- 主体 -->
    <div class="reg-body">
      <div class="reg-body-regwindow">
        <div class="reg-body-regwindow-space">
        </div>
        <!-- 普通用户 -->
        <el-form :label-position="labelPosition" :model="form" ref="regform" label-width="120px" v-if="checkWindow">
          <el-form-item label="角色身份：">
            <el-radio-group v-model="form.userType">
              <el-radio label="普通用户"></el-radio>
              <el-radio label="商家"></el-radio>
            </el-radio-group>
          </el-form-item>
            <el-form-item label="学号：">
            <el-input v-model="form.userID" style="width: 350px">
            </el-input>
          </el-form-item>
            <el-form-item label="名称：">
            <el-input v-model="form.userName" style="width: 350px">
            </el-input>
          </el-form-item>
          <el-form-item label="手机号：">
            <el-input v-model="form.userPhone" style="width: 350px">
            </el-input>
          </el-form-item>
          <el-form-item label="邮箱：">
            <el-input v-model="form.userEmail" style="width: 350px">
            </el-input>
          </el-form-item>
          <el-form-item label="城市：">
            <el-input v-model="form.userCity" style="width: 350px">
            </el-input>
          </el-form-item>
          <el-form-item label="性别：">
            <el-radio-group v-model="form.userGender">
              <el-radio label="男"></el-radio>
              <el-radio label="女"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="银行账号：">
            <el-input v-model="form.userBankAccount" style="width: 350px">
            </el-input>
          </el-form-item>
          <el-form-item label="验证码：">
            <el-col :span="5">
              <verification-code @verCode="getVerCode"></verification-code>
            </el-col>
            <el-col :span="6">
              <el-input v-model="form.verCode"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item>
            <el-button type="primary">注册</el-button>
            <el-button type="info" style="margin-left: 50px">重置</el-button>
          </el-form-item>
        </el-form>

        <!-- 商家 -->
        <el-form :label-position="labelPosition" :model="form" ref="regform" label-width="120px" v-else>
          <el-form-item label="角色身份：">
            <el-radio-group v-model="form.userType">
              <el-radio label="普通用户"></el-radio>
              <el-radio label="商家"></el-radio>
            </el-radio-group>
          </el-form-item>
            <el-form-item label="学号：">
            <el-input v-model="form.userID" style="width: 350px">
            </el-input>
          </el-form-item>
            <el-form-item label="名称：">
            <el-input v-model="form.userName" style="width: 350px">
            </el-input>
          </el-form-item>
          <el-form-item label="手机号：">
            <el-input v-model="form.userPhone" style="width: 350px">
            </el-input>
          </el-form-item>
          <el-form-item label="邮箱：">
            <el-input v-model="form.userEmail" style="width: 350px">
            </el-input>
          </el-form-item>
          <el-form-item label="城市：">
            <el-input v-model="form.userCity" style="width: 350px">
            </el-input>
          </el-form-item>
          <el-form-item label="性别：">
            <el-radio-group v-model="form.userGender">
              <el-radio label="男"></el-radio>
              <el-radio label="女"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="银行账号：">
            <el-input v-model="form.userBankAccount" style="width: 350px">
            </el-input>
          </el-form-item>
          <el-form-item label="验证码：">
            <el-col :span="5">
              <verification-code></verification-code>
            </el-col>
            <el-col :span="6">
              <el-input v-model="form.verCode"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="营业执照：">
            <img src="../assets/add.png" id="add-img" alt="">
            <input type="file" name="" id="add-upload">
          </el-form-item>
          <el-form-item>
            <el-button type="primary">注册</el-button>
            <el-button type="info" style="margin-left: 50px">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
  import VerificationCode from '@/components/VerificationCode.vue'
  export default {
    name: 'Register',
    components: {
      VerificationCode
    },
    data() {
      return {
        labelPosition: 'right',
        form: {
          userID: '',
          userName: '',
          userPhone: '',
          userEmail: '',
          userCity: '',
          userGender: '',
          userBankAccount: '',
          userType: '普通用户',
          verCode: '',
        },
        checkWindow: true,
        toVerCode: '',
      }
    },
    methods: {
      getVerCode(val) {
        this.toVerCode = val;
        console.log(this.toVerCode + '输出成功')
      }
    },
    mounted() {
      
    },
    updated() {
      var regwindow = document.querySelector('.reg-body-regwindow')
      var regbody = document.querySelector('.reg-body')
      // 更新注册窗口内容
      if(this.form.userType == '商家') {
        this.checkWindow = false
        regbody.style.height = '1000px'
        regwindow.style.height = '800px'
        // 更换提交文件图标
        var add_img = document.querySelector('#add-img')
        var add_upload = document.querySelector('#add-upload')
        add_img.addEventListener('click', function() {
          add_upload.click()
        })
      } else {
        this.checkWindow = true
        regbody.style.height = '800px'
        regwindow.style.height = '680px'
      }
    }
  }
</script>

<style>
  * {
    padding: 0px;
    margin: 0px;
  }

  /* 头部模块 */
  .reg-header {
    min-height: 50px;
    background-color: #0086CF;
  }

  .reg-header .reg-header-logo {
    height: 50px;
  }

  .reg-header .reg-header-logo img {
    vertical-align: middle;
    width: 50px;
    margin-left: 40px;
    margin-top: -15px;
  }

  .reg-header .reg-header-logo h3 {
    display: inline-block;
    line-height: 50px;
    padding-left: 5px;
    color: white;
    font-size: 24px;
  }

  /* 主体模块 */
  .reg-body {
    width: 100%;
    height: 800px;
    background-color: #eee;
    overflow: hidden;
  }

  .reg-body .reg-body-regwindow {
    width: 600px;
    height: 680px;
    background-color: white;
    margin: 60px auto;
    border-radius: 20px;
    overflow: hidden;
  }

  .reg-body .reg-body-regwindow .reg-body-regwindow-space {
    margin-top: 40px;
  }

  #add-upload {
    display: none;
  }

  #add-img {
    width: 40px;
    cursor: pointer;
  }
</style>