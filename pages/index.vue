<template>
  <div
    class="splash wp-page"
  >
    <div
      class="splash__hero"
    >
      <vue-particles
        color="#dedede"
        :particleOpacity="0.5"
        :particlesNumber="45"
        shapeType="circle"
        :particleSize="6"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.5"
        :linesDistance="150"
        :moveSpeed="1"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      />
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
  @include padding-y(map-get($size, lg));

  .splash__hero {
    #particles-js {
      @include position(fixed, 50%, unset, unset, 50%);
      transform: translate(-50%, -50%);
      width: 100vw;
      height: 100vh;
      z-index: -1;
    }
    .container {
      @include boxed($boxed-max-width: 1080px);

      &__inner {

        .column {

          > div {

            .content {
              @include grid-layout($grid-cols: 1, $grid-fr: 1fr);
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
        }
      }
    }
  }
}

</style>
