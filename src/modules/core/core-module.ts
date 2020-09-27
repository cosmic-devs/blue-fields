import { createApp } from 'vue'
import { VueModule } from 'vue-modules'
import { Router } from 'vue-router'
import { Store } from 'vuex'
import { I18n } from 'vue-i18n'
import App from './components/App.vue'

export class CoreModule implements VueModule {
  readonly name = 'core'
  constructor(
    private router: Router,
    private store: Store<any>,
    private i18n: I18n
  ) {}

  install() {
    createApp(App)
      .use(this.store)
      .use(this.router)
      .use(this.i18n)
      .provide('meta', this.setMeta)
      .mount('#app')
  }

  setMeta(title: string, description: string) {
    document.title = title
    const meta = (document.getElementsByTagName('meta') as {
      [key: string]: any
    })['description']
    meta.content = description
  }
}
