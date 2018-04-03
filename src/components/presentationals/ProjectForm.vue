<template lang="pug">
  v-card.elevation-2
    v-toolbar(dark color='indigo')
      v-icon(large) add_to_queue
      v-toolbar-title Create Project
      v-spacer
      v-btn(flat icon @click='close')
        v-icon(medium) close
    v-card-text
      v-form(ref='form', v-model='valid', lazy-validation)
        
        p.headline.text-xs-center Project
        v-divider.mb-4
        v-text-field(:rules='nameRules', v-model='projectForm.name', label='Name', required)
        
        p.mt-5.headline.text-xs-center Repositories
        v-divider.mb-4
        div(v-for="(repository, index) in projectForm.components" :key="repository.repo")
          v-text-field(v-model='repository.repo', :label='`URL repo ${index + 1}`' append-icon="close" :append-icon-cb="() => removeRepo(index)")
        v-spacer
        .text-xs-right
          v-btn(flat small color="primary" @click="addRepo()") 
            v-icon add
            | Add repo
        v-btn(:disabled='!valid', color='primary', type='submit', @click.prevent='sendForm(projectForm)') 
          | Submit
</template>

<script>
export default {
  name: 'ProjectForm',
  props: {
    project: {
      type: Object,
      required: true,
    },
    submit: {
      type: Function,
      required: true,
    },
  },
  data: () => ({
    valid: false,
    projectForm: { components: [{}] },
    nameRules: [v => !!v || 'Name is required'],
  }),
  created() {
    this.projectForm = {
      ...this.projectForm,
      ...this.project,
      components: [...this.project.components],
    }
    this.valid = !!this.projectForm.name
  },
  methods: {
    async sendForm(data) {
      try {
        await this.submit({ ...data, slug: this.toSlug(data.name) })
        this.$router.push({ name: 'home' })
      } catch (err) {
        throw new Error(err)
      }
    },
    toSlug(msg) {
      return msg
        .toLowerCase()
        .replace(/[^\w ]+/g, '')
        .replace(/ +/g, '-')
    },
    addRepo() {
      this.projectForm.components.push({})
    },
    removeRepo(index) {
      this.projectForm.components.splice(index, 1)
    },
    close() {
      this.$router.push({ name: 'home' })
    },
  },
}
</script>

<style lang="scss" scoped>

</style>
