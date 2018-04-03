import gql from 'graphql-tag'

export default gql(`
query projectOne($filter: FilterFindOneProjectInput) {
  projectOne(filter: $filter) {
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
