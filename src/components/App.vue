<template>
  <v-app id="inspire">
    <navigation-drawer/>
    <toolbar />
    <v-content>
      <v-container 
        fluid
      >
        <router-view/>
      </v-container>
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import NavigationDrawer from './NavigationDrawer.vue'
import Footer from './Footer.vue'
import Toolbar from './Toolbar.vue'

export default {
  components: {
    NavigationDrawer,
    Footer,
    Toolbar,
  },
}
</script>
