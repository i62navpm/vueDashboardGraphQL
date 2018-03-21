<template lang="pug">
v-card
  v-card-media(:src='data.image', height='200px')
    v-btn.delete-btn(icon @click.native="onRemove(data)")
      v-icon(color="red") delete
  v-card-title(primary-title='')
    div
      .headline {{ data.name }}
      span.grey--text {{ data.date | normalizeDate }}
  v-card-actions
    v-btn(:to="{name: 'projectForm', params: {projectId: data.slug}}", color='info')
      | Edit
    v-spacer
    v-btn(v-if='data.components && data.components.length', icon='', @click.native='show = !show')
      v-icon {{ !show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}
  v-slide-y-transition
    v-card-text.text-xs-center(v-show='show')
      repository-chip(v-for='component in data.components', :key='component.id' color="orange" :repository="component")
      v-divider.my-3
      v-btn(color="success" @click.native="onDeploy(data)")
        v-icon.mr-2 play_arrow
        | Deploy
</template>

<script>
import RepositoryChip from './RepositoryChip'

export default {
  name: 'Project',
  components: {
    RepositoryChip,
  },
  filters: {
    normalizeDate(date) {
      return new Date(date).toLocaleDateString()
    },
  },
  props: {
    data: {
      type: Object,
      required: true,
    },
    onRemove: {
      type: Function,
      default: () => {},
    },
    onDeploy: {
      type: Function,
      default: () => {},
    },
  },
  data: () => ({
    show: false,
  }),
}
</script>

<style lang="scss" scoped>
span.grey--text {
  float: left;
}
.delete-btn {
  position: absolute;
  top: 0.5em;
  right: 0.5em;
}
</style>
