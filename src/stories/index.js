import { storiesOf, addDecorator } from '@storybook/vue'

import Toolbar from '../components/Toolbar.vue'

addDecorator(() => {
  return {
    template: '<v-app id="inspire"><story/></v-app>',
  }
})

storiesOf('Main layout', module).add('Toolbar', () => ({
  components: { Toolbar },
  template: '<toolbar />',
}))
