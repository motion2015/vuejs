import Vue from 'vue'
import App from './App.vue'
import App2 from './Register.vue'
import Message from './Message.vue'
import Vuetify from 'vuetify'
import router from './router'
import { store } from './store'
import DateFilter from './filters/date'

Vue.use(Vuetify)
Vue.config.productionTip = false
Vue.filter('date',DateFilter)

Vue.component('app-message',Message )
Vue.component('app-2',App2 )
new Vue({
  el: '#app',
  router,
  store,
  // render: h => h(App)
  template : '<App/>',
  compontents : { App }
})
