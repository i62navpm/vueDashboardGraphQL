import Vuetify from 'vuetify'
import { shallow, createLocalVue } from '@vue/test-utils'
import ProjectForm from '@/components/presentationals/ProjectForm'
import projectsMock from '@/graphql/ProjectMock'
import componentsMock from '@/graphql/componentsMock'

const localVue = createLocalVue()
localVue.use(Vuetify)

describe('Project Form', () => {
  it('Has a data and props object', () => {
    expect(typeof ProjectForm.data).toBe('function')
    expect(typeof ProjectForm.props).toBe('object')
  })

  it('Has a data props', () => {
    const project = { ...projectsMock[0], components: componentsMock[0] }
    const wrapper = shallow(ProjectForm, { localVue, propsData: { project, submit: Function } })
    const { slug, name } = wrapper.props().project

    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(typeof wrapper.props().project).toBe('object')
    expect(wrapper.props()).toEqual({ project, submit: Function })
    expect(slug).toBeTruthy()
    expect(name).toBeTruthy()
  })
})
