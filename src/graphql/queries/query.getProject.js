import gql from 'graphql-tag'

export default gql(`
query getProject($projectId: ID) {
  getProject(projectId: $projectId) {
    name
    slug
    components {
      name
      repo
    }
  }
}`)
