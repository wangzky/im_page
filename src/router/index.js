import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/login/Login'
import Register from '@/components/register/Register'
import Talk from '@/components/talk/Index'

Vue.use(Router)


const routes =[
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld,
    meta: {
      isLogin: false
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      isLogin: false
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      isLogin: false
    }
  },
  {
    path: '/talk',
    name: 'Talk',
    component: Talk,
    meta: {
      isLogin: true
    }
  },
]


const router = new Router({
  routes
});

/**
 * to:表示目标路由
 * from:表示来源路由
 * next:表示执行下一步操作
 */
router.beforeEach((to, from, next) => {
  console.log("要进的页面===="+ to.name)
  if (to.path === '/login') { // 当路由为login时就直接下一步操作
    next();
  } else { // 否则就需要判断
    if(sessionStorage.username){  // 如果有用户名就进行下一步操作
      next()
    }else{
      next({path: '/login'})  // 没有用户名就跳转到login页面
    }
  }
})

export default new Router({
  router
})
