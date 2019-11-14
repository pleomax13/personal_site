<template>
  <div class="btn-up" @click="scroll">
    <img src="~/assets/imgs/icons/up.svg" alt="" class="img">
  </div>
</template>

<script>
export default {
  methods: {
    scroll () {
      window.scrollTo({
        behavior: 'smooth',
        top: 0
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~/assets/style/media_mixin.scss";
  @import "~/assets/style/var.scss";

  .btn-up {
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    z-index: 9999;
    background: $main-grey;
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: .4;
    cursor: pointer;
    transition: all ease-in-out .2s;

    &:hover {
      opacity: .9;
    }

    @include tablet {
      bottom: 3rem;
      right: 3rem;
    }
  }

  .img {
    width: 60%;
    height: auto;
    pointer-events: none;
  }
</style>
