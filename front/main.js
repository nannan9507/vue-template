import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
// import store from './store'
import routes from './helper/routes'

Vue.use(VueRouter)


const router = new VueRouter({
  mode: 'hash',
  routes: routes
})

const app = new Vue({
  router: router,
  //store,
  render: h => h(App)
}).$mount('#app');