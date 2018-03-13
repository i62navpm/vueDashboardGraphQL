<template>
  <div>
    <v-navigation-drawer 
      :value="drawer" 
      app
      @input="setDrawer({open:$event})" />
    <v-toolbar app />
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'NavigationDrawer',
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
