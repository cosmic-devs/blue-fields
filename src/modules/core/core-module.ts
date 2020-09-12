import { createApp } from 'vue'
import { VueModule } from 'vue-modules'
import { Router } from 'vue-router'
import { Store } from 'vuex'
import App from './components/App.vue'

export class CoreModule implements VueModule {
  readonly name = 'core'
  constructor(private router: Router, private store: Store<any>) {}

  install() {
    createApp(App).use(this.store).use(this.router).mount('#app')
  }
}
