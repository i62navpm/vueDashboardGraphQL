<template>
  <v-card class="elevation-2">
    <v-toolbar 
      dark 
      color="indigo">
      <v-icon large>add_to_queue</v-icon>
      <v-toolbar-title>Create Project</v-toolbar-title>
      <v-spacer />
      <v-btn
        flat
        icon
        @click="close"
      >
        <v-icon 
          medium 
        >
          close
        </v-icon>
      </v-btn>
    </v-toolbar>
    <v-card-text>
      <v-form 
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <v-text-field
          :rules="nameRules"
          v-model="projectForm.name"
          label="Name"
          required
        />
        <v-btn
          :disabled="!valid"
          color="primary"
          type="submit"
          @click.prevent="sendForm(projectForm)"
        >
          Create
        </v-btn>
      </v-form>
    </v-card-text>
  </v-card>
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
    projectForm: {},
    nameRules: [v => !!v || 'Name is required'],
  }),
  created() {
    this.projectForm = { ...this.project, ...this.projectForm }
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
    close() {
      this.$router.push({ name: 'home' })
    },
  },
}
</script>

<style lang="scss" scoped>

</style>
