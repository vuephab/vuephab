<template>
  <v-app-bar
    app
    class="vuephab-top-bar"
    color="secondary"
    dark
    dense
    fixed
    prominent
    shrink-on-scroll
  >
    <v-app-bar-nav-icon @click.stop="toggleDrawer">
      <v-img :src="require('~/assets/vuephab-white.svg')" width="36" />
    </v-app-bar-nav-icon>
    <v-toolbar-title>
      <v-breadcrumbs :items="breadcrumbs" class="pl-0">
        <template v-slot:divider>
          <v-icon>mdi-chevron-right</v-icon>
        </template>
      </v-breadcrumbs>
      <span v-text="title" />
      <span v-if="!title">&nbsp;</span>
    </v-toolbar-title>
    <v-text-field
      class="ma-1"
      dense
      width="10"
      height="24"
      hide-details
      placeholder="Search…"
      outlined
      rounded
    >
      <template #prepend-inner>
        <v-menu offset-y>
          <template #activator="{ on, value: open }">
            <v-btn
              class="ml-n5 mt-n1"
              color="accent"
              height="32"
              min-width="50"
              rounded
              text
              x-small
              v-on="on"
            >
              <v-icon left v-text="searchQueries[searchQuerySelected].icon" />
              <span
                class="hidden-sm-and-down"
                v-text="searchQueries[searchQuerySelected].title"
              />
              <v-icon v-if="open" small>mdi-chevron-down</v-icon>
              <v-icon v-else small>mdi-chevron-right</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item class="mr-n2" dense>
              <v-chip-group
                v-model="searchQuerySelected"
                active-class="primary--text"
                column
                mandatory
              >
                <v-chip
                  v-for="(query, queryNum) in searchQueries"
                  :key="queryNum"
                  :value="queryNum"
                  small
                >
                  <v-icon left small v-text="query.icon" />
                  <span v-text="query.title" />
                </v-chip>
              </v-chip-group>
            </v-list-item>
            <v-list-item dense>
              <v-chip color="primary" light small to="/search">
                <v-icon left small>mdi-toy-brick-search</v-icon>
                <span>Advanced Search</span>
              </v-chip>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>
      <template #append>
        <v-btn class="mr-n6 mt-n2" width="40" height="40" icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </template>
    </v-text-field>
    <v-spacer />
    <v-btn class="mr-n3 px-5" height="48" nuxt rounded text to="/login">
      Login
      <v-avatar class="ml-3 mr-n5" color="accent">
        <v-icon dark>mdi-incognito</v-icon>
      </v-avatar>
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import { $store } from '~/store'

declare module 'vue-meta' {
  export interface MetaInfo {
    titleChunk?: string
  }
}

export default Vue.extend({
  name: 'VuephabTopBar',
  data: () => ({
    searchQueries: [
      {
        icon: 'mdi-earth',
        title: 'All Documents'
      },
      {
        icon: 'mdi-application-import',
        title: 'Current Application'
      },
      {
        icon: 'mdi-octagram',
        title: 'Open Documents'
      },
      {
        icon: 'mdi-octagram',
        title: 'Open Tasks'
      }
    ],
    searchQuerySelected: 0,
    title: ''
  }),
  computed: {
    breadcrumbs: () => $store.state.breadcrumbs
  },
  mounted() {
    this.title = this.$meta().refresh().metaInfo.titleChunk as string
  },
  methods: {
    toggleDrawer: $store.commit.toggleDrawer
  },
  head() {
    return {
      changed: (meta: MetaInfo) => {
        this.title = meta.titleChunk as string
      }
    }
  }
})
</script>

<style lang="scss">
.vuephab-top-bar {
  a {
    color: white;
  }

  .v-toolbar__title {
    max-width: 40vw;
    width: 500px;
  }

  .v-breadcrumbs {
    padding-bottom: calc(2.5em - 42px);

    li {
      font-size: calc(5em - 106px);

      .v-icon {
        font-size: inherit;
      }
    }
  }
}
</style>
