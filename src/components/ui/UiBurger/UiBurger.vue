<script setup lang="ts">
import { defineProps, computed } from 'vue'
import { Mode, Size } from './types'
import type { StylingVariablesMap } from '~/types/common'

type ComponentProps = {
  mode: Mode
  size: Size
  color: string
}

const props: ComponentProps = defineProps({
  mode: { type: String, default: Mode.Default },
  size: { type: String, default: Size.Medium },
  color: { type: String, default: '' },
})

const defaultModeVariables = computed((): StylingVariablesMap => ({
  '--color': props.color || 'var(--primary-color)',
}))

const currentModeVariables = computed((): StylingVariablesMap => {
  const modesStylesMap = {
    [Mode.Default]: defaultModeVariables.value,
  }

  return modesStylesMap[props.mode]
})

const styleVariables = computed((): StylingVariablesMap => ({
  ...currentModeVariables.value,
}))

</script>

<template>
  <div
    class="burger"
    :class="[props.mode, props.size]"
    :style="styleVariables"
  >
    <div class="item item-1" />
    <div class="item item-2" />
    <div class="item item-3" />
  </div>
</template>

<style lang="scss" scoped>
  .burger {
    position: relative;
    cursor: pointer;
  }

  .default {
    transition: 0.2s all;

    .item {
      background: var(--color);
      position: absolute;
      width: 100%;
      transition: 0.2s all;
    }

    &:hover {
      .item-2 {
        left: 0 !important;
      }
    }

    &:active {
      opacity: 0.8;
    }

    .item-1 {
      top: 0;
      left: 0;
    }

    .item-3 {
      bottom: 0;
      left: 0;
    }

    &.small {
      height: 28px;
      width: 36px;

      .item {
        height: 3px;
      }

      .item-2 {
        top: calc(50% - 2px);
        left: 6px;
      }
    }

    &.medium {
      height: 36px;
      width: 42px;

      .item {
        height: 4px;
      }

      .item-2 {
        top: calc(50% - 2px);
        left: 8px;
      }
    }

    &.large {
      height: 42px;
      width: 54px;

      .item {
        height: 5px;
      }

      .item-2 {
        top: calc(50% - 2px);
        left: 10px;
      }
    }
  }
</style>
