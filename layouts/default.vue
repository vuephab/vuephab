<template>
  <v-app dark>
    <v-navigation-drawer :value="drawer" app fixed>
      <v-list>
        <v-list-item exact router to="/undefined">
          <v-list-item-action>
            <v-icon>mdi-alert</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>404 Error</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <vuephab-top-bar />
    <v-content>
      <nuxt />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import { $store } from '~/store'
import VuephabTopBar from '~/components/VuephabTopBar.vue'

export default Vue.extend({
  components: {
    VuephabTopBar
  },
  computed: {
    drawer: () => $store.state.drawer
  }
})
</script>
