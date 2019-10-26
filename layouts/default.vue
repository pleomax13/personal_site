<template>
  <div class="layout" :lang="lang">
    <app-header class="app-header" />
    <transition name="fade">
      <nuxt class="nuxt" />
    </transition>
    <app-footer class="app-footer" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import header from '~/components/header.vue'
import footer from '~/components/footer.vue'
export default {
  components: {
    'app-header': header,
    'app-footer': footer
  },
  computed: {
    ...mapState({
      lang: state => state.currentLang.lang
    })
  }
}
</script>

<style lang="scss" scoped>
  .app-header {
    margin-bottom: 3rem;
  }

  .nuxt {
    width: 100%;
    max-width: 192rem;
    margin: 0 auto;
  }

  .app-footer {
    margin-top: 4rem;
  }

  .layout {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
