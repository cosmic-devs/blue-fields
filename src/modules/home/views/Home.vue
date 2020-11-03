<template>
  <header>
    <section class="relative">
      <picture>
        <!-- webp -->
        <source
          srcset="../assets/header-img-sm.webp"
          media="(max-width: 767px)"
          type="image/webp"
        />
        <source
          srcset="../assets/header-img.webp"
          media="(min-width: 768px)"
          type="image/webp"
        />
        <!-- png -->
        <source
          srcset="../assets/header-img-sm.png"
          media="(max-width: 767px)"
          type="image/png"
        />
        <source
          srcset="../assets/header-img.png"
          media="(min-width: 768px)"
          type="image/png"
        />
        <img alt="Header universe image" src="../assets/header-img.png" />
      </picture>

      <div class="absolute top-0 w-full h-full">
        <section
          class="container flex flex-col justify-center h-full pb-12 mx-auto sm:items-center sm:flex-row-reverse md:pb-20 lg:max-w-screen-lg lg:pb-32"
        >
          <img
            class="w-40 mx-auto mt-6 sm:w-3/12 sm:mt-0 lg:w-1/3"
            src="../assets/header-logo.svg"
            alt="BlueFields Logo"
          />
          <div class="px-6 text-white sm:w-9/12 sm:px-12 lg:w-2/3">
            <h1
              class="text-3xl leading-snug text-center sm:text-left text-shadow sm:text-4xl"
            >
              Live the teachings <br />
              Be a volunteer
            </h1>
            <div
              class="hidden w-16 h-1 mx-auto my-6 bg-white sm:block sm:ml-0"
            />
            <p
              class="hidden text-base sm:block text-shadow lg:pr-16 lg:text-xl"
            >
              Blue Fields has been created to unite the readers of The Urantia
              Book, in Latin America, who desire to volunteer, in an intelligent
              ministry of the authentic needs of our neighbor, with altruistic
              projects.
            </p>
          </div>
        </section>
      </div>
    </section>
    <p class="px-6 md:w-2/3 sm:hidden">
      Aqui temos um texto descritivo sobre o que é a página... Lorem ipsum dolor
      sit amet, consectetur adipiscing elit. Vivamus dictum fermentum ligula
      gravida feugiat. Fusce molestie at nibh id varius. Nunc suscipit hendrerit
      ex, vel commodo arcu dignissim porttitor. Ut vestibulum dui eu ligula
      vehicula, non rhoncus tortor bibendum. Nullam scelerisque metus placerat
    </p>
  </header>

  <section class="overflow-hidden">
    <!-- Projects section -->
    <projects class="px-10 xl:px-0" />

    <!-- How-to section -->
    <how-to class="px-10 xl:px-0" />

    <!-- Headlines section -->
    <home-headlines class="px-10 xl:px-0" />
  </section>

  <footer-home />

  <p v-for="project in projects" :key="project._id" class="bg-green-500">
    {{ project }}
  </p>
</template>

<script lang="ts">
import { computed, defineComponent, watch, inject } from 'vue'
import { Project } from 'vue-modules'
import { Store, useStore } from 'vuex'
import { useI18n } from 'vue-i18n'
import Projects from '../components/Projects.vue'
import HowTo from '../components/HowTo.vue'
import HomeHeadlines from '../components/Headlines.vue'
import FooterHome from '../components/FooterHome.vue'

export default defineComponent({
  components: { FooterHome, Projects, HowTo, HomeHeadlines },
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

<style scoped>
h1 {
  @apply font-bold font-serif2;
}

a:focus,
a:hover {
  @apply text-blue-500 outline-none;
}

.text-shadow {
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.4), 0 2px 4px rgba(0, 0, 0, 0.4);
}
</style>
