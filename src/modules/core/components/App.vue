<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,900;1,700&display=swap');

#app {
  font-family: 'Roboto', sans-serif;
  max-width: 1920px;
  min-width: 320px;
  margin: auto;
  position: relative;
}

/*****************************************
   Remove highlight blue color on buttons
   when tapped, only for mobile devices
*****************************************/
label,
input,
button {
  user-select: none;
}
</style>
