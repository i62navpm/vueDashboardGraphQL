import gql from 'graphql-tag'

export default gql(`
query {
  listProjects {
    id
    name
    date
    image
    components {
      id
      name
      repo
    }
  }
}`)
