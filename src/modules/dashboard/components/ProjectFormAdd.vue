<template>
  <form
    class="relative w-full max-w-4xl pb-32 mx-auto bg-white rounded-lg shadow-xl sm:pb-12 2xl:max-w-6xl"
    @submit.prevent="submit"
  >
    <header class="p-5 pb-10 text-center bg-teal-500 rounded-t-lg lg:text-left">
      <!-- prettier-ignore -->
      <h2
        class="mb-5 text-xl italic font-bold text-white select-none
        md:text-2xl
        lg:mb-0"
      >
        Create a new project
      </h2>
    </header>
    <!-- First row -->
    <div
      id="wrapper"
      class="px-5 -mt-5 space-y-5 lg:flex lg:space-y-0 lg:space-x-5"
    >
      <div class="z-10 w-full">
        <label class="sr-only" for="title">Title</label>
        <!-- prettier-ignore -->
        <input
          id="title"
          ref="title"
          v-model="projectInput.title"
          type="text"
          placeholder="Title"
          class="w-full px-4 py-2 placeholder-gray-500 border border-gray-600 rounded-md c-scroll-container
          focus:outline-none focus:shadow-outline"
          @input="errors.title = ''"
        />
        <transition name="zoom-fade">
          <p
            v-show="errors.title"
            class="inline-block mt-1 text-xs italic text-gray-600"
          >
            {{ errors.title }}
          </p>
        </transition>
      </div>
    </div>
    <!-- End: First row -->
    <!-- Second row -->
    <div class="flex px-5 mt-5 space-x-5">
      <div class="z-10 w-full">
        <label class="sr-only" for="description">Description</label>
        <!-- prettier-ignore -->
        <textarea
        id="description"
        ref="description"
        v-model="projectInput.description"
        placeholder="Description"
        rows="3"
        class="z-10 w-full px-4 py-2 placeholder-gray-500 border border-gray-600 rounded-md resize-none
        focus:outline-none focus:shadow-outline"
      />
        <transition name="zoom-fade">
          <p
            v-show="errors.description"
            class="inline-block mt-1 text-xs italic text-gray-600"
          >
            {{ errors.description }}
          </p>
        </transition>
      </div>
    </div>
    <!-- End: Second row -->
    <!-- TODO: Abstract button component -->
    <div class="absolute w-full mt-5 text-center">
      <!-- prettier-ignore -->
      <input
        type="button"
        value="RESET"
        class="block w-48 py-4 mx-auto mb-5 text-xl font-black text-white bg-gray-600 rounded-full cursor-pointer
        sm:mx-5 sm:inline
        transition-transform transform duration-300 ease-out active:scale-90
        lg:hover:scale-105 lg:active:scale-100
        focus:outline-none focus:shadow-outline"
        @click="resetForm"
      />
      <!-- prettier-ignore -->
      <button
        type="submit"
        class="relative w-48 py-4 mx-auto mb-5 text-xl font-black text-gray-800 bg-yellow-500 rounded-full
        sm:mx-5 sm:inline
        transition-transform transform duration-300 ease-out active:scale-90
        lg:hover:scale-105 lg:active:scale-100
        focus:outline-none focus:shadow-outline"
        :class="{ 'pointer-events-none select-none': submitted }"
      >
        <transition name="slide-bottom">
          <span :key="submitted" class="absolute inset-x-0">
            {{ message }}
          </span>
        </transition>
        <br />
      </button>
    </div>
    <!-- End: Buttons -->
  </form>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, computed } from 'vue'
import { CreateProjectInput, Location } from 'vue-modules'
import { Store, useStore } from 'vuex'
import { ProjectType } from '../../../enums'

export default defineComponent({
  setup() {
    const store: Store<unknown> = useStore()
    /***************************
     *  Form submission feature
     **************************/
    const location: Location = {
      latitude: 1,
      longitude: 1,
      address: ''
    }

    const addProject = (payload: CreateProjectInput) =>
      store.dispatch('dashboard/ADD_PROJECT', payload)

    const projectInput = reactive({
      title: '',
      description: '',
      location: location,
      type: ProjectType.EPHEMERAL
    } as CreateProjectInput)

    const errors = reactive({
      title: '',
      description: ''
    })

    const submitted = ref(false)

    const message = computed(() => {
      return !submitted.value ? 'CREATE' : 'SUCCESS!'
    })

    const submit: () => void = () => {
      if (!validateForm()) return

      addProject({ ...projectInput })
      resetForm()

      // Show success message
      submitted.value = true
      setTimeout(() => {
        submitted.value = false
      }, 2000)
    }

    const resetForm: () => void = () => {
      // Reset models
      projectInput.title = ''
      projectInput.description = ''

      // Reset errors
      errors.title = ''
      errors.description = ''
    }

    const validateForm: () => boolean = () => {
      // Trim white spaces
      projectInput.title = projectInput.title.trim()
      projectInput.description = projectInput.description.trim()

      const req = 'Complete this field'
      const min = 'Minimum 3 characters'
      const max = 'Maximum 60 characters'

      // Title input validation
      if (!projectInput.title.length) {
        errors.title = req
      } else if (projectInput.title.length < 3) {
        errors.title = min
      } else if (projectInput.title.length > 60) {
        errors.title = max
      }

      // Description input validation
      if (!projectInput.description.length) {
        errors.description = req
      } else if (projectInput.description.length < 3) {
        errors.description = min
      } else if (projectInput.description.length > 60) {
        errors.description = max
      }

      // Check for errors and scroll + focus on input if any
      if (Object.values(errors).find((value) => value.length > 0)) {
        const elementId = Object.keys(errors)[
          Object.values(errors).findIndex((value) => value.length > 0)
        ]
        const element = document.getElementById(elementId) as HTMLElement
        element.focus({ preventScroll: true })

        // Added check to solve test error
        if (element.scrollIntoView)
          element.scrollIntoView({ behavior: 'smooth' })
        return false
      }
      return true
    }
    /********************************
     *  End: Form submission feature
     *******************************/

    return {
      projectInput,
      errors,
      submit,
      resetForm,
      submitted,
      message
    }
  }
})
</script>

<style scoped>
.c-scroll-container {
  scroll-margin: 9rem;
  scroll-padding: 9rem;
}

/********************************
  Remove arrows on number inputs
*********************************/
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
/* Firefox */
input[type='number'] {
  -moz-appearance: textfield;
}

/* purgecss start ignore */
.zoom-fade-enter-from,
.zoom-fade-leave-to {
  @apply transform scale-90 opacity-0;
}
.zoom-fade-leave-active,
.zoom-fade-enter-active {
  @apply transition duration-500;
  transition-timing-function: cubic-bezier(0.35, 0.46, 0.17, 1.3);
}

.slide-bottom-enter-from {
  @apply transform -translate-y-full opacity-0;
}
.slide-bottom-leave-to {
  @apply transform translate-y-full opacity-0;
}

.slide-bottom-leave-active,
.slide-bottom-enter-active {
  @apply transition duration-500;
  transition-timing-function: cubic-bezier(0.35, 0.46, 0.17, 1.3);
}
/* purgecss end ignore */
</style>
