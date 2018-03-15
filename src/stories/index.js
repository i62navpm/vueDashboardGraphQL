import { storiesOf, addDecorator } from '@storybook/vue'

import Toolbar from '../components/Toolbar.vue'
import ProjectForm from '../components/presentationals/ProjectForm.vue'

addDecorator(() => {
  return {
    template: '<v-app id="inspire"><story/></v-app>',
  }
})

storiesOf('Main layout', module).add('Toolbar', () => ({
  components: { Toolbar },
  template: '<toolbar />',
}))

storiesOf('Forms', module).add('Project Form', () => ({
  render() {
    return <ProjectForm project={{}} />
  },
}))
