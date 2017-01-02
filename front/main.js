import Vue from 'vue'
import Router from 'vue-router'

import App from './App.vue'
// import store from './store'
import routes from './helper/routes'

Vue.use(Router)


const router = new VueRouter({
  mode: 'hash',
  routes
})

const app = new Vue({
  router,
  //store,
  ...App
}).$mount('#app');