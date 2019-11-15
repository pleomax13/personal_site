<template>
  <section>
    <h1>Библиотека материалов по теме выпускной работы</h1>
    <!-- <h2>Собственные публикации и доклады</h2> -->
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
            v-html="name"
          >
            <!-- {{ name }} -->
          </span>
        </p>
        <p>
          <span>Описание:</span>
          {{ link.desc }}
        </p>
        <p class="source">
          <span>Источник:</span>
          <a v-if="link.source" :href="link.source" target="_blank">
            {{ link.sourceTitle }}
          </a>
          <span v-else class="source-title">{{ link.sourceTitle }}</span>
        </p>
      </li>
      <li
        v-for="link in articlesPdf"
        :key="link.link"
      >
        <a :href="link.link" target="_blank">
          {{ link.title }}
        </a>
        <p>
          <span v-if="link.author.length > 1">Авторы:</span>
          <span v-else>Автор:</span>
          <span
            v-for="(name, i) in link.author"
            :key="`${link.link}${i}`"
            class="name"
            v-html="name"
          >
            <!-- {{ name }} -->
          </span>
        </p>
        <p>
          <span>Описание:</span>
          {{ link.desc }}
        </p>
        <p class="source">
          <span>Источник:</span>
          <a v-if="link.source" :href="link.source" target="_blank">
            {{ link.sourceTitle }}
          </a>
          <span v-else class="source-title">{{ link.sourceTitle }}</span>
        </p>
      </li>
      <h2>Переводы статей</h2>
      <li>
        <nuxt-link to="/library/article-10">
          Бюджетный усилитель с фотодиодом для обнаружения альфа-частиц
        </nuxt-link>
        <p>
          <span>Авторы:</span>
          <span class="name">
            Cláudio&nbsp;Domienikan,
          </span>
          <span class="name">
            Priscila&nbsp;Costa,
          </span>
          <span class="name">
            Frederico&nbsp;A.&nbsp;Genezini,
          </span>
          <span class="name">
            Guilherme&nbsp;S.&nbsp;Zahn
          </span>
        </p>
        <p>
          <span>Автор перевода:</span>
          <span class="name">
            Савельев&nbsp;Д.А.
          </span>
        </p>
        <p>
          <span>Описание:</span>
          Представлен недорогой усилитель для фотодиода Hamamatsu S3590-09 PIN, который будет использоваться для обнаружения альфа-частиц.
        </p>
        <p class="source">
          <span>Источник:</span>
          <a href="https://inis.iaea.org/collection/NCLCollectionStore/_Public/49/018/49018135.pdf" target="_blank">
            International Nuclear Information System (INIS)
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
          author: ['А.А.&nbsp;Зори,', ' М.Г.&nbsp;Хламов,', ' А.Е.&nbsp;Кочин'],
          source: 'http://masters.donntu.org/2000/fkita/kochin/statya2.htm',
          sourceTitle: 'Донецкий национальный технический университет. Кафедра Электронной техники. Сайт магистра А.Е. Кочина.'
        },
        {
          link: '/library/article-2',
          title: 'Математическая модель абсорбционного измерителя концентрации метана с открытым оптическим каналом',
          desc: 'Предложена феноменологическая математическая модель спектра поглощения инфракрасного излучения метаном. Модель использована в алгоритме определения концентрации метана в атмосфере подземных выработок угольных шахт. Введение дополнительного оптического канала и приведенный алгоритм обеспечивают устранение влияния рудничной пыли в открытом оптическом канале на результат измерения концентрации метана.',
          author: ['М.Г&nbsp;Хламов,', ' А.Е.&nbsp;Кочин'],
          source: 'http://masters.donntu.org/2000/fkita/kochin/statya.htm',
          sourceTitle: 'Донецкий национальный технический университет. Кафедра Электронной техники. Сайт магистра А.Е. Кочина.'
        },
        {
          link: '/library/article-3',
          title: 'Способ защиты стекол от запыления оптического измерителя концентрации метана в угольных шахтах',
          desc: 'Разработан и реализован способ защиты стекол от запыления оптического измерителя концентрации метана в угольных шахтах.',
          author: ['А.В.&nbsp;Вовна'],
          source: 'http://www.irbis-nbuv.gov.ua/cgi-bin/irbis_nbuv/cgiirbis_64.exe?I21DBN=LINK&P21DBN=UJRN&Z21ID=&S21REF=10&S21CNR=20&S21STN=1&S21FMT=ASP_meta&C21COM=S&2_S21P03=FILA=&2_S21STR=Npdntu_ota_2015_1_17',
          sourceTitle: 'Национальная библиотека Украины имени В.И. Вернадского.'
        },
        {
          link: '/library/article-4',
          title: 'Повышение достоверности информации при многокомпонентном контроле шахтной атмосферы',
          desc: 'Приведены результаты экспериментальных исследований процессов формирования выходных сигналов датчиков метана, оксида углерода и кислорода при их совместной работе в метано-воздушной среде. Предложено для повышения достоверности данных о газовой обстановке в горных выработках объединить в одной конструкции датчики состава и параметров рудничного воздуха, а также осуществить комплексную обработку поступающей от них информации. ',
          author: ['Медведев&nbsp;В.Н.,', ' Беляева&nbsp;Е.В.,', ' Скляров&nbsp;А.Л.,', ' Типоченков&nbsp;С.Ф.'],
          sourceTitle: 'Сборник научных трудов «Способы и средства создания безопасных и здоровых условий труда в угольных шахтах». 2006г. Вып.18, С. 21–129.'
        }
      ],
      articlesPdf: [
        {
          link: '/personal_site/article-5.pdf',
          title: 'Повышение точности оптико-абсорбционного измерителя концентрации угольной пыли',
          desc: 'Усовершенствован способ компенсации температурного дрейфа нуля двулучевого измерителя концентрации и дисперсности угольной пыли, получена оценка его метрологических характеристик, подтверждающая существенное повышение точности измерений: для первого канала в 1.9, а для второго в 6.7 раза в диапазоне измерения концентрации от 0 до 3 г/м3.',
          author: ['Р.И.&nbsp;Соломичев,', ' А.В.&nbsp;Вовна,', ' А.А.&nbsp;Зори'],
          source: 'http://nbuv.gov.ua/UJRN/Npdntu_ota_2015_1_23',
          sourceTitle: 'Национальная библиотека Украины имени В.И. Вернадского.'
        },
        {
          link: '/personal_site/article-6.pdf',
          title: 'Снижение динамической погрешности измерения концентрации метана',
          desc: 'Снижение динамической погрешности измерения концентрации метана.',
          author: ['А.А.&nbsp;Зори,', ' М.Г.&nbsp;Хламов,', ' А.Е.&nbsp;Кочин'],
          source: 'http://ea.donntu.org/handle/123456789/21016',
          sourceTitle: 'Электронный архив ДонНТУ.'
        },
        {
          link: '/personal_site/article-7.pdf',
          title: 'Оптический измеритель концентрации метана с аппаратно-программной компенсацией температурного дрейфа',
          desc: 'Разработка и реализация оптического измерителя концентрации метана.',
          author: ['А.В.&nbsp;Вовна,', ' А.А.&nbsp;Зори'],
          source: 'http://www.irbis-nbuv.gov.ua/cgi-bin/irbis_nbuv/cgiirbis_64.exe?I21DBN=LINK&P21DBN=UJRN&Z21ID=&S21REF=10&S21CNR=20&S21STN=1&S21FMT=ASP_meta&C21COM=S&2_S21P03=FILA=&2_S21STR=Npdntu_ota_2014_1_24',
          sourceTitle: 'Национальная библиотека Украины имени В.И. Вернадского.'
        },
        {
          link: '/personal_site/article-8.pdf',
          title: 'Волоконно-оптичний датчик метану',
          desc: 'Предложено новое решение волоконно-оптического датчика метана.',
          author: ['Ю.М&nbsp;Цюпко'],
          source: 'http://www.irbis-nbuv.gov.ua/cgi-bin/irbis_nbuv/cgiirbis_64.exe?I21DBN=LINK&P21DBN=UJRN&Z21ID=&S21REF=10&S21CNR=20&S21STN=1&S21FMT=ASP_meta&C21COM=S&2_S21P03=FILA=&2_S21STR=Npchduct_2016_283_271_16',
          sourceTitle: 'Национальная библиотека Украины имени В.И. Вернадского.'
        },
        {
          link: '/personal_site/article-9.pdf',
          title: 'Разработка и обоснование структуры измерительной системы контроля взрывоопасных пыле-газовых смесей в шахтной выработке.',
          desc: 'Разработка и реализация оптического измерителя концентрации метана.',
          author: ['Р.І.&nbsp;Соломічев,', ' О.В.&nbsp;Вовна,', ' А.А.&nbsp;Зорі'],
          source: 'http://www.irbis-nbuv.gov.ua/cgi-bin/irbis_nbuv/cgiirbis_64.exe?I21DBN=LINK&P21DBN=UJRN&Z21ID=&S21REF=10&S21CNR=20&S21STN=1&S21FMT=ASP_meta&C21COM=S&2_S21P03=FILA=&2_S21STR=vcpie_2014_19_18',
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

    .source-title {
      font-weight: 400;
       @include tablet {
        margin-left: .5rem;
       }
    }
  }

  p {
      &+& {
        margin-top: .4rem;
      }
  }
</style>
