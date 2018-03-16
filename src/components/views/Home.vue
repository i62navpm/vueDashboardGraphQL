<template>
  <v-container 
    grid-list-md>
    <v-layout 
      row
      wrap
    >
      <project-remove-modal
        ref="modal"
        :project="projectToRemove"
        @onRemove="removeProject"
      />
      <v-flex
        v-for="project in listProjects" 
        :key="project.id"
        xs12
        sm4>
        <project 
          :on-remove="showModalRemoveProject"
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

export default {
  name: 'Home',
  components: {
    Project,
    ProjectRemoveModal,
  },
  data() {
    return {
      projectToRemove: {},
      listProjects: [],
    }
  },
  methods: {
    showModalRemoveProject(project) {
      this.projectToRemove = project
      this.$refs.modal.dialog = true
    },
    closeModalRemoveProject() {
      this.projectToRemove = {}
      this.$refs.modal.dialog = false
    },
    removeProject(id) {
      this.listProjects = this.listProjects.filter(project => project.slug !== id)
      this.closeModalRemoveProject()
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
