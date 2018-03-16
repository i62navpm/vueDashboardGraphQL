import Vuetify from 'vuetify'
import { shallow, createLocalVue } from '@vue/test-utils'
import RepositoryChip from '@/components/presentationals/RepositoryChip'

const localVue = createLocalVue()
localVue.use(Vuetify)

describe('RepositoryChip', () => {
  it('Has a props object', () => {
    expect(typeof RepositoryChip.props).toBe('object')
  })

  it('Has a data props', () => {
    const repository = { name: 'Repository mock name' }
    const wrapper = shallow(RepositoryChip, { localVue, propsData: { repository } })
    const { name } = wrapper.props().repository

    expect(wrapper.isVueInstance()).toBeTruthy()
    expect(typeof wrapper.props().repository).toBe('object')
    expect(wrapper.props()).toEqual({ repository })
    expect(name).toBeTruthy()
  })
})
