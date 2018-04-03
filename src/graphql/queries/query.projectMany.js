import gql from 'graphql-tag'

export default gql(`
query {
  projectMany {
    _id
    name
    slug
    components {
      name 
      image
      registry
    }
  }
}`)
