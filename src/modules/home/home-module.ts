import { VueModule } from 'vue-modules'
import { Router } from 'vue-router'
import { homeRoutes } from './router/home-routes'
import { Store } from 'vuex'
import { homeStore } from './store'

export class HomeModule implements VueModule {
  readonly name = 'home'
  constructor(private router: Router, private store: Store<any>) {}

  install() {
    homeRoutes.forEach((value) => this.router.addRoute(value))
    this.store.registerModule([this.name], homeStore)
  }
}
