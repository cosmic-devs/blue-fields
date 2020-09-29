import { VueModule } from 'vue-modules'
import { Router } from 'vue-router'
import { dashboardRoutes } from './router/dashboard-routes'
import { Store } from 'vuex'
import { dashboardStore } from './store'

export class DashboardModule implements VueModule {
  readonly name = 'dashboard'
  constructor(private router: Router, private store: Store<any>) {}

  install() {
    dashboardRoutes.forEach((value) => this.router.addRoute(value))
    this.store.registerModule([this.name], dashboardStore)
  }
}
