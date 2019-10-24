<template>
  <div class="header">
    <app-menu />
  </div>
</template>

<script>
import menu from '~/components/menu'
export default {
  components: {
    'app-menu': menu
  }
}
</script>

<style lang="scss" scoped>
  .header {
    width: 100%;
    max-width: 1920px;
    margin: auto;
    // background: blue;
  }
</style>
