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
@import url('https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,300;0,400;0,700;0,800;1,300;1,400&family=Poppins:wght@700&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

#app {
  font-family: 'Mulish', sans-serif;
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