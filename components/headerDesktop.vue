<template>
  <div class="header-container">
    <div class="header">
      <transition name="fade">
        <div v-if="showModal" class="modal">
          <img src="~/assets/imgs/saveliev_big.jpg" alt="" class="photo-big">
          <div class="bg" @click="toggleModal(false)" />
          <img src="~/assets/imgs/icons/close.svg" alt="Закрыть" class="close" title="Закрыть" @click="toggleModal(false)">
        </div>
      </transition>
      <app-lang class="z-index app-lang" />
      <app-menu
        ref="menu"
        class="z-index app-menu"
        :class="{fix: fixMenu, show: showMenu}"
        :style="{top: fixMenu ? `-${menuSize}px` : ''}"
      />
      <div v-if="fixMenu" class="menu-bg" :style="{height: `${menuSize}px`}" />
      <app-content class="z-index" />
      <transition name="fade">
        <app-btn-up v-if="showMenu" />
      </transition>
    </div>
  </div>
</template>

<script>
import lang from '~/components/lang.vue'
import menu from '~/components/menu'
import btnUp from '~/components/btnUp'
import content from '~/components/header/content'
import { mapState, mapMutations } from 'vuex'

export default {
  components: {
    'app-menu': menu,
    'app-lang': lang,
    'app-content': content,
    'app-btn-up': btnUp
  },
  data () {
    return {
      fixMenu: false,
      menuSize: 0,
      menuTop: 0,
      showMenu: false
    }
  },
  computed: {
    ...mapState({
      showModal: state => state.modal.showModal
    })
  },
  mounted () {
    this.menuEl = this.$el.querySelector('.app-menu')
    this.menuTop = this.menuEl.getBoundingClientRect().top
    window.addEventListener('scroll', () => {
      const topHeader = this.$el.getBoundingClientRect().top
      const bottom = this.menuEl.getBoundingClientRect().bottom

      if (bottom <= 0 && this.fixMenu === false) {
        this.fixMenu = true
      } else if (topHeader >= -Math.abs(this.menuTop) && this.fixMenu === true) {
        this.fixMenu = false
        this.showMenu = false
      }

      if (this.fixMenu === true) {
        this.$nextTick(() => {
          setTimeout(() => {
            this.showMenu = true
          }, 0)
        })
      }
    })
    this.getMenuSize()
    window.addEventListener('resize', () => {
      this.getMenuSize()
    })
  },
  methods: {
    ...mapMutations({
      toggleModal: 'modal/SET_TOGGLE_MODAL'
    }),
    getMenuSize () {
      this.menuSize = this.menuEl.getBoundingClientRect().height
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~/assets/style/var.scss";
  @import "~/assets/style/media_mixin.scss";
  .header-container {
    background: url('../assets/imgs/bg_header.jpg') no-repeat center;
    background-size: cover;
    background-color: $main-grey;
    position: relative;
    overflow: hidden;

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
  .header {
    width: 100%;
    max-width: 192rem;
    margin: 0 auto;
    padding: 1rem 0 8rem;
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
    position: relative;

    &.fix {
      position: fixed;
    }

    &.show {
      top: 0 !important;
      left: 0;
      right: 0;
      margin: auto;
    }
    &.fix,
    &.show {
      &::after {
        content: '';
        position: absolute;
        left: -100%;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: $main-grey;
        background: url('../assets/imgs/bg_header.jpg') no-repeat center;
        width: 500%;
        background-size: cover;
        z-index: -2;
      }

      &::before {
        content: '';
        position: absolute;
        bottom: 0;
        top: 0;
        left: -100%;
        right: 0;
        width: 500%;
        height: 100%;
        z-index: -1;
        background-color: rgba(0, 0, 0, 0.6);
      }
    }
  }

  .app-lang {
    margin-bottom: 1rem;
    height: 2.5rem;
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
      height: auto;
      width: 60vw;
      max-width: 45rem;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      border-radius: .5rem;
      z-index: 2;
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
