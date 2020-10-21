<template>
  <p v-for="project in projects" :key="project._id" class="bg-green-500">
    {{ project }}
  </p>
</template>

<script lang="ts">
import { computed, defineComponent, watch, inject } from 'vue'
import { Project } from 'vue-modules'
import { Store, useStore } from 'vuex'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  setup() {
    const store: Store<unknown> = useStore()
    const { t, locale } = useI18n()

    /************************************
     *  Set language based page metadata
     ************************************/
    const setMeta:
      | ((title: string, description?: string) => void)
      | undefined = inject('meta')
    watch(
      locale,
      () => {
        if (setMeta) setMeta(t('home.meta.title'), t('home.meta.description'))
      },
      { immediate: true }
    )
    /*************** END ****************
     ************************************/

    let projects = computed(
      () => store.getters['home/GET_PROJECTS'] as Project[]
    )
    if (!projects.value.length) {
      store
        .dispatch('home/ALL_PROJECTS')
        .catch((err) => console.log(err.message))
    }

    return { projects, t }
  }
})
</script>
