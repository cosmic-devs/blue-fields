<template>
  <i class="inline-flex items-center justify-center" role="img">
    <svg
      class="w-6 h-6"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <component :is="icon" v-if="icon" />
    </svg>
  </i>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue'

export default defineComponent({
  name: 'Icon',
  props: {
    type: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const icon = defineAsyncComponent(
      () => import('../assets/icons/' + props.type + '.vue')
    )

    return { icon }
  }
})
</script>
