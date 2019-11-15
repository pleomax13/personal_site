<template>
  <section v-html="content" />
</template>

<script>
import { mapState } from 'vuex'

export default {
  head () {
    return {
      title: this.titleHead
    }
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState({
      lang: state => state.currentLang.lang
    }),
    titleHead () {
      if (this.lang === 'uk') {
        return `Біографія ${this.$t('titleHead')}`
      }

      return `Биография ${this.$t('titleHead')}`
    },
    content () {
      return this.$t('biography')
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/style/media_mixin.scss";
@import "~/assets/style/var.scss";

 section {
   text-align: left;

  @include tablet {
    text-align: justify;
  }

   /deep/ p {
     font-size: 1.8rem;
     text-indent: 2.5rem;
     line-height: 2.6rem;
   }

   /deep/ h1 {
     font-size: 3rem;
     text-align: center;
     color: $main-blue;
     margin-bottom: 5rem;
   }
 }
</style>
