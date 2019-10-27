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
      <!-- <img src="/close.svg" alt="Закрыть" class="close" title="Закрыть" @click="toggleSidebar(false)"> -->
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
import { mapState, mapMutations } from 'vuex'
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
  },
  methodth: {
    ...mapMutations({
      toggleSidebar: 'sidebar/SET_TOGGLE_SIDEBAR'
    })
  }
}
</script>

<style lang="scss" scoped>
  @import "~/assets/style/media_mixin.scss";
  .lang-container {
    display: flex;
    padding: 0 1rem;
    flex-direction: column;
    justify-content: flex-start;

    @include _1280 {
      height: 2.5rem;
      flex-direction: row;
      justify-content: space-between;
      padding: 0 3rem;
    }
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
    justify-content: space-between;

    @include _1280 {
      justify-content: flex-start;
      margin-top: 0;
    }
  }

  .lang-img {
    height: 1.9rem;
    width: auto;
  }

  .lang-wrap {
    height: 1.9rem;
    margin-bottom: 2rem;
    display: flex;

    @include _1280 {
      margin-bottom: 0;
    }
  }

  .close {
    height: 1.9rem;
    width: auto;
    margin-left: auto;
    margin-right: 0;
    display: block;
    cursor: pointer;

    @include _1280 {
      display: none;
    }
  }
</style>
