<template>
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
    @include width(100vw);
    // @include min-height(100vh);
    min-height: 100vh;
    @include padding-y(map-get($size, lg));
    @include grid;
    @include place-content(center);
    @include text-align(center);

    &__heading {
      @include margin-top(map-get($gap, md));

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

  h2 {
    @include font-size(2rem);
  }

  p {
    @include font-weight(map-get($font-weight, medium));
    @include margin(auto);
    max-width: 70rem;
  }
}

</style>
