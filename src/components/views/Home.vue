<template>
  <v-container 
    grid-list-md>
    <v-layout 
      row
      wrap
    >
      <v-flex
        v-for="project in listProjects" 
        :key="project.id"
        xs12
        sm4>
        <project :data="project" />
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

export default {
  name: 'Home',
  components: {
    Project,
  },
  data() {
    return {
      listProjects: [],
    }
  },
  apollo: {
    listProjects: {
      query: listProjects,
      fetchPolicy: 'network-only',
    },
  },
}
</script>
