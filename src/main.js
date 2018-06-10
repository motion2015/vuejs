import Vue from 'vue'
import App from './App.vue'
import App2 from './App2.vue'
import Message from './Message.vue'

Vue.component('app-message',Message )
Vue.component('app-2',App2 )
new Vue({
  el: '#app',
  render: h => h(App)
})
