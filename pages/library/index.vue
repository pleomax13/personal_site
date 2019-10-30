<template>
  <section>
    <h1>Библиотека материалов по теме выпускной работы</h1>
    <h2>Собственные публикации и доклады</h2>
    <ol>
      <h2>Тематические статьи</h2>
      <li
        v-for="link in articles"
        :key="link.link"
      >
        <nuxt-link :to="link.link">
          {{ link.title }}
        </nuxt-link>
        <p>
          <span v-if="link.author.length > 1">Авторы:</span>
          <span v-else>Автор:</span>
          <span
            v-for="(name, i) in link.author"
            :key="`${link.link}${i}`"
            class="name"
          >
            {{ name }}
          </span>
        </p>
        <p>
          <span>Описание:</span>
          {{ link.desc }}
        </p>
        <p class="source">
          <span>Источник:</span>
          <a :href="link.source" target="_blank">
            {{ link.sourceTitle }}
          </a>
        </p>
      </li>
    </ol>
  </section>
</template>

<script>
export default {
  head () {
    return {
      title: this.titleHead
    }
  },
  data () {
    return {
      articles: [
        {
          link: '/library/article-1',
          title: 'Математическая модель оптического абсорбционного измерителя концентрации метана для угольных шахт',
          desc: 'Описанная математическая модель бездисперсионного абсорбционного спектрометрического измерителя концентрации метана с открытым оптическим каналом положена в основу разработки быстродействующего метанометра.',
          author: ['А.А. Зори', 'М.Г. Хламов', 'А.Е.Кочин'],
          source: 'http://masters.donntu.org/2000/fkita/kochin/statya2.htm',
          sourceTitle: 'Донецкий национальный технический университет. Кафедра Электронной техники. Сайт магистра А.Е. Кочина.'
        },
        {
          link: '/library/article-2',
          title: 'Математическая модель абсорбционного измерителя концентрации метана с открытым оптическим каналом',
          desc: 'Предложена феноменологическая математическая модель спектра поглощения инфракрасного излучения метаном. Модель использована в алгоритме определения концентрации метана в атмосфере подземных выработок угольных шахт. Введение дополнительного оптического канала и приведенный алгоритм обеспечивают устранение влияния рудничной пыли в открытом оптическом канале на результат измерения концентрации метана.',
          author: ['М.Г. Хламов', 'А.Е.Кочин'],
          source: 'http://masters.donntu.org/2000/fkita/kochin/statya.htm',
          sourceTitle: 'Донецкий национальный технический университет. Кафедра Электронной техники. Сайт магистра А.Е. Кочина.'
        },
        {
          link: '/library/article-3',
          title: 'Способ защиты стекол от запыления оптического измерителя концентрации метана в угольных шахтах',
          desc: 'Разработан и реализован способ защиты стекол от запыления оптического измерителя концентрации метана в угольных шахтах.',
          author: ['А.В. Вовна'],
          source: 'http://www.irbis-nbuv.gov.ua/cgi-bin/irbis_nbuv/cgiirbis_64.exe?I21DBN=LINK&P21DBN=UJRN&Z21ID=&S21REF=10&S21CNR=20&S21STN=1&S21FMT=ASP_meta&C21COM=S&2_S21P03=FILA=&2_S21STR=Npdntu_ota_2015_1_17',
          sourceTitle: 'Национальная библиотека Украины имени В.И. Вернадского.'
        }
      ]
    }
  },
  computed: {
    titleHead () {
      return `Библиотека ${this.$t('titleHead')}`
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~/assets/style/media_mixin.scss";
  @import "~/assets/style/var.scss";

  h1 {
    font-size: 3rem;
    text-align: center;
    color: $main-blue;
    margin-bottom: 5rem;
  }

  h2 {
    font-size: 2rem;
    color: $main-blue;
    margin-bottom: 2rem;
    margin-top: 3rem;
  }

    ol {
    font-size: 1.7rem;
    padding: 0;
    margin: 0;
  }

  li {
    margin-left: 4rem;
    &+& {
      margin-top: 2rem;
    }

    a {
      text-decoration: none;
      display: block;
      margin-bottom: 1rem;
      font-weight: 500;

      &:hover {
        text-decoration: underline;
      }
    }

    p {
      line-height: 140%;
      margin-left: 2rem;
    }

    span {
      font-weight: 500;
    }
  }

  .name {
    font-weight: normal;
  }

  .source {
    display: flex;
    flex-direction: column;

    a {
      font-weight: normal;

      @include tablet {
        margin-left: .5rem;
      }
    }

    @include tablet {
      flex-direction: row;
    }
  }

  p {
      &+& {
        margin-top: .4rem;
      }
  }
</style>
