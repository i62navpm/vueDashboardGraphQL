import Home from '@/components/views/Home'

describe('Home component test', () => {
  it('Has a apollo object', () => {
    expect(typeof Home.apollo).toBe('object')
  })
  it('Has a project list', () => {
    expect(typeof Home.data).toBe('function')
    const defaultData = Home.data()
    expect(defaultData.listProjects).toEqual([])
  })
})
