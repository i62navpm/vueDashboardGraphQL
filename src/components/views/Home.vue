<template>
  <v-container 
    grid-list-md>
    <v-layout 
      row
      wrap
    >
      <project-remove-modal
        ref="removeModal"
        :project="projectToRemove"
        @onRemove="removeProject"
      />
      <project-deploy-modal
        ref="deployModal"
        :project="projectToDeploy"
        @onDeploy="deployProject"
      />
      <v-flex
        v-for="project in listProjects" 
        :key="project.slug"
        xs12
        sm4>
        <project 
          :on-remove="showModalRemoveProject"
          :on-deploy="showModalDeployProject"
          :data="project"
        />
      </v-flex>
    </v-layout>
    <v-layout
      row 
      wrap>
      <v-flex
        xs12 
        sm12
        md6>
        <v-btn
          to="/project"
          color="pink"
          dark
          fixed
          bottom
          right
          fab
        >
          <v-icon>add</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import listProjects from '@/graphql/queries/query.listProjects'
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
      listProjects: [],
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
    removeProject(id) {
      this.listProjects = this.listProjects.filter(project => project.slug !== id)
      this.closeModalRemoveProject()
    },
    deployProject(id) {
      this.closeModalDeployProject()
    },
  },
  apollo: {
    listProjects: {
      query: listProjects,
      fetchPolicy: 'network-only',
    },
  },
}
</script>
