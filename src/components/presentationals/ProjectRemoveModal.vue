<template lang="pug">
  v-dialog(v-model='dialog', max-width='290')
    v-card
      v-card-title.headline Remove Project?
      v-card-text
        | Are you sure you want to remove {{project.name}}?
      v-card-actions
        v-spacer
        v-btn(color='green darken-1', flat='flat', @click.native='dialog = false') Close
        v-btn(color='error darken-1', flat='flat', @click.native='removeProject(project.slug)') Remove
</template>

<script>
export default {
  name: 'ProjectRemoveModal',
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
    removeProject(slug) {
      this.$emit('onRemove', slug)
    },
  },
}
</script>

<style lang="scss" scoped>

</style>
