<template>
  <div
    class="splash wp-page"
  >
    <div
      class="splash__hero"
    >
      <!-- <no-ssr> -->
      <vue-particles
        color="#dedede"
        :particleOpacity="0.5"
        :particlesNumber="45"
        linesColor="#dedede"
        :lineOpacity="0.5"
        :moveSpeed="1"
      />
      <!-- </no-ssr> -->
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
// import VueParticles from 'vue-particles'

export default {
  // components: {
  //   VueParticles
  // },
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
