<template>
  <v-layout 
    row 
    justify-center
    wrap
  >
    <v-flex
      xs12 
      sm6
    >
      <project-form
        :project="project"
        :submit="addProject"
      />
    </v-flex>
  </v-layout>
</template>

<script>
import ProjectForm from '@/components/presentationals/ProjectForm'
import addProject from '@/graphql/mutations/mutation.addProject'

export default {
  name: 'Home',
  components: {
    ProjectForm,
  },
  data() {
    return {
      project: {},
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
}
</script>
