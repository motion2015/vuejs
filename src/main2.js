import Vue from 'vue'
import App from './App.vue'
import App2 from './Register.vue'
import Message from './Message.vue'
import Vuetify from 'vuetify'

import DateFilter from './filters/date'

import { store } from './store'

Vue.filter('date', DateFilter)
Vue.component('app-message',Message )
Vue.component('app-2',App2 )
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
