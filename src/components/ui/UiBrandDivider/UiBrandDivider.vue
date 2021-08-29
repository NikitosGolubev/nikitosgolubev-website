<script setup lang="ts">

</script>

<template>
  <div class="brand-divider">
    <div
      v-for="index in 150"
      :key="`brand-decor__${index}`"
      class="brand-divider__item"
    >
      NikitosGolubev
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .brand-divider {
    display: flex;
    align-items: center;
    max-width: 100%;
    overflow: hidden;
    font-size: 14px;
    font-weight: bold;

    &__item {
      margin-right: 30px;

      &:first-child {
        margin-left: -30px;
      }
    }
  }
</style>

<style lang="scss" scoped>
  .dark {
    .brand-divider {
      background: var(--dark-color-3);
      color: var(--dark-color-1);
    }
  }
</style>
