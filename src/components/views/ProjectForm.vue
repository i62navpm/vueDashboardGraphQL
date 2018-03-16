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
        :project="getProject"
        :submit="addProject"
      />
    </v-flex>
  </v-layout>
</template>

<script>
import ProjectForm from '@/components/presentationals/ProjectForm'
import addProject from '@/graphql/mutations/mutation.addProject'
import getProject from '@/graphql/queries/query.getProject'

export default {
  name: 'Home',
  components: {
    ProjectForm,
  },
  data() {
    return {
      loading: 0,
      getProject: {},
    }
  },
  methods: {
    addProject(data) {
      return this.$apollo.mutate({
        mutation: addProject,
        variables: {
          input: data,
        },
      })
    },
  },
  apollo: {
    $loadingKey: 'loading',
    getProject: {
      query: getProject,
      variables() {
        return {
          projectId: this.$route.params.projectId,
        }
      },
      skip() {
        return !this.$route.params.projectId
      },
    },
  },
}
</script>
