<script setup lang="ts">
import { defineProps, computed } from 'vue'
import { useVisibilityTrackingOnScroll } from './use'

type ComponentProps = {
  shapeless: boolean
}

const props: ComponentProps = defineProps({
  shapeless: { type: Boolean, default: false },
})

const { NAVBAR_ELEMENT_ID, currentScrollTopPx } = useVisibilityTrackingOnScroll()

const isNavbarFlat = computed(() => currentScrollTopPx.value > 0)
</script>

<template>
  <div class="navbar-wrapper" :class="{ 'shapeless': props.shapeless }">
    <div
      :id="NAVBAR_ELEMENT_ID"
      class="navbar"
      :class="{ 'navbar_flat': isNavbarFlat }"
    >
      <div class="navbar-content">
        <div>
          <SocialsBar />
        </div>
        <div>
          <ui-burger />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  $navbar-height: 120px;

  .navbar-wrapper {
    height: $navbar-height;

    &.shapeless {
      height: 0px;
    }
  }

  .navbar {
    height: $navbar-height;
    background: var(--app-bg-color);
    position: fixed;
    top: 0px;
    width: 100%;
    z-index: 100;
    transition: all .3s ease;
    box-sizing: border-box;
    padding: 0 110px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    &.hide {
      top: -$navbar-height;
    }

    &_flat {
      height: 80px;
    }
  }

  .navbar-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
</style>
