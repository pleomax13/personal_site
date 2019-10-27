<template>
  <div class="container-icon " :class="{change: showSidebar}" @click="toggle">
    <div class="bar1" />
    <div class="bar2" />
    <div class="bar3" />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState({
      showSidebar: state => state.sidebar.showSidebar
    })
  },
  methods: {
    ...mapMutations({
      toggleSidebar: 'sidebar/SET_TOGGLE_SIDEBAR'
    }),
    toggle () {
      this.toggleSidebar(!this.showSidebar)
    }
  }
}
</script>

<style lang="scss" scoped>
.container-icon {
  cursor: pointer;
  width: 3.5rem;
  background: white;
  border-radius: .5rem;
  transition: 0.4s;

  &.change {
    background: transparent;

    .bar1, .bar2, .bar3 {
      background: white;
    }
  }
}

.bar1, .bar2, .bar3 {
  width: 2.5rem;
  height: .3rem;
  background-color: black;
  margin: .5rem auto;
  border-radius: .3rem;
  transition: 0.4s;
}

.change .bar1 {
  transform: rotate(-45deg) translate(-.5rem, .6rem);
}

.change .bar2 {opacity: 0;}

.change .bar3 {
  transform: rotate(45deg) translate(-.5rem, -.6rem);
}
</style>
