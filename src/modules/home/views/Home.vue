<template>
  <img alt="Vue logo" src="../assets/logo.png" />
  <hello-world msg="Hello Vue 3.0 + Vite" />
  <button
    class="px-4 py-2 m-2 bg-red-500 rounded-lg shadow-lg"
    @click="add(project)"
  >
    {{ t('add_project') }}
  </button>
  <p v-for="project in projects" :key="project.id" class="bg-green-500">
    {{ project }}
  </p>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, watch, inject } from 'vue'
import { Location, Project, User } from 'vue-modules'
import { Store, useStore } from 'vuex'
import { useI18n } from 'vue-i18n'
import HelloWorld from '../components/HelloWorld.vue'

export default defineComponent({
  components: { HelloWorld },
  setup() {
    const store: Store<unknown> = useStore()
    const setMeta = inject('meta')
    const { t, locale } = useI18n()

    watch(
      locale,
      () => {
        setMeta(t('home.title'), t('home.description'))
      },
      { immediate: true }
    )

    const user: User = {
      applications: [],
      approved: false,
      country_code: '',
      email: '',
      email_verified: false,
      first_name: '',
      image: '',
      last_name: '',
      phone_number: '',
      positions: [],
      projects: [],
      status: 1
    }

    const location: Location = {
      latitude: 1,
      longitude: 1,
      address: ''
    }

    const project: Project = reactive({
      approved: false,
      creator: user,
      description: '',
      end: '',
      id: 0,
      image: '',
      location: location,
      positions: [],
      status: 1,
      start: '',
      title: '',
      type: 1
    } as Project)

    const add = (project: Project) =>
      store.dispatch('home/ADD_PROJECT', project)
    const projects = computed(() => store.getters['home/GET_PROJECTS'])

    return { add, project, projects, t }
  }
})
</script>
