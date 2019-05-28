<template>
  <div class="page home">
    <section
      class="home__hero"
    >
      <img
        src="/img/brand/splashLogo.svg"
        alt="Fantastic CSS"
        height="120px"
      >
    </section>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style lang="scss">

@import 'fantastic-css';

.home {

  &__hero {
    @include min-height(100vh);
    @include grid;
    @include place-content(center);

    img {
      @include max-width(78vw);
    }
  }
}

</style>
