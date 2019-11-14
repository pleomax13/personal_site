<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <div class="resume-content" v-html="content" />
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  head () {
    return {
      title: this.titleHead
    }
  },
  components: {
  },
  computed: {
    ...mapState({
      lang: state => state.currentLang.lang
    }),
    titleHead () {
      if (this.lang === 'en') {
        return `Resume ${this.$t('titleHead')}`
      }

      return `Резюме ${this.$t('titleHead')}`
    },
    content () {
      return this.$t('resume.text')
    },
    title () {
      return this.$t('resume.title')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/style/media_mixin.scss";
@import "~/assets/style/var.scss";
  /deep/ h1 {
    font-size: 3rem;
    text-align: center;
    color: $main-blue;
    margin-bottom: 5rem;
  }

  .resume-content {
    display: grid;
    grid-template-columns: 1fr;
    font-size: 1.8rem;
    grid-template-rows: auto;

    /deep/ *:nth-child(2n+1) {
      -ms-grid-column: 1;
    }

    /deep/ *:nth-child(2n) {
      -ms-grid-column: 2;
    }

    /deep/ *:nth-child(1),
    /deep/ *:nth-child(2) {
      -ms-grid-row: 1;
    }

    /deep/ *:nth-child(3),
    /deep/ *:nth-child(4) {
      -ms-grid-row: 2;
    }

    /deep/ *:nth-child(5),
    /deep/ *:nth-child(6) {
      -ms-grid-row: 3;
    }

    /deep/ *:nth-child(7),
    /deep/ *:nth-child(8) {
      -ms-grid-row: 4;
    }

    /deep/ *:nth-child(9),
    /deep/ *:nth-child(10) {
      -ms-grid-row: 5;
    }

    /deep/ *:nth-child(11),
    /deep/ *:nth-child(12) {
      -ms-grid-row: 6;
    }

    /deep/ *:nth-child(13),
    /deep/ *:nth-child(14) {
      -ms-grid-row: 7;
    }

    /deep/ *:nth-child(15),
    /deep/ *:nth-child(16) {
      -ms-grid-row: 8;
    }

    /deep/ *:nth-child(17),
    /deep/ *:nth-child(18) {
      -ms-grid-row: 9;
    }

    /deep/ *:nth-child(19),
    /deep/ *:nth-child(20) {
      -ms-grid-row: 10;
    }

    /deep/ *:nth-child(21),
    /deep/ *:nth-child(22) {
      -ms-grid-row: 11;
    }

    /deep/ *:nth-child(23),
    /deep/ *:nth-child(24) {
      -ms-grid-row: 12;
    }

    /deep/ *:nth-child(25),
    /deep/ *:nth-child(26) {
      -ms-grid-row: 13;
    }

    /deep/ *:nth-child(27),
    /deep/ *:nth-child(28) {
      -ms-grid-row: 14;
    }

    @include tablet {
      grid-template-columns: .5fr 2fr;
      column-gap: 3rem;
      row-gap: 1.5rem;
    }
  }

  /deep/ p {
    color: $main-blue;
    text-align: center;
    margin-bottom: 1.5rem;
    line-height: 120%;

    @include tablet {
      text-align: right;
      margin-bottom: 0;
    }
  }

  /deep/ span {
    margin-bottom: 3rem;
    line-height: 120%;
    text-align: center;
    display: block;

    @include tablet {
      margin-bottom: 0;
      text-align: left;
    }
  }

  /deep/ a {
    text-decoration: none;
    color: $second-blue;
    margin: 0 auto;
    display: block;

    &:hover {
      text-decoration: underline;
    }

    @include tablet {
      margin-left: 0;
    }
  }
</style>
