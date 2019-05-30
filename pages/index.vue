<template>
  <div class="page splash">
    <div
      class="splash wp-page"
    >
      <div
        class="splash__hero"
      >
        <Sections
          v-if="wpData"
          :data="wpData"
        />
      </div>
    </div>
    <!-- <section
      class="splash__hero"
    >
    <h1
      class="splash__hero__heading"
    >
      <span class="splash__hero__heading__title">Fantastic CSS</span>
      <img
        src="/img/brand/fantastic-css-logo.png"
        alt="Fantastic CSS"
        height="75px"
        class="splash__hero__heading__image"
      >
    </h1>
    <p
      class="splash__hero__subtitle"
    >
      Universal and scalable SCSS framework.
    </p>
    </section> -->
  </div>
</template>

<script>

import loadSections from '@vue-wordpress/core/mixins/loadSections'
import { FetchHookTypes } from '@vue-wordpress/core/types'

export default {
  mixins: [loadSections('start', FetchHookTypes.AsyncData)]
}
</script>

<style lang="scss">

@import 'fantastic-css';

.splash {

  &__hero {
    @include min-height(100vh);
    @include grid;
    @include place-content(center);
    @include text-align(center);

    &__heading {
      @include max-width(78vw);

      &__title {
        @include hide;
      }

      &__image {
        @include object-fit(contain);
      }
    }

    &__subtitle {
      @include margin-top(map-get($size, xs));
      @include font-size(calc(1.2 * #{map-get($size, xs)}));
      @include opacity(.6);
    }
  }
}

</style>
