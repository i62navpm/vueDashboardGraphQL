<template>
  <v-toolbar
    color="indigo" 
    dark
    fixed
    app
  >
    <v-toolbar-side-icon @click.stop="setDrawer({open: !drawer})" />
    <v-toolbar-title>Application</v-toolbar-title>
  </v-toolbar>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Toolbar',
  computed: {
    ...mapGetters({
      drawer: 'navigationDrawer/GET_DRAWER',
    }),
  },
  methods: {
    ...mapActions({ setDrawer: 'navigationDrawer/SET_DRAWER' }),
  },
}
</script>

<style lang="sass" scoped>

</style>
