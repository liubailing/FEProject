import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './app.vue'
import VueRouter from 'vue-router'

// const Router = require('../../../routes/routes.js')
// import axios from 'axios'

Vue.use(ElementUI)
Vue.use(VueRouter)

new Vue({
  el: '#app',
  render: h => h(App)
})
