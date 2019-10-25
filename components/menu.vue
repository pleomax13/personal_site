<template>
  <div class="menu-wrap">
    <nuxt-link
      v-for="link in menu"
      :key="link.link"
      :to="link.link"
      class="link"
    >
      {{ link.title }}
    </nuxt-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
    }
  },
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
    },
    menu () {
      if (this.lang === 'ru') {
        return [
          {
            link: '/',
            title: 'Резюме'
          },
          {
            link: '/biography',
            title: 'Биография'
          },
          {
            link: '/abstract',
            title: 'Реферат'
          },
          {
            link: '/links',
            title: 'Ссылки'
          },
          {
            link: '/report',
            title: 'Отчет'
          },
          {
            link: '/individual',
            title: 'Индивидуальный раздел'
          }
        ]
      } else if (this.lang === 'ua') {
        return [
          {
            link: '/',
            title: 'Резюме'
          },
          {
            link: '/biography',
            title: 'Біографія'
          },
          {
            link: '/abstract',
            title: 'Реферат'
          }
        ]
      } else if (this.lang === 'en') {
        return [
          {
            link: '/',
            title: 'Resume'
          },
          {
            link: '/abstract',
            title: 'Abstract'
          }
        ]
      }

      return [
        {
          link: '/',
          title: 'Резюме'
        },
        {
          link: '/biography',
          title: 'Биография'
        },
        {
          link: '/essay',
          title: 'Реферат'
        },
        {
          link: '/links',
          title: 'Ссылки'
        },
        {
          link: '/report',
          title: 'Отчет'
        },
        {
          link: '/individual',
          title: 'Индивидуальный раздел'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .menu-wrap {
    display: flex;
    justify-content: flex-end;
  }
</style>
