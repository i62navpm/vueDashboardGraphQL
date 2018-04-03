import gql from 'graphql-tag'

export default gql(`
mutation($record: UpdateByIdProjectInput!) {
  projectUpdateById(record: $record) {
    record {
      name
    }
  }
}`)
