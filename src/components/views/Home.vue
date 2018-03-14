<template>
  <v-container 
    grid-list-md
    text-xs-center>
    <v-layout 
      row
      wrap>
      <v-flex
        v-for="project in listProjects" 
        :key="project.id"
        xs12
        sm4>
        <project :data="project" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import listProjects from '@/graphql/queries/query.allProjects'
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
  apollo: { listProjects },
}
</script>
