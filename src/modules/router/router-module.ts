import { VueModule } from 'vue-modules'
import { Router, createRouter, createWebHistory } from 'vue-router'
import { Store } from 'vuex'

export class RouterModule implements VueModule {
  readonly name = 'router'
  router?: Router

  constructor(private store: Store<any>) {}

  install() {
    this.router = createRouter({
      history: createWebHistory(),
      routes: []
    })

    this.router.beforeEach((to, _, next) => {
      if (to.matched.some((record) => record.meta.requiresAuth)) {
        if (this.store.getters['auth/IS_LOGGED_IN']) {
          next()
          return
        }
        next('/login')
      } else {
        next()
      }
    })

    this.router.beforeEach((to, _, next) => {
      if (to.matched.some((record) => record.meta.requiresGuest)) {
        if (!this.store.getters['auth/IS_LOGGED_IN']) {
          next()
          return
        }
        next('/dashboard')
      } else {
        next()
      }
    })
  }
}
