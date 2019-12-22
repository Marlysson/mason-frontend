import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:8000',
  headers: {'content-type': 'application/json'}
});

Vue.prototype.$axios = instance

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
