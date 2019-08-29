// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import { Notification, MessageBox } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import locale from 'element-ui/lib/locale/lang/zh-CN'
import router from './router'
import store from './store/index'

Vue.config.productionTip = false
Vue.use(ElementUI, { locale });
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

// router.beforeEach((to, from, next) => {
//   console.log("要进的页面===="+ to.name)
//   //获取用户登录成功后储存的登录标志
//   let getFlag = localStorage.getItem("Flag");
//
//   //如果登录标志存在且为isLogin，即用户已登录
//   if(getFlag === "isLogin"){
//
//     //设置vuex登录状态为已登录
//     store.state.isLogin = true
//     next()
//
//     //如果已登录，还想想进入登录注册界面，则定向回首页
//     if (!to.meta.isLogin) {
//       Notification.error({
//         title: '请先退出登录！',
//         duration: 2500
//       })
//       next({
//         path: '/talk'
//       })
//     }
//
//     //如果登录标志不存在，即未登录
//   }else{
//
//     //用户想进入需要登录的页面，则定向回登录界面
//     if(to.meta.isLogin){
//       next({
//         path: '/login',
//       })
//       Notification.info({
//         title: '请先登录！',
//         duration: 2500
//       })
//       //用户进入无需登录的界面，则跳转继续
//     }else{
//       next()
//     }
//
//   }
//
// });
//
// router.afterEach(route => {
//   window.scroll(0, 0);
// });
