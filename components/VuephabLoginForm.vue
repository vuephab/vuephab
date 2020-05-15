<template>
  <v-card class="ma-auto" width="380">
    <v-card-title>Phabricator Login</v-card-title>
    <v-card-text>
      <v-form v-if="typingUsername" @submit.prevent="listTokens">
        <v-row class="my-4" dense>
          <v-col>
            <v-text-field
              ref="usernameField"
              v-model="username"
              color="secondary"
              hide-details
              label="Username"
              placeholder=" "
              required
            />
          </v-col>
          <v-col class="shrink">
            <v-btn class="secondary--text" type="submit" x-large>
              <v-icon v-if="username" large>mdi-account-key</v-icon>
              <v-icon v-else large>mdi-close</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
      <v-row v-else class="my-4" dense>
        <v-col>
          <v-btn
            :color="!stagedToken ? 'secondary' : ''"
            :href="generateTokenUrl"
            block
            target="_blank"
            x-large
            @click="stageToken"
          >
            <v-icon class="mr-8" left x-large>mdi-key-plus</v-icon>
            Generate Token
          </v-btn>
        </v-col>
        <v-col class="shrink">
          <v-tooltip top>
            <template #activator="{ on }">
              <v-btn
                class="secondary--text"
                x-large
                v-on="on"
                @click="listTokens"
              >
                <v-icon large>mdi-key-change</v-icon>
              </v-btn>
            </template>
            List API Tokens
          </v-tooltip>
        </v-col>
      </v-row>
      <v-form :value="!!token" @submit.prevent="submit">
        <v-text-field
          ref="tokenField"
          v-model="token"
          filled
          hint="Example: cli-xxxxxxxxxxxxxxxxxxxxxxxxxxxx"
          label="Paste API Token here"
          prepend-inner-icon="mdi-clipboard-arrow-right"
          required
        />
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-btn
        block
        :class="{
          primary: stagedToken,
          'primary--text': !stagedToken
        }"
        @click="submit"
      >
        Log In
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue, { VueConstructor } from 'vue'

export default (Vue as VueConstructor<
  Vue & {
    $refs: {
      tokenField: HTMLElement
      usernameField: HTMLElement
    }
  }
>).extend({
  name: 'VuephabLoginForm',
  data: () => ({
    generateTokenUrl: `${process.env.PHABRICATOR_BASE_URL}/conduit/login`,
    stagedToken: false,
    token: '',
    typingUsername: false,
    username: ''
  }),
  methods: {
    async listTokens() {
      if (!this.typingUsername) {
        this.typingUsername = true
        await this.$nextTick()
        this.$refs.usernameField.focus()
        return
      }
      if (this.username) {
        window.open(
          `${process.env.PHABRICATOR_BASE_URL}/settings/user/${this.username}/page/apitokens`,
          '_blank'
        )
        this.stageToken()
      }
      this.typingUsername = false
    },
    stageToken() {
      this.$refs.tokenField.focus()
      this.stagedToken = true
    },
    async submit() {}
  }
})
</script>
