import gql from 'graphql-tag'

export default gql(`
query {
  listProjects {
    name
    slug
    components {
      name
      repo
    }
  }
}`)
