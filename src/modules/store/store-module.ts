import Vuex from 'vuex'
import { VueModule } from 'vue-modules'
import { Store } from 'vuex'

export class StoreModule implements VueModule {
  readonly name = 'store'
  store?: Store<any>

  install() {
    this.store = new Vuex.Store({
      state: {},
      mutations: {},
      actions: {}
    })
  }
}
