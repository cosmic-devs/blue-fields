<template>
  <div>
    <router-link to="/">{{ t('home.nav') }}</router-link>
    |
    <router-link to="/about">About</router-link>
    |
    <template v-if="!isLoggedIn">
      <router-link to="/register">{{ t('register.nav') }}</router-link>
      |
      <router-link to="/login">{{ t('login.nav') }}</router-link>
    </template>
    <template v-else>
      <router-link to="/dashboard">{{ t('dashboard.nav') }}</router-link>
      |
      <span
        ><a @click="logout">{{ t('logout') }}</a></span
      >
      |
      <span>{{ user.first_name }}</span>
    </template>
    <app-locale-switcher class="float-right" />
    <span v-if="authStatus === AuthStatus.LOADING" class="float-right">
      loading...
    </span>
    <span v-else-if="authStatus === AuthStatus.ERROR" class="float-right">
      error!
    </span>
  </div>
</template>
<script lang="ts">
import { Store, useStore } from 'vuex'
import { defineComponent, computed } from 'vue'
import { Router, useRouter } from 'vue-router'
import { User } from 'vue-modules'
import { AuthStatus } from '../../../enums'
import AppLocaleSwitcher from './AppLocaleSwitcher.vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'AppNavBar',
  components: { AppLocaleSwitcher },
  setup() {
    const store: Store<unknown> = useStore()
    const router: Router = useRouter()
    const { t } = useI18n()

    const isLoggedIn = computed(() => store.getters['auth/IS_LOGGED_IN'])
    const user = computed(() => store.getters['auth/ME'] as User)

    const logout = () => {
      store
        .dispatch('auth/LOGOUT')
        .then((data) => {
          if (data.logoutUser) router.push('/login')
        })
        .catch((err) => {
          if (err.message.includes('Invalid database secret.')) {
            router.push('/login')
            return
          }
          console.log(err.message)
        })
    }

    const authStatus = computed(
      () => store.getters['auth/AUTH_STATUS'] as AuthStatus
    )

    return { t, isLoggedIn, logout, user, authStatus, AuthStatus }
  }
})
</script>

<style scoped>
.router-link-active {
  @apply font-bold;
}
</style>
