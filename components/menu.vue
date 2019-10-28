<template>
  <div class="menu-wrap">
    <nuxt-link
      v-for="(link, i) in menu"
      :key="link.link"
      :to="link.link"
      class="link"
      :class="{active: (i === 0 && path === 'index') || path === link.link.split('?')[0].split('/')[1]}"
    >
      {{ link.title }}
    </nuxt-link>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
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
            link: '/?lang=ru',
            title: 'Резюме'
          },
          {
            link: '/biography?lang=ru',
            title: 'Биография'
          },
          {
            link: '/abstract?lang=ru',
            title: 'Реферат'
          },
          {
            link: '/library?lang=ru',
            title: 'Библиотека'
          },
          {
            link: '/links?lang=ru',
            title: 'Ссылки'
          },
          {
            link: '/report?lang=ru',
            title: 'Отчет'
          },
          {
            link: '/individual?lang=ru',
            title: 'Индивидуальный раздел'
          }
        ]
      } else if (this.lang === 'ua') {
        return [
          {
            link: '/?lang=ua',
            title: 'Резюме'
          },
          {
            link: '/biography?lang=ua',
            title: 'Біографія'
          },
          {
            link: '/abstract?lang=ua',
            title: 'Реферат'
          }
        ]
      } else if (this.lang === 'en') {
        return [
          {
            link: '/?lang=en',
            title: 'Resume'
          },
          {
            link: '/abstract?lang=en',
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
    },
    path () {
      return this.$route.name
    }
  },
  watch: {
    '$route.path' (to) {
      this.toggleSidebar(false)
    }
  },
  methods: {
    ...mapMutations({
      toggleSidebar: 'sidebar/SET_TOGGLE_SIDEBAR'
    })
  }
}
</script>

<style lang="scss" scoped>
  @import "~/assets/style/media_mixin.scss";

  .menu-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;

    @include _1280 {
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;
      min-height: 4rem;
      flex-wrap: wrap;
      padding: 0 3rem;
    }
  }

  .link {
    color: white;
    text-decoration: none;
    font-size: 2rem;

    &+& {
        margin-top: 1rem;
      }

    @include _1280 {
      &+& {
        margin-left: 2.5rem;
        margin-top: 0;
      }
    }

    &::after {
      display: block;
      content: "";
      height: .15rem;
      width: 0%;
      transition: width .2s ease-in-out;
      background-color: white;
    }

    &:hover{
      &::after {
        width: 100%;
      }
    }

    &.active {
      &::after {
        width: 100%;
      }
    }
  }
</style>
