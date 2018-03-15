import ProjectForm from '@/components/views/ProjectForm'

describe('ProjectForm component test', () => {
  it('Has a apollo object', () => {
    expect(typeof ProjectForm.apollo).toBe('object')
  })
  it('Has a project list', () => {
    expect(typeof ProjectForm.data).toBe('function')
    const defaultData = ProjectForm.data()
    expect(defaultData.getProject).toEqual({})
  })
})
