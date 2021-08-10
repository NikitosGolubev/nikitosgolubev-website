<script setup lang="ts">
import { defineProps, computed } from 'vue'
import type { StylingVariablesMap } from '~/types/common'

type ComponentProps = {
  sizePx: number
}

const props: ComponentProps = defineProps({
  sizePx: { type: Number, default: 32 },
})

const styleVariables = computed((): StylingVariablesMap => ({
  '--size': `${props.sizePx}px`,
  '--font-size': `${props.sizePx * 0.66}px`,
  '--shadow-x-offset': `-${props.sizePx * 0.125}px`,
  '--shadow-y-offset': `-${props.sizePx * 0.0625}px`,
  '--shadow-expand': `${props.sizePx * 0.0625}px`,
}))
</script>

<template>
  <div class="btn" :style="styleVariables">
    <font-awesome-icon class="social-icon" :icon="['fas', 'chevron-down']" />
  </div>
</template>

<style lang="scss" scoped>
  .btn {
    --shadow-color: transparent;
    color: var(--primary-color);
    border-radius: 50%;
    display: inline-flex;
    font-size: var(--font-size);
    width: var(--size);
    height: var(--size);
    justify-content: center;
    align-items: center;
    transition: 0.4s all;
    cursor: pointer;
    box-shadow: var(--shadow-x-offset) var(--shadow-y-offset) 0px var(--shadow-expand) var(--shadow-color);
    user-select: none;

    &:hover {
      box-shadow: 0px 0px 0px 0px var(--shadow-color);
      color: var(--app-text-color);
    }

    &:active {
      opacity: 0.8;
    }
  }
</style>

<style lang="scss" scoped>
  .dark {
    .btn {
      background: var(--white-color);
      --shadow-color: var(--red-color-1);

      &:hover {
        background: var(--red-color-1);
      }
    }
  }
</style>
