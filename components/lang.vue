<template>
  <section class="lang-container">
    <div class="lang-wrap">
      <nuxt-link
        v-for="btn in langBtns"
        :key="btn"
        :to="`?lang=${btn}`"
        class="lang"
      >
        <img v-if="btn === 'ru'" src="/ru.svg" alt="Русский" class="lang-img">
        <img v-else-if="btn === 'ua'" src="/ua.svg" alt="Українська" title="Українська" class="lang-img">
        <img v-else-if="btn === 'en'" src="/en.svg" alt="English" title="English" class="lang-img">
      </nuxt-link>
    </div>
    <div class="links-wrap">
      <a target="_blank" href="http://donntu.org/" class="link">
        <span v-if="lang ==='ru' || lang === 'ua'">ДонНТУ</span>
        <span v-if="lang ==='en'">DonNTU</span>
      </a>
      <a v-if="lang ==='ru'" target="_blank" href="http://masters.donntu.org" class="link">
        Портал магистров
      </a>
      <a v-if="lang ==='ua'" target="_blank" href="http://masters.donntu.org/indexu.htm" class="link">
        Портал магістрів
      </a>
      <a v-if="lang ==='en'" target="_blank" href="http://masters.donntu.org/indexe.htm" class="link">
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
    padding: 0 3rem;
  }

  .lang {
    &+& {
      margin-left: 2rem;
    }
  }

  a {
    text-decoration: none;
    color: white;
  }

  .link {
    color: white;
    text-decoration: none;
    font-size: 1.6rem;

    &+& {
      margin-left: 1.5rem;
    }
    &::after {
      display: block;
      content: "";
      height: .1rem;
      width: 0%;
      transition: width .2s ease-in-out;
      background-color: white;
    }

    &:hover{
      &::after {
        width: 100%;
      }
    }
  }

  .links-wrap {
    display: flex;
  }

  .lang-img {
    height: 1.9rem;
    width: auto;
  }
</style>
