<template>
  <span v-if="status === RequestStatus.LOADING">loading...</span>
  <template v-else>
    <app-nav-bar />
    <router-view />
  </template>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { Store, useStore } from 'vuex'
import { RequestStatus } from '../../../enums'
import { User } from 'vue-modules'
import { Router, useRouter } from 'vue-router'
import AppNavBar from './AppNavBar.vue'

export default defineComponent({
  name: 'App',
  components: { AppNavBar },
  setup() {
    const store: Store<unknown> = useStore()
    const router: Router = useRouter()

    const isLoggedIn = computed(() => store.getters['auth/IS_LOGGED_IN'])
    const user = computed(() => store.getters['auth/ME'] as User)

    if (isLoggedIn.value && !user.value._id) {
      store.dispatch('auth/ME').catch((err) => {
        if (err.message.includes('Invalid database secret.')) {
          router.push('/login')
          return
        }
        console.log(err.message)
      })
    }

    const status = computed(() => store.getters['auth/STATUS'] as RequestStatus)

    return { status, RequestStatus }
  }
})
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,900;1,700&display=swap');

#app {
  font-family: 'Roboto', sans-serif;
  max-width: 1920px;
  min-width: 320px;
  margin: auto;
  position: relative;
}

/*****************************************
   Remove highlight blue color on buttons
   when tapped, only for mobile devices
*****************************************/
label,
input,
button {
  user-select: none;
}
</style>
