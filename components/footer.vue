<template>
  <section />
</template>

<style lang="scss" scoped>
@import "~/assets/style/var.scss";
  section {
    background: url('../assets/imgs/bg_header.jpg') no-repeat center;
    background-size: cover;
    background-color:  $main-grey;
    width: 100%;
    height: 15rem;
    margin: 0 auto;
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      width: 0;
      height: 0;
      left: 0;
      right: 0;
      border-top: 8rem solid white;
      border-right: 100vw solid transparent;
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
</style>
