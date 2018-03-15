import gql from 'graphql-tag'

export default gql(`
mutation($input: ProjectInput!) {
  addProject(input: $input) {
    name
    slug
  }
}`)
