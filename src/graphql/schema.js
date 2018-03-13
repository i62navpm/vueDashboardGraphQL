import projectData from './projectMock'
import componentsData from './componentsMock'
import { GraphQLSchema, GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList } from 'graphql'

const ComponentType = new GraphQLObjectType({
  name: 'Component',
  fields: {
    id: { type: GraphQLID },
    projectId: { type: GraphQLID },
    name: { type: GraphQLString },
    repo: { type: GraphQLString },
  },
})

const ProjectType = new GraphQLObjectType({
  name: 'Project',
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    date: { type: GraphQLString },
    image: { type: GraphQLString },
    components: { type: new GraphQLList(ComponentType) },
  },
})

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    projects: {
      type: new GraphQLList(ProjectType),
      resolve: (root, args) => {
        const project = projectData.find(project => project.id === args.projectId)
        project.components = componentsData.filter(
          component => component.projectId === args.projectId
        )
      },
    },
  },
})

export const schema = new GraphQLSchema({ query: QueryType })
