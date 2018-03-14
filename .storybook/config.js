import { configure } from '@storybook/vue'
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

function loadStories() {
  require('../src/stories')
}

configure(loadStories, module)
