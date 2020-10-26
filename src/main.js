import Vue from 'vue'
import App from './App.vue'

import ApiPlugin from './plugins/api'

Vue.use(ApiPlugin)

new Vue({
  render: h => h(App),
}).$mount('#app')
