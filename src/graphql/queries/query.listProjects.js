import gql from 'graphql-tag'

export default gql(`
query {
  listProjects {
    name
    slug
    image
    components {
      name
      repo
    }
  }
}`)
