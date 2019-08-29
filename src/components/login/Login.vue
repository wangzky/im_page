<template>
  <div class="login">
    <el-form ref="login" :model="login" :rules="loginRules">
      <h3 class="title">登录</h3>
      <el-form-item>
        <el-input v-model="login.userName" placeholder="输入用户名"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="login.passWord" type="password" placeholder="输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="submit" round style="width: 100%" @click.native.prevent="loginSub">登录</el-button>
      </el-form-item>
      <el-form-item>
        <router-link to='/register'>
          <el-button size="mini" round style="margin-left: 30%">注册账号</el-button>
        </router-link>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {login} from '@/api/login'
import { Notification, MessageBox } from 'element-ui'
import { setToken } from '@/utils/auth'
import store from '@/store/index'

export default {
  name: "Login",
  data() {
    return {
      login: {
        userName: "",
        passWord: ""
      },
      loginRules: {
        userName: [{ required: true, trigger: 'blur', message: '用户名不能为空' }],
        passWord: [{ required: true, trigger: 'blur', message: '密码不能为空' }]
      },
    }
  },
  methods:{
    loginSub: function () {
      this.$refs.login.validate(valid=>{
        if (valid){
          const user = this.login;
          login(user.userName ,user.passWord).then(res => {
            console.log("======="+ res.toString())
            if (res.code == '200'){
              Notification.info({
                title: '登录成功！',
                duration: 2500
              })
              // 存储token
              setToken(res.data)
              sessionStorage.username = user.userName;
              //设置Vuex登录标志为true，默认userLogin为false
              store.dispatch("userLogin", true);
              localStorage.setItem("Flag", "isLogin");
              //登录成功后跳转到指定页面
              this.$router.push("/talk");

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
  .login {
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
