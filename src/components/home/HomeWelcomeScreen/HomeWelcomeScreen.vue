<script setup lang="ts">
import { computed } from 'vue'
import type { StylingVariablesMap } from '~/types/common'
import ME_THINKING_IMG from '~/assets/images/photos/me-thinking.png'

const SCROLL_BOTTOM_BUTTON_SIZE_PX = 48

const styleVariables = computed((): StylingVariablesMap => ({
  '--scroll-bottom-btn-half-size': `${SCROLL_BOTTOM_BUTTON_SIZE_PX / 2}px`,
}))
</script>

<template>
  <div class="welcome-screen" :style="styleVariables">
    <div class="brand-presentation">
      <div class="logo">
        <div class="logo-text">
          NikitosGolubev
        </div>
        <div class="logo-bg-decor" />
      </div>

      <div class="brand-skills">
        Front-end Developer | Amature Designer & Writer
      </div>
    </div>

    <div class="scroll-bottom">
      <ScrollBottomButton :size-px="SCROLL_BOTTOM_BUTTON_SIZE_PX" />
    </div>

    <div class="side-decor side-decor_left">
      <div class="side-decor-text side-decor-text_left">
        Fuck doing what you are told
      </div>
    </div>

    <div class="side-decor side-decor_right">
      <div class="side-decor-text side-decor-text_right">
        Act like a two-year old
      </div>
    </div>

    <div class="top-ribbon-decor" />

    <div class="bg-decor" />

    <div class="my-photo-decor">
      <img :src="ME_THINKING_IMG" alt="" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .welcome-screen {
    position: relative;
    height: 100vh;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .brand-presentation {
    z-index: 2;
  }

  $logo-height: 9.5vw;
  $logo-assemetric-ofset: 6%;
  .logo {
    position: relative;
  }

  .logo-text {
    position: relative;
    font-family: var(--alternative-font-regular);
    font-size: $logo-height;
    z-index: 2;
    padding-left: $logo-assemetric-ofset;
    user-select: none;
  }

  .logo-bg-decor {
    position: absolute;
    top: 3%;
    left: -$logo-assemetric-ofset;
    height: $logo-height;
    width: 100%;
  }

  .brand-skills {
    font-size: 2.1vw;
    font-family: var(--main-font-light);
    text-align: center;
  }

  .scroll-bottom {
    position: absolute;
    bottom: 48px;
    left: calc(50% - var(--scroll-bottom-btn-half-size));
    z-index: 2;
  }

  $side-decor-width: 42px;
  .side-decor {
    position: absolute;
    height: 100%;
    top: 0;
    background: var(--app-bg-pair-color);
    width: $side-decor-width;
    box-sizing: border-box;
    z-index: 110;
    display: flex;
    justify-content: center;

    &_left {
      left: 0;
      align-items: flex-end;
      padding-bottom: 36px;
    }

    &_right {
      right: 0;
      align-items: flex-start;
      padding-top: 36px;
    }
  }

  .side-decor-text {
    max-width: $side-decor-width;
    white-space: nowrap;
    text-transform: uppercase;
    letter-spacing: 3px;
    user-select: none;

    &_left {
      transform: rotate(-90deg);
    }

    &_right {
      transform: rotate(90deg);
    }
  }

  .top-ribbon-decor {
    background: var(--primary-color);
    position: absolute;
    height: 250px;
    width: 5px;
    top: 0;
    left: calc(#{$side-decor-width} - 2.5px);
    z-index: 120;
  }

  .bg-decor {
    background: var(--app-bg-pair-color);
    position: absolute;
    bottom: 0;
    right: 0;
    height: 75vh;
    width: 80vw;
  }

  .my-photo-decor {
    position: absolute;
    bottom: -4px;
    right: 0;
    z-index: 120;

    img {
      height: 50vh;
      user-select: none;
    }
  }
</style>

<style lang="scss" scoped>
  .dark {
    .logo-bg-decor {
      background: var(--red-color-2);
    }

    .side-decor-text {
      color: var(--dark-color-3);
    }
  }
</style>
