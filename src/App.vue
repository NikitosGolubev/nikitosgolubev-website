<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { APP_THEME } from '~/features/app-theme'

// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'Vitesse',
  meta: [
    { name: 'description', content: 'Opinionated Vite Starter Template' },
  ],
})

</script>

<template>
  <div :class="APP_THEME">
    <div class="app">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
  @import '~/assets/scss/global.scss';
</style>

<style scoped lang="scss">
  .app {
    min-height: 100vh;
    background: var(--app-bg-color);
    color: var(--app-text-color);
  }
</style>
