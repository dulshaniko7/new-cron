import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import cronLight from '@vue-js-cron/light'
import '@vue-js-cron/light/dist/light.css'

//import VueCrontab from 'vue-crontab'
Vue.use(cronLight)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
