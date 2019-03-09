<template>
  <el-card class="login-card">
    <div slot="header">
      <img :src="logo" class="logo-img">
      <span class="logo-text">Management System</span>
    </div>
    <el-form  class="login" label-width="100px" >
      <el-form-item label="Phone" :rules="[ruleForm.phone,{validator:valPwd,trigger:'blur'}]">
        <el-input placeholder="Please enter phone number" v-model="ruleForm.phone" type="tel" :maxlength="11" 

        >

        </el-input>
      </el-form-item>
      <el-form-item label="Password">
        <el-input placeholder="Please enter password" v-model="ruleForm.password" type="password" @keyup.enter="login"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">Login</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
export default {
  data() {
    return {
      logo:"",
      ruleForm: {
        phone: '',
        password: ''
      }
    }
  },

  methods: {
      valPwd(rule, value, callback) {
        debugger;       
        if (!value) {
            callback(new Error('请再次输入密码'));
        } else if (value !== this.resetPassword.password) {
            callback(new Error('两次输入密码不一致!'));
        } else {
            callback();
        }
      },
    login() {
      location.assign('../index.html')
    }
  }
}
</script>

<style>
.login-card {
  width: 800px;
  margin: 100px auto;
}
.login {
  display: block;
  width: 400px;
  margin: 100px auto;
}
.logo-img {
  width: 90px;
}
.logo-text {
  margin-left: 20px;
}
</style>
