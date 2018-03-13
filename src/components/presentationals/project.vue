<template>
  <v-card>
    <v-card-media
      :src="data.image"
      height="200px"
    />
    <v-card-title primary-title>
      <div>
        <div class="headline">{{ data.name }}</div>
        <span class="grey--text">{{ data.date | normalizeDate }}</span>
      </div>
    </v-card-title>
    <v-card-actions v-if="data.components.length">
      <v-spacer />
      <v-btn 
        icon
        @click.native="show = !show">
        <v-icon>{{ !show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
      </v-btn>
    </v-card-actions>
    <v-slide-y-transition>
      <v-card-text v-show="show">
        <p 
          v-for="component in data.components"
          :key="component.id">
          {{ component.name }}
        </p>
      </v-card-text>
    </v-slide-y-transition>
  </v-card>

</template>

<script>
export default {
  name: 'Project',
  filters: {
    normalizeDate: function(date) {
      return new Date(date).toLocaleDateString()
    },
  },
  props: {
    data: {
      type: Object,
      required: true,
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
</style>
