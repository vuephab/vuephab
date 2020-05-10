# Vuephab
[![WIP](https://img.shields.io/badge/WIP-lightgrey)](./)
[![Version](https://img.shields.io/github/package-json/v/vuephab/vuephab)](./package.json)
[![Discord](https://img.shields.io/discord/708810519292805124?logo=Discord)](https://discord.gg/DKdS26g)

[![Conduit](https://img.shields.io/badge/Conduit-569?style=for-the-badge&logo=phabricator)](https://secure.phabricator.com/conduit/)
[![Express](https://img.shields.io/badge/Express-060?style=for-the-badge&logo=node.js)](https://expressjs.com/)
[![Nuxt](https://img.shields.io/badge/Nuxt-388?style=for-the-badge&logo=nuxt.js)](https://nuxtjs.org/)
[![Vuetify](https://img.shields.io/badge/Vuetify-05c?style=for-the-badge&logo=vuetify)](https://vuetifyjs.com/)

> ⸺ *Perspective Vue on Collaboration*
> ![](./assets/logo.svg)

Intuitive Vue frontend to Phabricator utilizing Conduit API

## How is it expected to work?

1. Suppose you have installed Phabricator and it is accessible through base URL <https://phabricator.app>.
2. Vuephab guides user to <https://phabricator.app/conduit/login/>.
3. Vuephab expects from user to provide it a **Conduit API token** fetched on that page (after successful authentication).
   > ⚠ User should treat token as extra user/password pair, because it basically opens a window to the actions on their behalf.
4. User receives cozy gateway in a form of Vuephab interface, so they can enjoy working with Phabricator even more.

## Development

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
