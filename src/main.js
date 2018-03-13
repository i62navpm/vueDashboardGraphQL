import '@/assets/style/main.scss'
import 'vuetify/dist/vuetify.min.css'

import Vue from 'vue'
import Vuetify from 'vuetify'

import { sync } from 'vuex-router-sync'

import router from '@/router'
import store from '@/store'

import App from '@/components/App.vue'

Vue.use(Vuetify)

sync(store, router)

const vm = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})

if (process.env.NODE_ENV === 'development') window.vm = vm
Vue.config.productionTip = false
