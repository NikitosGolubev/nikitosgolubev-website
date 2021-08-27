<script setup lang="ts">
import { defineProps, computed, defineEmits, ref } from 'vue'
import { Mode, Theme, Size } from './types'
import type { StylingVariablesMap } from '~/types/common'

type ComponentProps = {
  mode: Mode
  theme: Theme
  size: Size
  customization: Record<string, string>
  disabled: boolean
}

const props: ComponentProps = defineProps({
  mode: { type: String, default: Mode.Default },
  theme: { type: String, default: Theme.Default },
  size: { type: String, default: Size.Medium },
  customization: { type: Object, default: () => ({}) },
  disabled: { type: Boolean, default: false },
})

const emit = defineEmits(['click'])

const root = ref(null)

const styleVariables = computed((): StylingVariablesMap => {
  const themeSettings: Record<string, string> = {}

  Object.keys(props.customization).forEach((key) => {
    themeSettings[`--${key}`] = props.customization[key]
  })

  return {
    ...themeSettings,
  }
})

const modeClassName = computed(() => {
  return `mode-${props.mode}-btn`
})

const themeClassName = computed(() => {
  return `theme-${props.theme}`
})

function onClick(): void {
  const button = root.value as unknown as HTMLButtonElement
  button.blur()
  if (!props.disabled) emit('click')
}
</script>

<template>
  <div
    ref="root"
    class="btn"
    :class="[modeClassName, themeClassName, props.size, {'disabled': props.disabled}]"
    :style="styleVariables"
    :tabindex="props.disabled ? -1 : 0"
    @click="onClick"
    @keyup.enter="onClick"
  >
    <slot />
  </div>
</template>

<style lang="scss" scoped>
  .btn {
    box-sizing: border-box;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    min-width: var(--min-width, auto);

    &:not(.disabled) {
      cursor: pointer;
    }

    &.disabled {
      cursor: not-allowed;
    }

    &.small {
      font-size: var(--font-size, 12px);
      height: var(--height, 24px);
      line-height: var(--height, 24px);
    }

    &.medium {
      height: var(--height, 42px);
      line-height: var(--height, 42px);
    }

    &.large {
      font-size: var(--font-size, 110%);
      height: var(--height, 54px);
      line-height: var(--height, 54px);
    }
  }

  .mode-default-btn {
    border-radius: var(--border-radius, 20px);
    border: var(--border-thickness, 1px) var(--border-type, solid);
    transition: 0.4s all;

    &.small {
      padding: 0 var(--horizontal-offset, 6px);
    }

    &.medium {
      padding: 0 var(--horizontal-offset, 16px);
    }

    &.large {
      border: var(--border-thickness, 2px) var(--border-type, solid);
      padding: 0 var(--horizontal-offset, 20px);
    }

    &:not(.disabled).theme-default {
      color: var(--text-color, var(--primary-color));
      border-color: var(--border-color, var(--primary-color));
    }
  }
</style>

<style lang="scss" scoped>
  .dark {
    .mode-default-btn {
      &.disabled {
        color: var(--disabled-text-color, var(--dark-color-3));
        border-color: var(--disabled-border-color, var(--dark-color-3));
        background: var(--disabled-background-color, rgba($dark-color-3, 0.12));
      }

      &:not(.disabled).theme-default {
        &:hover, &:focus {
          background: var(--hover-bg-color, rgba($red-color-1, 0.35));
        }

        &:active {
          color: var(--active-text-color, var(--white-color))
        }
      }
    }
  }
</style>
