<script setup lang="ts">
import ME_DEVELOPER_IMG from '~/assets/images/photos/me-in-robe.png'
</script>

<template>
  <div class="developer-block">
    <div class="developer-block__image">
      <div class="image-presentation">
        <div class="image-border-decor" />
        <img class="image" :src="ME_DEVELOPER_IMG" alt="" />
        <div class="image-bg-decor" />
        <div class="image-text">
          Frontend
          <br />
          Developer
        </div>
      </div>
    </div>

    <div class="developer-description">
      <div>
        <span class="text-emphasis developer-text">
          Lorem Ipsum is simply dummy text of the
          printing and typesetting industry. Lorem
          Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an
          unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </span>
      </div>

      <div class="developer-description__action">
        <router-link to="/">
          <ui-button size="large">
            View my professional journey
          </ui-button>
        </router-link>
      </div>
    </div>

    <div class="central-ribbon-decoration" />
    <div class="vertical-ribbon-decoration" />
  </div>
</template>

<style lang="scss" scoped>
  .developer-block {
    padding: 110px var(--app-horizontal-offset);
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    &__image {
      margin-right: calc(5.3vw + 72px);
    }
  }

  .image-presentation {
    position: relative;
    min-width: 32.6vw;
    min-height: 30.6vw;
    box-sizing: border-box;
    user-select: none;
    z-index: 2;
  }

  .image-border-decor {
    position: absolute;
    top: 0;
    left: 0;
    border: 0.26vw solid;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    z-index: 3;
  }

  .image {
    position: absolute;
    z-index: 2;
    bottom: -3.26vw;
    right: -1.17vw;
    width: 30.64vw;
  }

  .image-bg-decor {
    position: absolute;
    width: 35.86vw;
    height: 28.43vw;
    top: 1.96vw;
    left: 1.96vw;
  }

  .image-text {
    position: absolute;
    z-index: 4;
    text-transform: uppercase;
    font-family: var(--alternative-font-regular);
    font-size: 5.87vw;
    line-height: 0.9;
    letter-spacing: 0.26vw;
    bottom: 0.56vw;
    left: -2.48vw;
  }

  .developer-description {
    text-align: right;
    z-index: 2;

    &__action {
      margin-top: 16px;
    }
  }

  .developer-text {
    font-size: 1.85vw;
  }

  .central-ribbon-decoration {
    background: var(--app-bg-pair-color);
    position: absolute;
    left: 0;
    top: calc(50% - 6vw);
    width: 100%;
    height: 12vw;
  }

  .vertical-ribbon-decoration {
    background: var(--primary-color);
    position: absolute;
    right: 42px;
    top: calc(50% - 9vw);
    width: 8px;
    height: 18vw;
  }
</style>

<style lang="scss" scoped>
  .dark {
    .image-bg-decor {
      background: var(--red-color-1);
    }

    .image-border-decor {
      border-color: var(--white-color);
    }
  }
</style>
