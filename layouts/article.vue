<template>
  <section class="layout">
    <div class="header">
      <nuxt-link to="/library" class="link">
        Назад в библиотеку
      </nuxt-link>
    </div>
    <nuxt class="nuxt" />
    <app-footer class="app-footer" />
    <transition name="fade">
      <app-btn-up v-if="showBtn" />
    </transition>
  </section>
</template>

<script>
import footer from '~/components/footer.vue'
import btnUp from '~/components/btnUp'
export default {
  components: {
    'app-btn-up': btnUp,
    'app-footer': footer
  },
  data () {
    return {
      showBtn: false
    }
  },
  mounted () {
    window.addEventListener('scroll', () => {
      const topHeader = this.$el.getBoundingClientRect().top

      if (topHeader < -600) {
        this.showBtn = true
      } else {
        this.showBtn = false
      }
    })
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/style/var.scss";
@import "~/assets/style/media_mixin.scss";
  .header {
    background: url('../assets/imgs/bg_header.jpg') no-repeat center;
    background-size: cover;
    background-color:  $main-grey;
    width: 100%;
    height: 10rem;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    padding: 2rem 1rem;
    margin-bottom: 3rem;

    @include tablet {
      padding: 2rem 3rem;
    }

    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      width: 0;
      height: 0;
      left: 0;
      right: 0;
      border-bottom: 8rem solid white;
      border-left: 100vw solid transparent;
      z-index: 1;
    }

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
      background: rgba(0, 0, 0, 0.6);
    }
  }

  .link {
    color: white;
    text-decoration: none;
    font-size: 2rem;
    z-index: 2;
    position: relative;

    &::after {
      display: block;
      content: "";
      height: .15rem;
      width: 0%;
      transition: width .2s ease-in-out;
      background-color: white;
      position: absolute;
      z-index: 2;
    }

    &:hover{
      &::after {
        width: 100%;
      }
    }
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
