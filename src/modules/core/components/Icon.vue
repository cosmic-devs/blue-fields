<template>
  <i class="inline-flex items-center justify-center" role="img">
    <component :is="icon" v-if="icon" />
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
