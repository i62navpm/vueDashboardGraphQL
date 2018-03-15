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
        <router-link to="/project">
          <v-btn
            color="pink"
            dark
            fixed
            bottom
            right
            fab
          >
            <v-icon>add</v-icon>
          </v-btn>
        </router-link>
          
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
  apollo: {
    listProjects: {
      query: listProjects,
      fetchPolicy: 'network-only',
    },
  },
}
</script>
