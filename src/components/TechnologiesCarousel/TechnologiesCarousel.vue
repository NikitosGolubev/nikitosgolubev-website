<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Glide from '@glidejs/glide'

import JAVASCRIPT_LOGO from '~/assets/images/logos/javascript-logo.svg'
import TYPESCRIPT_LOGO from '~/assets/images/logos/typescript-logo.svg'
import VUE_LOGO from '~/assets/images/logos/vue-logo.svg'
import FIREBASE_LOGO from '~/assets/images/logos/firebase-logo.svg'
import GRAPHQL_LOGO from '~/assets/images/logos/graphql-logo.svg'
import FIGMA_LOGO from '~/assets/images/logos/figma-logo.svg'
import GIT_LOGO from '~/assets/images/logos/git-logo.svg'
import WEBPACK_LOGO from '~/assets/images/logos/webpack-logo.svg'
import VUETIFY_LOGO from '~/assets/images/logos/vuetify-logo.svg'

const root = ref(null)

const technologiesLogos = [
  JAVASCRIPT_LOGO,
  TYPESCRIPT_LOGO,
  VUE_LOGO,
  FIREBASE_LOGO,
  GRAPHQL_LOGO,
  WEBPACK_LOGO,
  GIT_LOGO,
  FIGMA_LOGO,
  VUETIFY_LOGO,
]

onMounted(() => {
  const carousel = new Glide(root.value!, {
    type: 'carousel',
    perView: 5,
    gap: 0,
    autoplay: 3000,
    breakpoints: {
      1024: {
        perView: 2,
      },
      600: {
        perView: 1,
      },
    },
  })

  carousel.mount()
})
</script>

<template>
  <div ref="root" class="glide">
    <div class="glide__track" data-glide-el="track">
      <div class="glide__slides">
        <div
          v-for="(logo, index) in technologiesLogos"
          :key="`logo_${index}`"
          class="glide__slide"
        >
          <div class="technology">
            <img class="technology-image" :src="logo" alt="" />
          </div>
        </div>
      </div>
    </div>

    <div data-glide-el="controls">
      <div data-glide-dir="<" class="control-btn btn-prev">
        <font-awesome-icon :icon="['fas', 'caret-left']" />
      </div>
      <div data-glide-dir=">" class="control-btn btn-next">
        <font-awesome-icon :icon="['fas', 'caret-right']" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .glide {
    position: relative;

    &__slide {
      display: flex;
      justify-content: center;
    }
  }

  .technology {
    border-radius: 50%;
    width: 160px;
    height: 160px;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;

    &:hover {
      .technology-image {
        animation: shakeLogo 0.8s linear infinite;
      }
    }
  }

  .technology-image {
    height: 70px;
  }

  .control-btn {
    position: absolute;
    width: 25px;
    height: 25px;
    top: calc(50% - 12.5px);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    user-select: none;
    opacity: 0.5;
    transition: 0.2s all;
    font-size: 13px;

    &:hover {
      opacity: 0.8;
    }
  }

  .btn-prev {
    left: 0;
  }

  .btn-next {
    right: 0;
  }

  @keyframes shakeLogo {
    0% {
      transform: rotate(0deg);
    }

    30% {
      transform: rotate(-20deg);
    }

    70% {
      transform: rotate(20deg);
    }

    100% {
      transform: rotate(0deg);
    }
  }
</style>

<style lang="scss" scoped>
  .dark {
    .technology {
      background: var(--dark-color-2);
    }

    .control-btn {
      background: var(--dark-color-3);

      &:hover {
        background: var(--primary-color);
      }
    }
  }
</style>
