<template>
  <div class="header">
    <app-lang class="z-index" />
    <app-menu class="z-index" />
  </div>
</template>

<script>
import lang from '~/components/lang.vue'
import menu from '~/components/menu'
export default {
  components: {
    'app-menu': menu,
    'app-lang': lang
  }
}
</script>

<style lang="scss" scoped>
  .header {
    width: 100%;
    max-width: 1920px;
    margin: auto;
    padding-bottom: 60px;
    position: relative;
    overflow: hidden;
    background: url('/bg_header.png') no-repeat center;
    background-size: cover;
    background-color: gray;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      top: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
      background: rgba(0, 0, 0, 0.527);
    }

    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      width: 0;
      height: 0;
      border-bottom: 60px solid white;
      border-left: 100vw solid transparent;
      z-index: 1;
    }
  }

  .z-index {
    z-index: 1;
    position: relative;
  }
</style>
