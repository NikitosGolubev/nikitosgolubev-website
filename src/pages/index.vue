<script setup lang="ts">
</script>

<template>
  <div class="home">
    <div>
      <HomeWelcomeScreen />
    </div>

    <div class="home__developer-presentation">
      <HomeDeveloperPresentation />
    </div>

    <div class="home__developer-details">
      <HomeDeveloperDetails />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .home {
    &__developer-presentation {
      margin-top: 110px;
    }

    &__developer-details {
      margin-top: 140px;
    }
  }
</style>

<route lang="yaml">
meta:
  layout: home
</route>
