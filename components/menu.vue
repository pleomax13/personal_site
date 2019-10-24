<template>
  <div class="menu-wrap">
    <div>
      a
    </div>
    <div class="menu">
      <nuxt-link
        v-for="link in menu"
        :key="link.link"
        :to="link.link"
        class="link"
      >
        {{ link.title }}
      </nuxt-link>
    </div>
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
            link: '/essay',
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
            link: '/essay',
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

</style>
