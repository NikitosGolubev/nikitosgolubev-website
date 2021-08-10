<script setup lang="ts">
import {
  GITHUB_LINK,
  VK_LINK,
  INSTAGRAM_LINK,
  MEDIUM_LINK,
} from '~/config/external-links'
</script>

<template>
  <div class="socials">
    <a :href="GITHUB_LINK" target="_blank" class="socials__item">
      <font-awesome-icon class="social-icon" :icon="['fab', 'github']" />
    </a>

    <a :href="VK_LINK" target="_blank" class="socials__item">
      <font-awesome-icon class="social-icon" :icon="['fab', 'vk']" />
    </a>

    <a :href="INSTAGRAM_LINK" target="_blank" class="socials__item">
      <font-awesome-icon class="social-icon" :icon="['fab', 'instagram']" />
    </a>

    <a :href="MEDIUM_LINK" target="_blank" class="socials__item">
      <font-awesome-icon class="social-icon" :icon="['fab', 'medium-m']" />
    </a>
  </div>
</template>

<style lang="scss" scoped>
  .socials {
    display: flex;

    &__item {
      margin-right: 16px;

      &:last-child {
        margin-right: 0;
      }
    }
  }

  .social-icon {
    color: var(--primary-color);
    font-size: 22px;
    transition: 0.2s all;

    &:hover {
      color: var(--app-text-color);
    }

    &:active {
      opacity: 0.8;
    }
  }
</style>
