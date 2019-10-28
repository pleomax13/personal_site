<template>
  <div class="header">
    <transition name="fade">
      <div v-if="showModal" class="modal">
        <img src="~/assets/imgs/saveliev_big.jpg" alt="" class="photo-big">
        <div class="bg" @click="toggleModal(false)" />
        <img src="~/assets/imgs/icons/close.svg" alt="Закрыть" class="close" title="Закрыть" @click="toggleModal(false)">
      </div>
    </transition>
    <div class="sidebar" :class="{show: showSidebar}">
      <app-lang class="z-index app-lang" />
      <app-menu
        ref="menu"
        class="z-index app-menu"
      />
    </div>
    <app-menu-icon class="app-menu-icon" />
    <app-content class="z-index" />
    <transition name="fade">
      <app-btn-up v-if="showBtn" />
    </transition>
  </div>
</template>

<script>
import lang from '~/components/lang.vue'
import menu from '~/components/menu'
import btnUp from '~/components/btnUp'
import content from '~/components/header/content'
import menuIcon from '~/components/header/menuIcon'
import { mapState, mapMutations } from 'vuex'

export default {
  components: {
    'app-menu': menu,
    'app-lang': lang,
    'app-content': content,
    'app-btn-up': btnUp,
    'app-menu-icon': menuIcon
  },
  data () {
    return {
      showBtn: false
    }
  },
  computed: {
    ...mapState({
      showModal: state => state.modal.showModal,
      showSidebar: state => state.sidebar.showSidebar
    })
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
  },
  methods: {
    ...mapMutations({
      toggleModal: 'modal/SET_TOGGLE_MODAL'
    })
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/style/media_mixin.scss";
@import "~/assets/style/var.scss";

  .sidebar {
    height: 100vh;
    width: 100%;
    max-width: 32rem;
    background: url('../assets/imgs/bg_header.jpg') no-repeat center;
    background-color: $main-grey;
    background-size: cover;
    position: fixed;
    z-index: 9999;
    top: 0;
    left: -32rem;
    right: 0;
    bottom: 0;
    padding-top: 1rem;
    transition: left .4s;
    overflow-y: auto;

    &.show {
      left: 0;
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
      background-color: rgba(0, 0, 0, 0.7);
    }
  }

  .app-menu-icon {
    position: fixed;
    right: 1rem;
    top: 1rem;
    z-index: 99999;
  }

  .header {
    width: 100%;
    max-width: 192rem;
    margin: 0 auto;
    padding: 1rem 0 8rem;
    position: relative;
    overflow: hidden;
    background: url('../assets/imgs/bg_header.jpg') no-repeat center;
    background-size: cover;
    background-color: $main-grey;

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
  }

  .z-index {
    z-index: 1;
    position: relative;
  }

  .app-menu {
    margin-bottom: 3rem;
    width: 100%;
    max-width: 192rem;
    transition: background-color ease-in-out .3s, top ease-in-out .5s;
    z-index: 999;
    background-color: transparent;

    &.fix {
      position: fixed;
      background-color: $main-grey;
    }

    &.show {
      top: 0 !important;
      left: 0;
      right: 0;
      margin: auto;
    }
  }

  .app-lang {
    margin-bottom: 3rem;
  }

  .menu-bg {
    width: 100%;
    margin-bottom: 3rem;
  }

  .modal {
    position: fixed;
    margin: auto;
    top: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.644);
    right: 0;
    z-index: 9999999;

    .bg {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      z-index: -1;
      cursor: pointer;
    }

    .photo-big {
      height: 75vh;
      width: auto;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      border-radius: .5rem;
      z-index: 2;

      @include mobile_portrait {
        height: auto;
        width: 60vw;
        max-width: 36rem;
      }

      @include tablet_portrait {
        height: auto;
        width: 60vw;
        max-width: 36rem;
      }
    }

    .close {
      position: absolute;
      right: 3rem;
      top: 3rem;
      width: 2rem;
      height: 2rem;
      z-index: 2;
      cursor: pointer;
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
