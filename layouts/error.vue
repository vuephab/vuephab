<template>
  <v-layout fill-height>
    <v-card class="ma-auto text-center" max-width="300">
      <v-icon
        class="mt-2"
        size="72"
        v-text="icon || 'mdi-alert-circle-outline'"
      />
      <v-card-title class="justify-center" v-text="message || error.message" />
      <v-card-actions class="justify-center">
        <v-btn nuxt text to="/">
          <v-icon left>mdi-home</v-icon>
          Open home page
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-layout>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data: () => ({
    icon: '',
    message: ''
  }),
  head() {
    let title = 'Error'
    switch (this.error.statusCode) {
      case 404:
        title = 'Not Found'
        this.icon = 'mdi-file-question'
        this.message = 'Inquired page does not exist'
        break
    }
    return {
      title
    }
  }
}
</script>
