import Vuetify from 'vuetify'
import { shallow, createLocalVue } from '@vue/test-utils'
import Project from '@/components/presentationals/Project'
import projectsMock from '@/graphql/projectMock'
import componentsMock from '@/graphql/componentsMock'

const localVue = createLocalVue()
localVue.use(Vuetify)

describe('Project', () => {
  it('Has a data and props object', () => {
    expect(typeof Project.data).toBe('function')
    expect(typeof Project.props).toBe('object')
  })

  it('Has a data props', () => {
    const data = { ...projectsMock[0], components: componentsMock[0] }
    const wrapper = shallow(Project, { localVue, propsData: { data } })
    const { id, name } = wrapper.props().data

    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(typeof wrapper.props().data).toBe('object')
    expect(wrapper.props()).toEqual({ data })
    expect(id).toBeTruthy()
    expect(name).toBeTruthy()
  })
})
