<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-divider></el-divider>
    <router-link to='/login'>
      <el-button>登录</el-button>
    </router-link>
    <router-link to='/register'>
      <el-button>注册</el-button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to IM demo App'
    }
  },
  methods: {}
}
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
    color: #42b983;
  }

  .hello {
    text-align:center;
    /*display: flex;*/
    /*justify-content: center;*/
    align-items: center;
    /*height: 100%;*/
    /*background-size: cover;*/
    margin-top: 15%;
  }
</style>
