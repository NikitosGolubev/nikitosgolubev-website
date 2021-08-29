<script setup lang="ts">
</script>

<template>
  <div class="section">
    <div>
      <TechnologiesCarousel />
    </div>

    <div class="section__quote">
      <div class="quote">
        <span class="highlight">Constant desire to learn, pr</span>actise, discover and<br />
        endure some sort of pain which you<br />
        accept - that is passion.
      </div>
    </div>

    <div class="section__decoration-divider">
      <ui-brand-divider />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .section {
    padding: 0 var(--app-horizontal-offset);

    &__quote {
      margin-top: 80px;
    }

    &__decoration-divider {
      margin-top: 80px;
      user-select: none;
    }
  }

  .quote {
    text-align: center;
    font-size: 3.2vw;
    font-family: var(--main-font-light);
    color: var(--primary-color);
    max-width: 1000px;
    line-height: 1.3;
    margin: auto;
  }
</style>
