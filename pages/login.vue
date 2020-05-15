<template>
  <v-container fill-height>
    <vuephab-login-form />
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import VuephabLoginForm from '~/components/VuephabLoginForm.vue'

export default Vue.extend({
  components: {
    VuephabLoginForm
  },
  head: () => ({
    title: 'Login'
  })
})
</script>
