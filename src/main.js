import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false
Vue.use(ElementUI, VueAxios, axios)
// Vue.use
require('./mock/mock.js')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
