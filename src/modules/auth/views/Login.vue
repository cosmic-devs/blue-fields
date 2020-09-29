<template>
  <form @submit.prevent="login">
    <div>
      <label for="email">Email: </label>
      <input id="email" v-model="payload.email" required type="email" />
    </div>

    <div>
      <label for="password">Password: </label>
      <input
        id="password"
        v-model="payload.password"
        required
        type="password"
      />
    </div>

    <hr />
    <button type="submit">Login</button>
  </form>
</template>

<script lang="ts">
import { defineComponent, reactive, watch, inject } from 'vue'
import { Store, useStore } from 'vuex'
import { Router, useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  setup() {
    const store: Store<unknown> = useStore()
    const router: Router = useRouter()
    const { locale, t } = useI18n()

    /************************************
     *  Set language based page metadata
     ************************************/
    const setMeta:
      | ((title: string, description?: string) => void)
      | undefined = inject('meta')
    watch(
      locale,
      () => {
        if (setMeta) setMeta(t('login.meta.title'), t('login.meta.description'))
      },
      { immediate: true }
    )
    /*************** END ****************
     ************************************/

    const payload = reactive({
      email: '',
      password: ''
    })

    const login = () => {
      store
        .dispatch('auth/LOGIN', payload)
        .then(() => router.push('/dashboard'))
        .catch((err) => console.log(err.message))
    }

    return { payload, login }
  }
})
</script>
