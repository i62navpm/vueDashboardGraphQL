<template>
  <v-layout 
    row 
    justify-center
    wrap
  >
    <v-flex
      v-if="!loading"
      xs12 
      sm10
      md8
    >
      <project-form
        :project="projectOne"
        :submit="$route.params.projectId ? projectUpdateById : projectCreate"
      />
    </v-flex>
  </v-layout>
</template>

<script>
import ProjectForm from '@/components/presentationals/ProjectForm'
import projectCreate from '@/graphql/mutations/mutation.projectCreate'
import projectUpdateById from '@/graphql/mutations/mutation.projectUpdateById'
import projectOne from '@/graphql/queries/query.projectOne'

export default {
  name: 'Home',
  components: {
    ProjectForm,
  },
  data() {
    return {
      loading: 0,
      projectOne: { components: [] },
    }
  },
  methods: {
    projectCreate(record) {
      return this.$apollo.mutate({
        mutation: projectCreate,
        variables: { record },
      })
    },
    projectUpdateById(record) {
      delete record.__typename
      return this.$apollo.mutate({
        mutation: projectUpdateById,
        variables: { record },
      })
    },
  },
  apollo: {
    $loadingKey: 'loading',
    projectOne: {
      query: projectOne,
      variables() {
        return {
          filter: { _id: this.$route.params.projectId },
        }
      },
      skip() {
        return !this.$route.params.projectId
      },
    },
  },
}
</script>
