import '@/assets/style/main.scss'
import 'vuetify/dist/vuetify.min.css'

import Vue from 'vue'
import Vuetify from 'vuetify'

import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import VueApollo from 'vue-apollo'

import { sync } from 'vuex-router-sync'

import router from '@/router'
import store from '@/store'

import App from '@/components/App.vue'
import { MockHttpLink } from '@/graphql/mockHttpLink'

const httpLink = new HttpLink({
  uri: 'http://192.168.20.110:4004/graphql',
})

const apolloClient = new ApolloClient({
  link: process.env.NODE_ENV === 'development' ? MockHttpLink : httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true,
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

Vue.use(VueApollo)
Vue.use(Vuetify)

sync(store, router)

const vm = new Vue({
  el: '#app',
  router,
  store,
  provide: apolloProvider.provide(),
  render: h => h(App),
})

if (process.env.NODE_ENV === 'development') window.vm = vm
Vue.config.productionTip = false
