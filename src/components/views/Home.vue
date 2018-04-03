<template lang="pug">
v-container(grid-list-md)
  project-remove-modal(ref='removeModal', :project='projectToRemove', @onremove='removeProject')
  project-deploy-modal(ref='deployModal', :project='projectToDeploy', @ondeploy='deployProject')
  v-layout(row wrap justify-center)
    v-flex.pa-3(v-for='project in projectMany', :key='project.slug', xs12 sm4 md3)
      project(:on-remove='showModalRemoveProject', :on-deploy='showModalDeployProject', :data='project')
  v-layout(row wrap)
    v-flex(xs12 sm12 md6)
      v-btn(to='/project', color='pink', dark fixed bottom right fab)
        v-icon add
</template>

<script>
import projectMany from '@/graphql/queries/query.projectMany'
import projectRemoveById from '@/graphql/mutations/mutation.projectRemoveById'
import Project from '@/components/presentationals/Project'
import ProjectRemoveModal from '@/components/presentationals/ProjectRemoveModal'
import ProjectDeployModal from '@/components/presentationals/ProjectDeployModal'

export default {
  name: 'Home',
  components: {
    Project,
    ProjectRemoveModal,
    ProjectDeployModal,
  },
  data() {
    return {
      projectToRemove: {},
      projectToDeploy: {},
      projectMany: [],
    }
  },
  methods: {
    showModalRemoveProject(project) {
      this.projectToRemove = project
      this.$refs.removeModal.dialog = true
    },
    closeModalRemoveProject() {
      this.projectToRemove = {}
      this.$refs.removeModal.dialog = false
    },
    showModalDeployProject(project) {
      this.projectToDeploy = project
      this.$refs.deployModal.dialog = true
    },
    closeModalDeployProject() {
      this.projectToDeploy = {}
      this.$refs.deployModal.dialog = false
    },
    async removeProject(_id) {
      await this.$apollo.mutate({
        mutation: projectRemoveById,
        variables: { _id },
        update: (store, { data: { projectRemoveById: { record } } }) => {
          const data = store.readQuery({ query: projectMany })
          data.projectMany = data.projectMany.filter(project => project._id !== record._id)
          store.writeQuery({ query: projectMany, data })
        },
      })
      this.closeModalRemoveProject()
    },
    deployProject(id) {
      this.closeModalDeployProject()
    },
  },
  apollo: {
    projectMany: {
      query: projectMany,
      fetchPolicy: 'network-only',
    },
  },
}
</script>
