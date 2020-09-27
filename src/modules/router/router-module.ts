import { VueModule } from 'vue-modules'
import { Router, createRouter, createWebHistory } from 'vue-router'

export class RouterModule implements VueModule {
  readonly name = 'router'
  router?: Router

  install() {
    this.router = createRouter({
      history: createWebHistory(),
      routes: []
    })
  }
}
