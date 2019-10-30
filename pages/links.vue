<template>
  <section>
    <h1>Ссылки по теме выпускной работы</h1>
    <h2>Материалы магистров ДонНТУ</h2>
    <ol>
      <li
        v-for="link in mag"
        :key="link.link"
      >
        <a :href="link.link" target="_blank">
          {{ link.title }}
        </a>
        <p>
          <span>Описание:</span>
          {{ link.desc }}
        </p>
        <p>
          <span>Руководитель:</span>
          {{ link.head }}
        </p>
      </li>
      <h2>Научные работы и статьи</h2>
      <li
        v-for="link in articles"
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
          >
            {{ name }}
          </span>
        </p>
        <p>
          <span>Описание:</span>
          {{ link.desc }}
        </p>
      </li>
      <h2>Техническая и справочная литература</h2>
      <li
        v-for="link in catalogs"
        :key="link.link"
      >
        <a :href="link.link" target="_blank">
          {{ link.title }}
        </a>
        <p>
          {{ link.desc }}
        </p>
      </li>
      <h2>Специализированные сайты и порталы</h2>
      <li
        v-for="link in sites"
        :key="link.link"
      >
        <a :href="link.link" target="_blank">
          {{ link.title }}
        </a>
        <p>
          {{ link.desc }}
        </p>
      </li>
      <h2>Электронные журналы и статьи</h2>
      <li
        v-for="link in magaz"
        :key="link.link"
      >
        <a :href="link.link" target="_blank">
          {{ link.title }}
        </a>
        <p>
          {{ link.desc }}
        </p>
      </li>
    </ol>
  </section>
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
      mag: [
        {
          link: 'http://masters.donntu.org/2004/kita/pogorzhelskiy/',
          title: 'Погоржельский Ю.А. Обоснование структуры быстродействующего измерителя концентрации метана системы газовой защиты угольных шахт',
          desc: 'Персональный сайт на портале магистров ДонНТУ, 2004 г.',
          head: 'к.т.н., проф. Хламов М. Г.'
        },
        {
          link: 'http://masters.donntu.org/2012/fkita/kushnarenko/',
          title: 'Кушнаренко Т. Н. Обоснование структуры електронной системы измерителей концентрации метана в подземной атмосфере угольных шахт',
          desc: 'Персональный сайт на портале магистров ДонНТУ, 2012 г.',
          head: 'д.т.н., проф. Зори А.А.'
        },
        {
          link: 'http://masters.donntu.org/2006/kita/aldohina/',
          title: 'Алдохина А. С. Обоснование структуры трассового детектора утечки природного газа из магистральных газопроводов',
          desc: 'Персональный сайт на портале магистров ДонНТУ, 2006 г.',
          head: 'к.т.н., проф. Хламов М. Г.'
        },
        {
          link: 'http://masters.donntu.org/2018/fkita/chorniy/',
          title: 'Чёрный В.В. Обоснование метода контроля концентрации метана в условиях добычного участка угольной шахты',
          desc: 'Персональный сайт на портале магистров ДонНТУ, 2018 г.',
          head: 'к.т.н., доц. Косарев Н.П.'
        },
        {
          link: 'http://masters.donntu.org/2010/fkita/bildey',
          title: 'Бильдей Е.Е. Повышение электробезопасности эксплуатации электротехнического комплекса участка шахты на основе автоматического отключения обратных потоков электродвигателей потребителей',
          desc: 'Персональный сайт на портале магистров ДонНТУ, 2010 г.',
          head: 'доц., к.т.н. Маренич К.Н.'
        }
      ],
      articles: [
        {
          link: 'http://www.irbis-nbuv.gov.ua/cgi-bin/irbis_nbuv/cgiirbis_64.exe?I21DBN=LINK&P21DBN=UJRN&Z21ID=&S21REF=10&S21CNR=20&S21STN=1&S21FMT=ASP_meta&C21COM=S&2_S21P03=FILA=&2_S21STR=gorsp_2014_51_5',
          title: 'Метанометр для применения в экстремальных газовых и климатических условиях угольных шахт',
          desc: 'Исследование методов и приборов измерения объемной доли метана в горных выработках и их технические параметры.',
          author: ['П. С. Пашковский,', 'Г. И. Пефтибай,', 'Э. Г. Чайковская']
        },
        {
          link: 'http://www.irbis-nbuv.gov.ua/cgi-bin/irbis_nbuv/cgiirbis_64.exe?I21DBN=LINK&P21DBN=UJRN&Z21ID=&S21REF=10&S21CNR=20&S21STN=1&S21FMT=ASP_meta&C21COM=S&2_S21P03=FILA=&2_S21STR=Npchduct_2016_283_271_16',
          title: 'Волоконно-оптичний датчик метану',
          desc: 'Разработка нового схемотехнического решения волоконно-оптического датчика.',
          author: ['Ю. М. Цюпко']
        },
        {
          link: 'http://www.irbis-nbuv.gov.ua/cgi-bin/irbis_nbuv/cgiirbis_64.exe?I21DBN=LINK&P21DBN=UJRN&Z21ID=&S21REF=10&S21CNR=20&S21STN=1&S21FMT=ASP_meta&C21COM=S&2_S21P03=FILA=&2_S21STR=Npdntu_ota_2014_1_24',
          title: 'Оптический измеритель концентрации метана с аппаратно-программной компенсацией температурного дрейфа',
          desc: 'Разработка и реализация оптического измерителя концентрации метана.',
          author: ['А. В. Вовна,', 'А. А. Зори']
        },
        {
          link: 'http://www.irbis-nbuv.gov.ua/cgi-bin/irbis_nbuv/cgiirbis_64.exe?I21DBN=LINK&P21DBN=UJRN&Z21ID=&S21REF=10&S21CNR=20&S21STN=1&S21FMT=ASP_meta&C21COM=S&2_S21P03=FILA=&2_S21STR=Npdntu_ota_2015_1_17',
          title: 'Способ защиты стекол от запыления оптического измерителя концентрации метана в угольных шахтах',
          desc: 'Разработка и реализация способа защиты стекол от запыления оптического измерителя концентрации метана в уголь шахтах.',
          author: ['А. В. Вовна']
        },
        {
          link: 'http://www.irbis-nbuv.gov.ua/cgi-bin/irbis_nbuv/cgiirbis_64.exe?I21DBN=LINK&P21DBN=UJRN&Z21ID=&S21REF=10&S21CNR=20&S21STN=1&S21FMT=ASP_meta&C21COM=S&2_S21P03=FILA=&2_S21STR=Npdntu_ota_2016_1_13',
          title: 'Повышение точности оптического измерителя концентрации метана в рудничной атмосфере шахт',
          desc: 'Разработка и реализация способа повышения точности оптического измерителя концентрации метана для угольных шахт.',
          author: ['А. В. Вовна']
        },
        {
          link: 'http://www.irbis-nbuv.gov.ua/cgi-bin/irbis_nbuv/cgiirbis_64.exe?I21DBN=LINK&P21DBN=UJRN&Z21ID=&S21REF=10&S21CNR=20&S21STN=1&S21FMT=ASP_meta&C21COM=S&2_S21P03=FILA=&2_S21STR=TED_2017_4_14',
          title: 'Апаратно-програмний спосіб компенсації температурного дрейфа вихідного сигналу оптичного вимірювача концентрації метану',
          desc: 'Разработка и реализация аппаратно-программного способа компенсации дрейфа выходного сигнала измрителя концентрации метана.',
          author: ['О. В. Вовна,', 'А. А. Зорі,', 'І. С. Лактіонов']
        },
        {
          link: 'http://www.irbis-nbuv.gov.ua/cgi-bin/irbis_nbuv/cgiirbis_64.exe?I21DBN=LINK&P21DBN=UJRN&Z21ID=&S21REF=10&S21CNR=20&S21STN=1&S21FMT=ASP_meta&C21COM=S&2_S21P03=FILA=&2_S21STR=Npdntu_ota_2015_1_23',
          title: 'Повышение точности оптико-абсорбационного измерителя концентрации угольной пыли',
          desc: 'Усовершенствование способа компенсации температурного дрейфа нуля двулучевого измерителя концентрации и дисперсности угольной пыли, получение оценки его метрологических характеристик, подтверждающей существенное повышение точности измерений.',
          author: ['Р. И. Соломичев,', 'А. В. Вовна,', 'А. А. Зори']
        },
        {
          link: 'http://www.irbis-nbuv.gov.ua/cgi-bin/irbis_nbuv/cgiirbis_64.exe?I21DBN=LINK&P21DBN=UJRN&Z21ID=&S21REF=10&S21CNR=20&S21STN=1&S21FMT=ASP_meta&C21COM=S&2_S21P03=FILA=&2_S21STR=vvpi_2014_5_7',
          title: 'Розробка двопроменевого вимірювача концентрації та дисперсності вугільного пилу з компенсацією температурного дрейфу',
          desc: 'Разработка и исследование измерителя концентрации и дисперсности угольной пыли с компенсацией температурного дрейфа.',
          author: ['Р. І. Соломічев,', 'О. В. Вовна,', 'А. А. Зорі']
        },
        {
          link: 'http://www.irbis-nbuv.gov.ua/cgi-bin/irbis_nbuv/cgiirbis_64.exe?I21DBN=LINK&P21DBN=UJRN&Z21ID=&S21REF=10&S21CNR=20&S21STN=1&S21FMT=ASP_meta&C21COM=S&2_S21P03=FILA=&2_S21STR=vcpie_2014_19_18',
          title: 'Розробка та обгрунтування структури вимірювальної системи контролю вибухонебезпечних пило-газових сумішей в шахтному виробітку',
          desc: 'Разработка и обоснование структуры измерительной системы контроля взрывоопасных пыле- газовых смесей в шахтной выработке.',
          author: ['Р. І. Соломічев,', 'О. В. Вовна,', 'А. А. Зорі']
        },
        {
          link: 'http://www.irbis-nbuv.gov.ua/cgi-bin/irbis_nbuv/cgiirbis_64.exe?I21DBN=LINK&P21DBN=UJRN&Z21ID=&S21REF=10&S21CNR=20&S21STN=1&S21FMT=ASP_meta&C21COM=S&2_S21P03=FILA=&2_S21STR=vcpie_2015_19_11',
          title: 'Підсистема контролю меж вибуховості рудничної атмосфери для системи аерогазового захисту вугільних шахт',
          desc: 'Разработка и усовершенствование измерительных систем концентрации газов и пыли, которые позволяют получить надежную метрологическую информацию в режиме реального времени о фактическом и прогнозируемом состояние аэрогазовой обстановки промышленных предприятий.',
          author: ['О. В. Вовна,', 'А. А. Зорі']
        },
        {
          link: 'http://www.irbis-nbuv.gov.ua/cgi-bin/irbis_nbuv/cgiirbis_64.exe?I21DBN=LINK&P21DBN=UJRN&Z21ID=&S21REF=10&S21CNR=20&S21STN=1&S21FMT=ASP_meta&C21COM=S&2_S21P03=FILA=&2_S21STR=vvpi_2014_6_3',
          title: 'Застосування програмної компенсації впливу температури для оптичних вимірювачів концентрації газів',
          desc: 'Разработка и исследование способа программной компенсации влияния температуры на метрологические характеристики оптико-абсорбционного измерителя концентрации газа.',
          author: ['О. В. Вовна,', 'А. А. Зорі']
        },
        {
          link: 'http://ea.donntu.org/handle/123456789/21016',
          title: 'Снижение динамической погрешности измерения концентрации метана',
          desc: 'Снижение динамической погрешности измерения концентрации метана.',
          author: ['Рыжков, С.В.,', 'Новиков, Е.Н.']
        },
        {
          link: 'https://cyberleninka.ru/article/v/razrabotka-i-issledovaniya-eksperimentalnogo-obraztsa-izmeritelya-kontsentratsii-metana-dlya-ugolnyh-shaht',
          title: 'Разработка и исследования экспериментального образца измерителя концентрации метана для угольных шахт',
          desc: 'Разработан и исследован экспериментальный образец измерителя концентрации метана для угольных шахт.',
          author: ['Вовна А.В.,', 'Зори А.А.']
        },
        {
          link: 'http://ea.donntu.edu.ua/bitstream/123456789/1941/1/%D0%92%D0%BE%D0%B2%D0%BD%D0%B0%20%D0%9E%D0%92%20-%D0%BE%D0%B1%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5%20%D1%82%D0%B5%D1%80%D0%B1%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B9%20%D0%BA%20%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B5.pdf',
          title: 'Обоснование требований к системе раннего обнаружения самовозгорания пылеугольных аэрозолей в условиях промышленных предприятий',
          desc: 'Разработана математическая модель, которая учитывает кинетические параметры, динамику температур и концентрацию пылевых аэрозолей, при анализе полученных результатов обосновано совокупность требований к измерительным каналам электронной системы раннего обнаружения процесса самовозгорания пылевых аэрозолей в условиях промышленных предприятий.',
          author: ['Вовна А.В.,', 'Лактионов И.С.']
        }
      ],
      catalogs: [
        {
          link: 'http://www.nbuv.gov.ua/',
          title: 'Национальная библиотека Украины имени В.И. Вернадского',
          desc: 'Крупнейшая библиотека Украины, главный научно-информационный центр государства. Входит в число десяти крупнейших национальных библиотек мира.'
        },
        {
          link: 'http://masters.donntu.org/',
          title: 'Портал магистров ДонНТУ',
          desc: 'Персональные сайты магистров.'
        },
        {
          link: 'https://studfiles.net/',
          title: 'StudFiles',
          desc: 'Файловый архив для студентов.'
        },
        {
          link: 'https://ru.wikipedia.org/',
          title: 'Википедия',
          desc: 'Свободная энциклопедия.'
        },
        {
          link: 'http://www.chipinfo.ru/dsheets',
          title: 'Справочник CHIPINFO',
          desc: 'Справочник по электронные компонентам.'
        },
        {
          link: 'http://avr.ru/docs',
          title: 'AVR.RU',
          desc: 'Сайт о микроконтроллерах AVR. Документация.'
        },
        {
          link: 'http://wiki.amperka.ru/',
          title: 'Энциклопедия знаний Амперки',
          desc: 'Вся база знаний Амперки: помощь по Arduino и Raspberry Pi, оригинальные проекты, схемы распиновки модулей, теория электричества для начинающих и другая полезная информация.'
        },
        {
          link: 'http://nbmgu.ru/',
          title: 'Научная библиотека МГУ имени М.В. Ломоносова',
          desc: 'Научная библиотека МГУ имени М.В. Ломоносова (НБ МГУ) – обособленное подразделение в структуре университета.'
        },
        {
          link: 'http://radiostorage.net/',
          title: 'Радиоэлектроника и схемотехника',
          desc: 'Большой архив принципиальных схем и статей по радиоэлектронике и схемотехнике.'
        },
        {
          link: 'http://avrproject.ru/',
          title: 'Проекты на микроконтроллерах AVR',
          desc: 'Устройства на микроконтроллерах AVR.'
        }
      ],
      sites: [
        {
          link: 'http://forum.amperka.ru/',
          title: 'Амперка / Форум',
          desc: 'Форум об Ардуино, роботах, схемотехнике и электронике.'
        },
        {
          link: 'http://forum.avr.ru/',
          title: 'Форум avr.ru',
          desc: 'Форум о микроконтроллерах AVR.'
        },
        {
          link: 'http://arduino.ru/forum',
          title: 'Форум Arduino',
          desc: 'Форум о микроконтроллере Arduino.'
        },
        {
          link: 'http://www.cyberforum.ru/electronics/',
          title: 'КиберФорум',
          desc: 'Форум по электронике, радио форум. Форум электронщиков. Обсуждение различных электронных и радио устройств, их проектирования, сборки и ремонта.'
        },
        {
          link: 'https://habr.com/',
          title: 'Хабр',
          desc: 'Русскоязычный веб-сайт в формате коллективного блога с элементами новостного сайта, созданный для публикации новостей, аналитических статей, мыслей, связанных с информационными технологиями, бизнесом и интернетом.'
        },
        {
          link: 'https://www.radiokot.ru/forum/',
          title: 'Форум РадиоКот',
          desc: 'Форум по электронике.'
        },
        {
          link: 'https://forum.cxem.net/',
          title: 'Сайт Паяльник. Форум',
          desc: 'Форум по электронике.'
        }
      ],
      magaz: [
        {
          link: 'https://ru.wikipedia.org/wiki/%D0%A4%D0%BE%D1%82%D0%BE%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82',
          title: 'Фотоэлемент',
          desc: 'Назначение фотоэлементов, принцип работы и классификация.'
        },
        {
          link: 'https://ru.wikipedia.org/wiki/%D0%A4%D0%BE%D1%82%D0%BE%D1%8D%D1%84%D1%84%D0%B5%D0%BA%D1%82',
          title: 'Фотоэлектрический эффект',
          desc: 'Законы фотоэффекта, его разновидности и особенности.'
        },
        {
          link: 'https://ru.wikipedia.org/wiki/%D0%9F%D0%BE%D0%BB%D1%83%D0%BF%D1%80%D0%BE%D0%B2%D0%BE%D0%B4%D0%BD%D0%B8%D0%BA%D0%B8',
          title: 'Полупроводники',
          desc: 'Описание и механизм работы полупроводников.'
        },
        {
          link: 'https://ru.wikipedia.org/wiki/%D0%A4%D0%BE%D1%82%D0%BE%D0%B4%D0%B8%D0%BE%D0%B4',
          title: 'Фотодиод',
          desc: 'Описание и механизм работы фотодиода.'
        },
        {
          link: 'https://ru.wikipedia.org/wiki/%D0%98%D0%B7%D0%BC%D0%B5%D1%80%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_%D1%83%D1%81%D0%B8%D0%BB%D0%B8%D1%82%D0%B5%D0%BB%D1%8C',
          title: 'Измерительный усилитель',
          desc: 'Описание и механизм работы измерительного усилителя.'
        },
        {
          link: 'https://ru.wikipedia.org/wiki/%D0%90%D0%BD%D0%B0%D0%BB%D0%BE%D0%B3%D0%BE-%D1%86%D0%B8%D1%84%D1%80%D0%BE%D0%B2%D0%BE%D0%B9_%D0%BF%D1%80%D0%B5%D0%BE%D0%B1%D1%80%D0%B0%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C',
          title: 'Аналого-цифровой преобразователь',
          desc: 'Описание, типы и механизм работы АЦП.'
        },
        {
          link: 'https://ru.wikipedia.org/wiki/%D0%9B%D0%B8%D0%BD%D0%B7%D0%B0',
          title: 'Линза',
          desc: 'Описание, типы и механизм работы линз.'
        },
        {
          link: 'https://ru.wikipedia.org/wiki/%D0%9C%D0%B5%D1%82%D0%B0%D0%BD',
          title: 'Метан',
          desc: 'Описание, свойства газа.'
        },
        {
          link: 'http://eurolabgas.ru/tipy_gazoanalizatorov',
          title: 'Типы газоанализаторов',
          desc: 'Классификация газоанализаторов.'
        },
        {
          link: 'https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D1%84%D0%BE%D1%82%D0%BE%D0%BC%D0%B5%D1%82%D1%80%D0%B8%D1%8F',
          title: 'Спектрофотометрия',
          desc: 'Суть метода исследования растворов и твёрдых веществ.'
        },
        {
          link: 'https://ru.wikipedia.org/wiki/%D0%AD%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82_%D0%9F%D0%B5%D0%BB%D1%8C%D1%82%D1%8C%D0%B5',
          title: 'Элемент Пельтье',
          desc: 'Описание, принцип действия, применение элемента Пельтье.'
        },
        {
          link: 'https://ru.wikipedia.org/wiki/%D0%A1%D0%B2%D0%B5%D1%82%D0%BE%D0%B4%D0%B8%D0%BE%D0%B4',
          title: 'Светодиод',
          desc: 'Описание, принцип действия, применение, характеристики светоизлучающего диода.'
        },
        {
          link: 'https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%BB%D1%8C%D1%82%D1%80_(%D1%8D%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0)',
          title: 'Фильтр сигналов',
          desc: 'Описание, типы, принцип действия, применение, характеристики фильтров сигналов.'
        },
        {
          link: 'https://ru.wikipedia.org/wiki/%D0%A1%D0%B2%D0%B5%D1%82%D0%BE%D1%84%D0%B8%D0%BB%D1%8C%D1%82%D1%80',
          title: 'Светофильтр',
          desc: 'Описание, классификация, принцип действия, применение, характеристики светофильтров.'
        }
      ]
    }
  },
  computed: {
    ...mapState({
      lang: state => state.currentLang.lang
    }),
    titleHead () {
      return `Ссылки ${this.$t('titleHead')}`
    }
  }
}
</script>

<style lang="scss" scoped>
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
      display: inline-flex;
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

  p {
      &+& {
        margin-top: .4rem;
      }
  }
</style>
