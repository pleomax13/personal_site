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

    @include tablet {
      margin-bottom: 0;
      text-align: left;
    }
  }

  /deep/ a {
    text-decoration: none;
    color: $second-blue;
    margin: 0 auto;

    &:hover {
      text-decoration: underline;
    }

    @include tablet {
      margin: 0;
    }
  }
</style>
