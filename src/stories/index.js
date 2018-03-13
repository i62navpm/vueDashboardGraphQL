import { storiesOf } from '@storybook/vue'

import Home from '../components/views/Home.vue'

storiesOf('MyButton', module).add('story as a component', () => ({
  components: { Home },
  template: '<Home :rounded="true">rounded</Home>',
}))
