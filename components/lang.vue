<template>
  <section class="lang-container">
    <div class="lang-wrap">
      <nuxt-link
        v-for="btn in langBtns"
        :key="btn"
        :to="`?lang=${btn}`"
        class="lang"
      >
        <img v-if="btn === 'ru'" src="/ru.png" alt="Русский">
        <img v-else-if="btn === 'ua'" src="/ua.png" alt="Українська" title="Українська">
        <img v-else-if="btn === 'en'" src="/en.png" alt="English" title="English">
      </nuxt-link>
    </div>
    <div>
      <a href="http://donntu.org/">
        <span v-if="lang ==='ru' || lang === 'ua'">ДонНТУ</span>
        <span v-if="lang ==='en'">DonNTU</span>
      </a>
      <a v-if="lang ==='ru'" href="http://masters.donntu.org">
        Портал магистров
      </a>
      <a v-if="lang ==='ua'" href="http://masters.donntu.org/indexu.htm">
        Портал магістрів
      </a>
      <a v-if="lang ==='en'" href="http://masters.donntu.org/indexe.htm">
        Masters Portal
      </a>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      lang: state => state.currentLang.lang
    }),
    langBtns () {
      const path = this.$route.path
      if (this.lang === 'ru') {
        switch (path) {
          case '/':
            return ['ua', 'en']
          case '/biography':
            return ['ua']
          case '/abstract':
            return ['ua', 'en']

          default:
            return []
        }
      } else if (this.lang === 'ua') {
        switch (path) {
          case '/':
            return ['ru', 'en']
          case '/biography':
            return ['ru']
          case '/abstract':
            return ['ru', 'en']

          default:
            return []
        }
      } else if (this.lang === 'en') {
        switch (path) {
          case '/':
            return ['ru', 'ua']
          case '/abstract':
            return ['ru', 'ua']

          default:
            return []
        }
      }

      return []
    }
  }
}
</script>

<style lang="scss" scoped>
  .lang-container {
    display: flex;
    justify-content: space-between;
  }

  .lang {
    &+& {
      margin-left: 10px;
    }
  }

  a {
    text-decoration: none;
    color: white;

    &:hover {
      text-decoration: underline;
    }
  }
</style>
