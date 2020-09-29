import { VueModule } from 'vue-modules'
import { Router } from 'vue-router'
import { authRoutes } from './router/auth-routes'
import { Store } from 'vuex'
import { authStore } from './store'

export class AuthModule implements VueModule {
  readonly name = 'auth'
  constructor(private router: Router, private store: Store<any>) {}

  install() {
    authRoutes.forEach((value) => this.router.addRoute(value))
    this.store.registerModule([this.name], authStore)
  }
}
