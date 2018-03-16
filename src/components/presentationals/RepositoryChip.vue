<template lang="pug">
  v-chip(color="orange" text-color="white")
    v-icon.mr-2 check_circle
    | {{ repository.name }}
</template>

<script>
export default {
  name: 'RepositoryChip',
  props: {
    repository: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>

</style>
