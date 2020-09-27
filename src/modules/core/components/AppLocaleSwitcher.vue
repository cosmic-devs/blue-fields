<template>
  <form>
    <label class="sr-only" for="lang-switcher">{{ t('language') }}</label>
    <select id="lang-switcher" v-model="locale">
      <option value="en">EN</option>
      <option value="es">ES</option>
      <option value="pt">PT</option>
    </select>
  </form>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'AppLocaleSwitcher',
  setup() {
    const { locale, t } = useI18n()

    watch(locale, (value) => {
      document.documentElement.lang = locale.value
      localStorage.setItem('language', value)
    })

    return { locale, t }
  }
})
</script>
