import gql from 'graphql-tag'

export default gql(`
mutation($_id: MongoID!) {
  projectRemoveById(_id: $_id) {
    record {
      _id
      name
      slug
    }
  }
}`)
