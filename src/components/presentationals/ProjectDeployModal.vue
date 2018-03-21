<template lang="pug">
  v-bottom-sheet(v-model='dialog')
    v-card
      v-card-title.headline Deploy Project?
      v-card-text
        | Are you sure you want to deploy {{project.name}}?
      v-card-actions
        v-spacer
        v-btn(color='green darken-1', flat='flat', @click.native='dialog = false') Close
        v-btn(color='error darken-1', flat='flat', @click.native='deployProject(project.slug)') Deploy
</template>

<script>
export default {
  name: 'ProjectDeployModal',
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    dialog: false,
  }),
  methods: {
    deployProject(slug) {
      this.$emit('onDeploy', slug)
    },
  },
}
</script>

<style lang="scss" scoped>

</style>
