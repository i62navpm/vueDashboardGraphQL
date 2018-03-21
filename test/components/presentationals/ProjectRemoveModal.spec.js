import Vuetify from 'vuetify'
import { shallow, createLocalVue } from '@vue/test-utils'
import ProjectRemoveModal from '@/components/presentationals/ProjectRemoveModal'
import projectsMock from '@/graphql/projectMock'
import componentsMock from '@/graphql/componentsMock'

const localVue = createLocalVue()
localVue.use(Vuetify)

describe('ProjectRemoveModal', () => {
  it('Has a data and props object', () => {
    expect(typeof ProjectRemoveModal.data).toBe('function')
    expect(typeof ProjectRemoveModal.props).toBe('object')
  })

  it('Has a data props', () => {
    const project = { ...projectsMock[0], components: componentsMock[0] }
    const wrapper = shallow(ProjectRemoveModal, {
      localVue,
      propsData: { project, onRemove: project => project.slug },
    })
    const { name } = wrapper.props().project

    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(typeof wrapper.props().project).toBe('object')
    expect(name).toBeTruthy()
  })
})
