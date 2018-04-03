import gql from 'graphql-tag'

export default gql(`
mutation($record: CreateOneProjectInput!) {
  projectCreate(record: $record) {
    record {
      name
    }
  }
}`)
