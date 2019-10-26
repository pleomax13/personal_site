<template>
  <div class="header">
    <app-lang class="z-index app-lang" />
    <app-menu
      ref="menu"
      class="z-index app-menu"
      :class="{fix: fixMenu, show: showMenu}"
      :style="{top: fixMenu ? `-${menuSize}px` : ''}"
    />
    <div v-if="fixMenu" class="menu-bg" :style="{height: `${menuSize}px`}" />
    <app-content class="z-index" />
  </div>
</template>

<script>
import lang from '~/components/lang.vue'
import menu from '~/components/menu'
import content from '~/components/header/content'
export default {
  components: {
    'app-menu': menu,
    'app-lang': lang,
    'app-content': content
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
  },
  mounted () {
    this.menuTop = this.$refs.menu.$el.getBoundingClientRect().top
    window.addEventListener('scroll', () => {
      const topHeader = this.$el.getBoundingClientRect().top
      const bottom = this.$refs.menu.$el.getBoundingClientRect().bottom

      if (bottom <= 0 && this.fixMenu === false) {
        this.fixMenu = true
      } else if (topHeader >= -this.menuTop && this.fixMenu === true) {
        this.fixMenu = false
        this.showMenu = false
      }

      if (this.fixMenu === true) {
        this.$nextTick(() => {
          this.showMenu = true
        })
      }
    })
    this.getMenuSize()
    window.addEventListener('resize', () => {
      this.getMenuSize()
    })
  },
  methods: {
    getMenuSize () {
      this.menuSize = this.$refs.menu.$el.getBoundingClientRect().height
    }
  }
}
</script>

<style lang="scss" scoped>
  .header {
    width: 100%;
    max-width: 192rem;
    margin: auto;
    padding: 1rem 0 6rem;
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
      left: 0;
      right: 0;
      border-bottom: 60px solid white;
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
      background-color: rgb(160, 160, 160);
    }

    &.show {
      top: 0 !important;
      left: 0;
      right: 0;
      margin: auto;
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
</style>
