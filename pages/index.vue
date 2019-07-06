<template>
  <div
    class="start wp-page"
  >
    <no-ssr>
      <vue-particles
        color="#dedede"
        :particleOpacity="0.5"
        :particlesNumber="45"
        linesColor="#dedede"
        :lineOpacity="0.5"
        :moveSpeed="1"
      />
    </no-ssr>
    <Sections
      v-if="start"
      :data="start"
    />
  </div>
</template>

<script>

import wpData from '@vue-wordpress/core/mixins/wpData'
import { FetchHookTypes } from '@vue-wordpress/core/types'
import VueParticles from 'vue-particles'

export default {
  components: {
    VueParticles
  },
  mixins: [wpData('start', FetchHookTypes.AsyncData)]
}
</script>

<style lang="scss">

@import 'sxcss';
@import '@sxcss/gutenberg/index.scss';
// @import 'styles/theme/main.scss';

.start {
  @include padding-y(map-deep-get($scale, proportion, lg));

  #particles-js {
    @include position(fixed, 50%, unset, unset, 50%);
    transform: translate(-50%, -50%);
    width: 100vw;
    height: 100vh;
    z-index: -1;
  }
  .container {
    @include boxed($max-width: 1080px);

    &__inner {

      .column {

        > div {

          .content {
            @include grid-layout($grid-cols: 1, $grid-cols-fr: 1fr);
          }

          h2 {
            @include font-size(2.7rem);
            &::after {
              content: '';
              @include position(absolute);
              @include width(100%);
              @include height(map-deep-get($scale, proportion, xs));
              // @include border-color(map-get($theme-colors, fantastic-violet));
            }
          }

          p, li {
            @include font-weight(map-deep-get($font, weight, medium));
            @include margin(auto);
            @include max-width(70rem);
            @include margin(auto);
            code {
              background: #f0f0f0;
              padding: .3rem;
              color: red;
            }
          }

          ol {
            @include margin-x(auto !important);
            > li {
              @include margin-y(map-deep-get($scale, proportion, xs));
            }
            ol {
              @include padding-x(map-deep-get($scale, proportion, md) !important);
            }
          }
        }
      }
    }
  }
}

</style>
