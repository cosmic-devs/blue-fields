<template>
  <p v-if="isGuest">{{ t('dashboard.validation') }}</p>
  <template v-else>
    <project-form />
    <h1>{{ t('dashboard.projects') }}</h1>
    <ul class="bg-green-500">
      <li v-for="project in userProjects" :key="project._id">{{ project }}</li>
    </ul>
  </template>
</template>

<script lang="ts">
import { computed, defineComponent, inject, watch } from 'vue'
import { Project, User } from 'vue-modules'
import { Store, useStore } from 'vuex'
import { UserStatus } from '../../../enums'
import { useI18n } from 'vue-i18n'
import ProjectForm from '../components/ProjectFormAdd.vue'

export default defineComponent({
  components: { ProjectForm },
  setup() {
    const store: Store<unknown> = useStore()
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
        if (setMeta) setMeta(t('dashboard.meta.title'))
      },
      { immediate: true }
    )
    /*************** END ****************
     ************************************/

    const userProjects = computed(
      () => store.getters['auth/USER_PROJECTS'] as Project[]
    )

    const isGuest = computed(() =>
      (store.getters['auth/ME'] as User).status.match(UserStatus.GUEST)
    )

    return { t, isGuest, userProjects }
  }
})
</script>
