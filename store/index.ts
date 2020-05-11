import { createDirectStore } from 'direct-vuex'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

interface Breadcrumb {
  disabled: boolean
  exact: boolean
  href: string
  link: boolean
  text: string | number
  to: string | object
}

const {
  store: $store,
  rootActionContext,
  moduleActionContext,
  rootGetterContext,
  moduleGetterContext
} = createDirectStore({
  state: () => ({
    breadcrumbs: [
      {
        text: 'Vuephab',
        to: '/'
      }
    ] as Breadcrumb[],
    drawer: false
  }),
  mutations: {
    toggleDrawer(state, toggle?: boolean) {
      state.drawer = typeof toggle === 'boolean' ? toggle : !state.drawer
    }
  }
})

export {
  $store,
  rootActionContext,
  moduleActionContext,
  rootGetterContext,
  moduleGetterContext
}
export default () => $store.original
