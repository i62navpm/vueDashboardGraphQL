import Vue from 'vue'
import Vuex from 'vuex'

import navigationDrawer from './navigationDrawer.js'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    navigationDrawer,
  },
})
