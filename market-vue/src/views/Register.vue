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
        <!-- 表格 -->
        <el-form :label-position="labelPosition" :model="form" :rules="rules" ref="regform" label-width="120px">
          <el-form-item label="角色身份：">
            <el-radio-group v-model="form.userType">
              <el-radio label="普通用户"></el-radio>
              <el-radio label="商家"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="学号：" prop="userID">
            <el-input v-model="form.userID" style="width: 350px" placeholder="请输入学生学号">
            </el-input>
          </el-form-item>
          <el-form-item label="名称：" prop="userName">
            <el-input v-model="form.userName" style="width: 350px" placeholder="请输入姓名">
            </el-input>
          </el-form-item>
          <el-form-item label="密码：" prop="userPwd">
            <el-input type="password" v-model="form.userPwd" style="width: 350px" placeholder="请输入密码">
            </el-input>
          </el-form-item>
          <el-form-item label="确认密码：" prop="userPwdForVer">
            <el-input type="password" v-model="form.userPwdForVer" style="width: 350px" placeholder="再次输入密码">
            </el-input>
          </el-form-item>
          <el-form-item label="手机号：" prop="userPhone">
            <el-input v-model="form.userPhone" style="width: 350px" placeholder="请输入手机号码">
            </el-input>
          </el-form-item>
          <el-form-item label="邮箱：" prop="userEmail">
            <el-input v-model="form.userEmail" style="width: 350px" placeholder="请输入邮箱">
            </el-input>
          </el-form-item>
          <el-form-item label="城市：" prop="userCity">
            <el-select v-model="form.userCity" placeholder="请选择城市">
              <el-option v-for="item in allCity" :label="item" :value="item" :key="item"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="性别：" prop="userGender">
            <el-radio-group v-model="form.userGender">
              <el-radio label="男"></el-radio>
              <el-radio label="女"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="银行账号：" prop="userBankAccount">
            <el-input v-model="form.userBankAccount" style="width: 350px" placeholder="请输入银行账号">
            </el-input>
          </el-form-item>
          <el-form-item label="验证码：" prop="verCode">
            <el-col :span="5">
              <verification-code @verCode="getVerCode"></verification-code>
            </el-col>
            <el-col :span="6">
              <el-input v-model="form.verCode"></el-input>
            </el-col>
          </el-form-item>
          <el-form-item label="营业执照：" v-if="checkWindow">
            <img src="../assets/add.png" id="add-img" alt="">
            <input type="file" id="filePath" @change="getFile($event)" name="">
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('regform')">注册</el-button>
            <el-button type="info" @click="resetForm('regform')">重置</el-button>
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
      // 验证所用的匿名箭头函数
      var validateEmail = (rule, value, callback) => {
        if(!/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/.test(value)) {
          callback(new Error("请输入正确的邮箱"));
        } else {
          callback();
        }
      }
      var validatePhone = (rule, value, callback) => {
        if (!/^1[3-9]\d{9}$/.test(value)) {
          callback(new Error("请输入正确的手机号"));
        } else {
          callback();
        }
      }
      var validatePwd = (rule, value, callback) => {
        if(value == '') {
          callback(new Error("密码不能为空"))
        } else if(!/^[A-Z][A-Za-z\d]{7,15}$/.test(value)) {
          callback(new Error("密码格式为 首字母大写 + 任意字母数字 且 大于8位小于16位"))
        } else {
          callback()
        }
      }
      var validatePwdForVer = (rule, value, callback) => {
        if(value == '') {
          callback(new Error("请再次输入密码"))
        } else if (value != this.form.userPwd) {
          callback(new Error("两次输入密码不一致"))
        } else {
          callback()
        }
      }
      var validateBankAccount = (rule, value, callback) => {
        if(!/^([1-9]{1})(\d{15}|\d{18})$/.test(value)) {
          callback(new Error("请输入正确的银行卡号"))
        } else {
          callback()
        }
      }
      return {
        labelPosition: 'right',
        allCity: ['北京','广东','山东','江苏','河南','上海','河北','浙江','香港特别行政区','陕西',
        '湖南','重庆','福建','天津','云南','四川','广西壮族自治区','安徽','海南','江西','湖北',
        '山西','辽宁','台湾','黑龙江','内蒙古自治区','澳门特别行政区','贵州','甘肃','青海',
        '新疆维吾尔自治区','西藏区','吉林省','宁夏回族自治区'],
        form: {
          userID: '',
          userName: '',
          userPwd: '',
          userPwdForVer: '',
          userPhone: '',
          userEmail: '',
          userCity: '',
          userGender: '',
          userBankAccount: '',
          userType: '普通用户',
          verCode: '',
        },
        rules: {
          userID: [
            { required: true, message: '请输入学号', trigger: 'blur' },
            { min: 10, max: 10, message: '学号的长度固定为 10 位', trigger: 'blur' }
          ],
          userName: [
            { required: true, message: '请输入姓名', trigger: 'blur'},
            { min: 2, max: 8, message: '姓名的限制为 2 - 8 位', trigger : 'blur'}
          ],
          userPwd: [
            { required: true, validator: validatePwd, trigger: 'blur' }
          ],
          userPwdForVer: [
            { required: true, validator: validatePwdForVer, trigger: 'blur' }
          ],
          userPhone: [
            { required: true, validator: validatePhone, trigger: 'blur'},
          ],
          userEmail: [
            { required: true, validator: validateEmail, trigger: 'blur'}
          ],
          userCity: [
            { required: true, message: '请选择城市' }
          ],
          userGender: [
            { required: true, message: '请选择性别'}
          ],
          userBankAccount: [
            { required: true, validator: validateBankAccount, trigger: 'blur' }
          ]
        },
        checkWindow: false,
        toVerCode: '',
        filePath: '',
        fileName: ''
      }
    },
    methods: {
      getVerCode(val) {
        this.toVerCode = val;
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if(valid) {
            if(this.form.verCode != this.toVerCode) {
              this.tips('验证码输入错误', '注册失败')
            } else {
              this.tips('注册信息正在提交至后台!请等待审核', '注册成功')
            }
          } else {
            this.tips('请再次检验注册信息', '注册失败')
          }
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      tips(content, title) {
        this.$alert(content, title, {
          confirmButtonText: '确定'
        })
      },
      getFile(obj) {
        var fileObj = document.getElementById("filePath").files[0]
        this.fileName = fileObj.name;
        console.log(this.fileName)
        // console.log(document.getElementById("filePath").value)
        var oFReader = new FileReader()
        oFReader.readAsDataURL(fileObj)
        oFReader.onloadend = function(oFReader) {
          var src = oFReader.target.result
          console.log(src)
        }
      }
    },
    mounted() {
      
    },
    updated() {
      var regwindow = document.querySelector('.reg-body-regwindow')
      var regbody = document.querySelector('.reg-body')
      // 更新注册窗口内容
      if(this.form.userType == '商家') {
        this.checkWindow = true
        regbody.style.height = '1100px'
        regwindow.style.height = '880px'
        // 更换提交文件图标
        var add_img = document.querySelector('#add-img')
        var add_upload = document.querySelector('#filePath')
        add_img.addEventListener('click', function() {
          add_upload.click()
        })
      } else {
        this.checkWindow = false
        regbody.style.height = '1000px'
        regwindow.style.height = '800px'
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
    height: 1000px;
    background-color: #eee;
    overflow: hidden;
  }

  .reg-body .reg-body-regwindow {
    width: 600px;
    height: 800px;
    background-color: white;
    margin: 60px auto;
    border-radius: 20px;
    overflow: hidden;
  }

  .reg-body .reg-body-regwindow .reg-body-regwindow-space {
    margin-top: 40px;
  }

  #filePath {
    display: none;
  }

  #add-img {
    width: 40px;
    cursor: pointer;
  }
</style>