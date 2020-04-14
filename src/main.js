import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Swipe, SwipeItem } from 'vant'
import axios from 'axios'
Vue.config.productionTip = false
Vue.use(Swipe).use(SwipeItem);
Vue.prototype.axios=axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
