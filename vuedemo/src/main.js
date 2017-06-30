// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './config/routes'
import api from './common/api'
import Validator from './common/validator'

//绑定到Vue上
Vue.prototype.$api = api
Vue.prototype.$valid = Validator

Vue.use(VueRouter)

// 通过这个这个属性（是个函数），可以让应用像浏览器的原生表现那样，在按下 后退/前进 按钮时，简单地让页面滚动到顶部或原来的位置。
const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition
  } else {
    return { x: 0, y: 0 }
  }
}

const router = new VueRouter({
  //mode: 'history',
  linkActiveClass: 'active',
  //scrollBehavior,
  routes // short for `routes: routes`
})

new Vue({
  router,
  el: '#app',
  render: (h) => h(App)
})

