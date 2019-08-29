<template>
  <div class="register">
    <el-form ref="registerForm" :model="registerForm" :rules="loginRules">
      <h3 class="title">注册</h3>
      <el-form-item prop="userName">
        <el-input v-model="registerForm.userName" type="text" placeholder="输入用户名"></el-input>
      </el-form-item>
      <el-form-item prop="passWord">
        <el-input v-model="registerForm.passWord" type="password" auto-complete="off" placeholder="输入密码"></el-input>
      </el-form-item>
      <el-from-tiem>
        <el-button type="submit" round style="width: 100%" @click.native.prevent="registerSub">注册</el-button>
      </el-from-tiem>
      <el-form-item>
        <router-link to='/login'>
          <el-button size="mini" round style="margin-left: 30%">返回登录</el-button>
        </router-link>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {register} from '@/api/login'
import { Notification, MessageBox } from 'element-ui'

export default {
  name: "Register",
  data() {
    return {
      registerForm: {
        userName: "",
        passWord: ""
      },
      loginRules: {
        userName: [{ required: true, trigger: 'blur', message: '用户名不能为空' }],
        passWord: [{ required: true, trigger: 'blur', message: '密码不能为空' }]
      },
    }
  },
  methods: {
    registerSub: function () {
      this.$refs.registerForm.validate(valid=>{
        if (valid){
          const user = this.registerForm;
          register(user.userName ,user.passWord).then(res => {
            console.log("======="+ res.toString())
            if (res.code == '200'){
              Notification.info({
                title: '注册成功！',
                duration: 2500
              })
            }else if (res.code == '9999'){
              Notification.error({
                title: res.msg,
                duration: 2500
              })
            }
          })
        }
      })
    }
  }
}
</script>

<style scoped>
  .register {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-size: cover;
    margin-top: 15%;
  }

  .title {
    margin: 0px auto 30px auto;
    text-align: center;
    color: #707070;
  }
</style>
