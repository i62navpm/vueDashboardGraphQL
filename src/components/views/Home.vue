<template>
  <v-chip>Example Chip</v-chip>
</template>

<script>
import listProjects from '@/graphql/queries/query.allProjects'
export default {
  name: 'Home',
  data() {
    return {
      listProjects: [],
    }
  },
  apollo: { listProjects },
}
</script>
