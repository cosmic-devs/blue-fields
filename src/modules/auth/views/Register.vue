<template>
  <form @submit.prevent="register">
    <div>
      <label for="first_name">Name: </label>
      <input
        id="first_name"
        v-model="payload.first_name"
        type="text"
        required
        autofocus
      />
    </div>

    <div>
      <label for="last_name">Last name: </label>
      <input
        id="last_name"
        v-model="payload.last_name"
        type="text"
        required
        autofocus
      />
    </div>

    <div>
      <label for="email">E-Mail Address: </label>
      <input id="email" v-model="payload.email" type="email" required />
    </div>

    <div>
      <label for="country_code">Country Code: </label>
      <input
        id="country_code"
        v-model="payload.country_code"
        type="text"
        required
      />
    </div>

    <div>
      <label for="phone_number">Phone Number: </label>
      <input
        id="phone_number"
        v-model="payload.phone_number"
        type="text"
        required
      />
    </div>

    <div>
      <label for="password">Password: </label>
      <input
        id="password"
        v-model="payload.password"
        type="password"
        required
      />
    </div>

    <hr />
    <button type="submit">Register</button>
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
        if (setMeta)
          setMeta(t('register.meta.title'), t('register.meta.description'))
      },
      { immediate: true }
    )
    /*************** END ****************
     ************************************/

    const payload = reactive({
      country_code: '',
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      phone_number: ''
    })

    const register = () => {
      store
        .dispatch('auth/REGISTER', payload)
        .then(() => router.push('/dashboard'))
        .catch((err) => console.log(err.message))
    }

    return { payload, register }
  }
})
</script>
