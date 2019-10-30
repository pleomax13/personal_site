<template>
  <div class="layout" :lang="lang">
    <!-- <app-header class="app-header" /> -->
    <component :is="headerComponent" class="app-header" />
    <transition name="fade">
      <nuxt class="nuxt" />
    </transition>
    <app-footer class="app-footer" />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import footer from '~/components/footer.vue'
import headerDesktop from '~/components/headerDesktop.vue'
import headerMobile from '~/components/headerMobile.vue'
export default {
  components: {
    'app-footer': footer
  },
  data () {
    return {
      // device: 'mobile'
    }
  },
  computed: {
    ...mapState({
      lang: state => state.currentLang.lang,
      device: state => state.device.device
    }),
    headerComponent () {
      if (this.device === 'desktop') {
        return headerDesktop
      } else {
        return headerMobile
      }
    }
  },
  mounted () {
    this.setDevice()

    window.addEventListener('resize', () => {
      this.setDevice()
    })
  },
  methods: {
    ...mapMutations({
      setCurrentDevice: 'device/SET_DEVICE'
    }),
    setDevice () {
      if (process.client) {
        const width = document.documentElement.clientWidth

        if (width >= 1280) {
          this.setCurrentDevice('desktop')
        } else if (width >= 768) {
          this.setCurrentDevice('tablet')
        } else {
          this.setCurrentDevice('mobile')
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/style/media_mixin.scss";
  .app-header {
    margin-bottom: 3rem;
  }

  .nuxt {
    width: 100%;
    max-width: 192rem;
    margin: 0 auto;
    padding: 0 1rem;

   @include tablet {
     padding: 0 3rem;
   }
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
