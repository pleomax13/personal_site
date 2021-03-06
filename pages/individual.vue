<template>
  <section>
    <h1>Frontend разработка</h1>
    <p>
      Веб-разработкой, в частности frontend, я занимаюсь уже достаточно долго.
      Началось всё с того, что мне захотелось научиться разрабатывать сайты. Для этого я начал изучать основы верстки,
      в частности HTML и CSS.
    </p>
    <img src="~/assets/imgs/ind_1.png" alt="HTML, CSS, JS" title="HTML, CSS, JS" class="img">
    <p>
      HTML (HyperText Markup Language – <q>язык гипертекстовой разметки</q>) – самый базовый строительный блок Веба.
      Он определяет содержание и структуру веб-контента.
    </p>
    <p>
      CSS (Cascading Style Sheets) – это язык иерархических правил (таблиц стилей), используемый для представления внешнего вида документа,
      написанного на HTML или XML (включая различные языки XML, такие как SVG и XHTML).
      CSS описывает, каким образом элемент должен отображаться на экране, на бумаге, голосом или с использованием других медиа средств.
    </p>
    <p>
      Все полученные знания я закреплял на практике, верстая сайты по готовым макетам. Позже, после
      изучения основ на достаточном уровне, необходимо было развиваться дальше, а именно – изучать JavaScript.
    </p>
    <p>
      Изначально JavaScript был создан, чтобы <q>сделать веб-страницы живыми</q>.
      Программы на этом языке называются скриптами. Они могут встраиваться в HTML и выполняться автоматически при загрузке веб-страницы.
      Скрипты распространяются и выполняются, как простой текст. Им не нужна специальная подготовка или компиляция для запуска.
      Это отличает JavaScript от другого языка – Java.
      Сегодня JavaScript может выполняться не только в браузере, но и на сервере или на любом другом устройстве,
      которое имеет специальную программу, называющуюся <q>движком</q> JavaScript.
      У браузера есть собственный движок, который иногда называют <q>виртуальная машина JavaScript</q>.
    </p>
    <p>
      Современный JavaScript – это <q>безопасный</q> язык программирования. Он не предоставляет низкоуровневый доступ к памяти или процессору,
      потому что изначально был создан для браузеров, не требующих этого.
    </p>
    <p>
      Возможности JavaScript сильно зависят от окружения, в котором он работает. Например,
      Node.JS поддерживает функции чтения/записи произвольных файлов, выполнения сетевых запросов и т.д.
    </p>
    <p>
      В браузере для JavaScript доступно всё, что связано с манипулированием веб-страницами, взаимодействием с пользователем и веб-сервером.
    </p>
    <p>
      Например, в браузере JavaScript может:
    </p>
    <ul>
      <li>
        Добавлять новый HTML-код на страницу, изменять существующее содержимое, модифицировать стили.
      </li>
      <li>
        Реагировать на действия пользователя, щелчки мыши, перемещения указателя, нажатия клавиш.
      </li>
      <li>
        Отправлять сетевые запросы на удалённые сервера, скачивать и загружать файлы (технологии AJAX и COMET).
      </li>
      <li>
        Получать и устанавливать куки, задавать вопросы посетителю, показывать сообщения.
      </li>
      <li>
        Запоминать данные на стороне клиента (<q>local storage</q>).
      </li>
    </ul>
    <p>
      Возможности JavaScript в браузере ограничены ради безопасности пользователя. Цель заключается в предотвращении доступа
      недобросовестной веб-страницы к личной информации или нанесения ущерба данным пользователя.
    </p>
    <p>
      Примеры таких ограничений включают в себя:
    </p>
    <ul>
      <li>
        JavaScript на веб-странице не может читать/записывать произвольные файлы на жёстком диске,
        копировать их или запускать программы. Он не имеет прямого доступа к системным функциям ОС.
        Современные браузеры позволяют ему работать с файлами, но с ограниченным доступом, и предоставляют его,
        только если пользователь выполняет определённые действия, такие как «перетаскивание» файла в
        окно браузера или его выбор с помощью тега <q>input</q>.
        Существуют способы взаимодействия с камерой/микрофоном и другими устройствами,
        но они требуют явного разрешения пользователя. Таким образом, страница с поддержкой JavaScript
        не может незаметно включить веб-камеру и наблюдать за происходящим.
      </li>
      <li>
        Различные окна/вкладки не знают друг о друге. Иногда одно окно, используя JavaScript, открывает другое окно.
        Но даже в этом случае JavaScript с одной страницы не имеет доступа к другой, если они пришли с разных сайтов
        (с другого домена, протокола или порта). Это называется <q>Политика одинакового источника</q> (Same Origin Policy).
        Чтобы обойти это ограничение, обе страницы должны согласиться с этим и содержать JavaScript-код, который специальным
        образом обменивается данными. Это ограничение необходимо, опять же, для безопасности пользователя.
        Страница http://anysite.com, которую открыл пользователь, не должна иметь доступ к другой вкладке браузера с
        URL http://gmail.com и воровать информацию оттуда.
      </li>
      <li>
        JavaScript может легко взаимодействовать с сервером, с которого пришла текущая страница.
        Но его способность получать данные с других сайтов/доменов ограничена. Хотя это возможно в принципе,
        для чего требуется явное согласие (выраженное в заголовках HTTP)
        с удалённой стороной. Опять же, это ограничение безопасности.
      </li>
    </ul>
    <p>
      Подобные ограничения не действуют, если JavaScript используется вне браузера, например – на сервере.
      Современные браузеры предоставляют плагины/расширения,
      с помощью которых можно запрашивать дополнительные разрешения.
    </p>
    <p>
      Параллельно с изучением JavaScript, мне поступило предложение разработать сайт для Кафедры Электронной Техники ДонНТУ,
      на которой я проходил обучение в университете. Я принял предложение и, продумав внешний вид сайта и его составные части,
      сделал одностраничный сайт. Ознакомиться с ним можно пройдя по ссылке, расположенной ниже.
    </p>
    <a href="http://ket-donntu.000webhostapp.com/" target="_blank" class="link-et">
      <img src="~/assets/imgs/ind_2.jpg" alt="Кафедра электронной техники" title="Кафедра электронной техники" class="img">
    </a>
    <p>
      После написания сайта для кафедры, я узнал о фреймворках для JavaScript – таких, как React, Vue.js и Angular.
    </p>
    <p>
      Фреймворк (framework) можно рассматривать как некий каркас для создания приложений на определенном языке
      программирования. Он включает в себя набор библиотек, которые позволяют значительно упростить и убыстрить разработку приложений.
      Также цель фреймворка – это предоставление такой среды разработки,
      которая позволит дорабатывать и расширять функционал проекта.
    </p>
    <p>
      Фреймворк использует определенную архитектуру приложения для того, чтобы проект был разделен на логические части,
      модули. Например, схема разделения Model-View-Controller (MVC) подразумевает разделение на три сегмента: модель,
      представление и контроллер, каждый из которых можно изменять независимо от других.
    </p>
    <p>
      Если говорить более упрощенно, то существует множество типовых задач, которые приходится решать разработчикам – и
      поэтому часто используются библиотеки. Использование фреймворка позволяет избежать отдельного <q>складирования</q> полезного материала
      где-нибудь в отдельной папке либо постоянного написания однотипного кода: фреймворк позволяет использовать встроенные
      классы для валидации, логирования и многих других процессов, а также имеет структуру, которую в итоге получает проект.
    </p>
    <p>
      Фреймворки имеют массу преимуществ, именно поэтому они используются практически повсеместно. Это:
    </p>
    <ul>
      <li>
        удобная и быстрая разработка приложения;
      </li>
      <li>
        чистый код.
      </li>
    </ul>
    <p>
      Но у использования фреймворка есть и недостатки (и забывать о них не стоит):
    </p>
    <ul>
      <li>
        слабая защищенность из-за открытого исходного кода;
      </li>
      <li>
        нужно потратить определенное время и усилия на изучение фреймворка;
      </li>
      <li>
        каждый фреймворк нужно изучать отдельно (нельзя разобраться в одном фреймворке и начать понимать, как работать со всеми).
      </li>
    </ul>
    <p>
      Мне захотелось изучить один из них, но я не знал, какой лучше выбрать. Все эти фреймворки обладали как сильными,
      так и слабыми сторонами.
      После прочтения многих статей, рассказывающих про каждый из них, выбор пал на React.
    </p>
    <img src="~/assets/imgs/react.png" alt="React" title="React" class="img">
    <p>
      React (иногда React.js или ReactJS) – JavaScript-библиотека с открытым исходным кодом для разработки пользовательских
      интерфейсов. React разрабатывается и поддерживается Facebook,
      Instagram и сообществом отдельных разработчиков и корпораций.
    </p>
    <p>
      React может использоваться для разработки одностраничных и мобильных приложений. Его цель – предоставить высокую скорость,
      простоту и масштабируемость. React можно использовать в качестве основы при разработке одностраничных или мобильных приложений,
      поскольку он оптимален для извлечения быстро меняющихся данных, которые необходимо записать. Однако выборка данных –
      это только начало того, что происходит на веб-странице, поэтому сложные приложения React обычно требуют использования
      дополнительных библиотек для управления состоянием,
      маршрутизации и взаимодействия с API: Redux, React Router и axios являются примерами таких библиотек.
    </p>
    <p>
      Одной из главных особенностей React является виртуальный DOM. React создает кэш структуру в памяти, что
      позволяет вычислять разницу между предыдущим и текущим состояниями интерфейса для оптимального обновления DOM браузера.
      Таким образом программист может работать со страницей, считая, что она обновляется вся,
      но библиотека самостоятельно решает, какие компоненты страницы необходимо обновить.
    </p>
    <p>
      Ниже приведен список некоторых известных приложений, которые используют React:
    </p>
    <ul>
      <li
        v-for="link in react"
        :key="link.link"
      >
        <a :href="link.link" target="_blank">
          {{ link.title }}
        </a>
      </li>
    </ul>
    <p>
      Еще один достаточно популярный фреймфорк, который мне довелось изучать – это Vue.js.
    </p>
    <img src="~/assets/imgs/Vue.png" alt="Vue.js" title="Vue.js" class="img">
    <p>
      Vue.js (обычно называемый Vue; произносится как view ) – это JavaScript-фреймворк с открытым исходным кодом
      Model-view-viewmodel для создания пользовательских интерфейсов и одностраничных приложений.
      Он был создан Evan You и поддерживается им и остальными активными
      членами основной команды из разных компаний, таких как Netlify и Netguru.
    </p>
    <p>
      Vue.js обладает постепенно адаптируемой архитектурой, которая фокусируется на декларативном рендеринге и компоновке
      компонентов. Расширенные функции, необходимые для сложных приложений, таких как маршрутизация, управление состоянием и
      инструменты сборки , предлагаются через
      официально поддерживаемые библиотеки поддержки и пакеты, причем Nuxt.js является одним из самых популярных решений.
    </p>
    <p>
      Vue имеет систему реактивности, которая использует простые объекты JavaScript и оптимизированный повторный рендеринг.
      Каждый компонент отслеживает свои реактивные зависимости во время рендеринга,
      поэтому система точно знает, когда следует перерисовать и какие компоненты перерисовать.
    </p>
    <p>
      Vue использует основанный на HTML синтаксис шаблона, который позволяет привязать визуализированный DOM к
      данным базового экземпляра Vue. Все шаблоны Vue представляют собой действительный HTML, который может быть
      проанализирован совместимыми со спецификацией браузерами и анализаторами HTML . Vue компилирует шаблоны в виртуальные
      функции рендеринга DOM. Виртуальная объектная модель документа (или «DOM») позволяет Vue отображать компоненты в своей
      памяти перед обновлением браузера. В сочетании с системой реактивности Vue может рассчитать минимальное количество
      компонентов для повторного рендеринга и применить минимальное количество манипуляций с
      DOM при изменении состояния приложения.
    </p>
    <p>
      Среди известных приложений Vue.js пользуется меньшей популярностью, однако всё равно нашел своих поклонников:
    </p>
    <ul>
      <li
        v-for="link in vue"
        :key="link.link"
      >
        <a :href="link.link" target="_blank">
          {{ link.title }}
        </a>
      </li>
      <li>
        И, конечно же, данный сайт, на котором Вы сейчас читаете этот материал :)
      </li>
    </ul>
    <p>
      В целом, JavaScript фреймворки сейчас пользуются огромной популярностью среди разработчиков и различных компаний.
      Они постоянно развиваются и усовершенствуются, делая разработку легче и быстрее.
    </p>
    <h2>Список источников</h2>
    <ol>
      <li
        v-for="link in links"
        :key="link.link"
      >
        <a :href="link.link" target="_blank">
          {{ link.title }}
        </a>
      </li>
    </ol>
    <h2>Ссылки на подобные работы магистров ДонНТУ</h2>
    <ol>
      <li
        v-for="link in mag"
        :key="link.link"
      >
        <a :href="link.link" target="_blank">
          {{ link.title }}
        </a>
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
      react: [
        {
          title: 'Facebook',
          link: 'https://www.facebook.com/'
        },
        {
          title: 'Instagram',
          link: 'https://www.instagram.com/'
        },
        {
          title: 'Netflix',
          link: 'https://www.netflix.com/'
        },
        {
          title: 'New York Times',
          link: 'https://www.nytimes.com/'
        },
        {
          title: 'WhatsApp',
          link: 'https://web.whatsapp.com/'
        },
        {
          title: 'Dropbox',
          link: 'https://www.dropbox.com/ru/'
        }
      ],
      vue: [
        {
          title: '9gag',
          link: 'https://9gag.com/'
        },
        {
          title: 'Behance',
          link: 'https://www.behance.net/'
        },
        {
          title: 'Nintendo',
          link: 'https://www.nintendo.com/'
        },
        {
          title: 'Chess',
          link: 'https://www.chess.com/'
        },
        {
          title: 'Gitlab',
          link: 'https://about.gitlab.com/'
        },
        {
          title: 'Wizzair',
          link: 'https://wizzair.com/'
        },
        {
          title: 'Font Awesome',
          link: 'https://fontawesome.com/'
        },
        {
          title: 'Laravel',
          link: 'https://laravel.com/'
        },
        {
          title: 'Laracasts',
          link: 'https://laracasts.com/'
        }
      ],
      links: [
        {
          title: 'Современный учебник JavaScript',
          link: 'https://learn.javascript.ru/'
        },
        {
          title: 'Веб-технологии для разработчиков',
          link: 'https://developer.mozilla.org/ru/docs/Web'
        },
        {
          title: 'Википедия – React',
          link: 'https://ru.wikipedia.org/wiki/React'
        },
        {
          title: 'Википедия – Vue.js',
          link: 'https://en.wikipedia.org/wiki/Vue.js'
        },
        {
          title: '7 известных приложений использующих ReactJS в наши дни',
          link: 'https://favicon.tech/7-izvestnyh-prilozhenij-ispolzuyushhih-reactjs/'
        },
        {
          title: 'Обзор Vue.js',
          link: 'https://timeweb.com/ru/community/articles/obzor-vue-js-1'
        },
        {
          title: 'Top 9 Websites Built using Vue.JS',
          link: 'https://www.techuz.com/blog/top-9-websites-built-using-vue-js/'
        }
      ],
      mag: [
        {
          title: 'Панфилов Александр Юрьевич – Знакомство с миром веб-программирования',
          link: 'http://masters.donntu.org/2017/fkita/panfilov/ind/index.htm'
        },
        {
          title: 'Ковалев Данил Вадимович – Frontend разработка',
          link: 'http://masters.donntu.org/2018/fknt/kovalev/ind/index.htm'
        },
        {
          title: 'Алексеева Виктория Анатольевна – Чего хочет заказчик или веб вчера, сегодня и завтра',
          link: 'http://masters.donntu.org/2016/fknt/alekseeva/ind/index.htm'
        },
        {
          title: 'Артемов Артем Сергеевич – Опыт работы в области веб-разработки',
          link: 'http://masters.donntu.org/2011/fknt/artyomov/ind/index.htm'
        }
      ]
    }
  },
  computed: {
    titleHead () {
      return `Frontend разработка ${this.$t('titleHead')}`
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/style/var.scss";
@import "~/assets/style/media_mixin.scss";

  section {
   text-align: left;
   font-size: 1.8rem;
   line-height: 2.6rem;

   @include tablet {
    text-align: justify;
   }

   p {
     font-size: 1.8rem;
     text-indent: 2.5rem;
     line-height: 2.6rem;
     margin: 1rem 0;
   }

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
 }

 li {
   &+& {
     margin-top: .5rem;
   }
 }

 .img {
    height: auto;
    width: 100%;
    max-width: 36rem;
    margin: auto;
    display: block;

    @include tablet {
      width: auto;
      max-width: 100%;
    }
  }

   a {
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    .link-et {
      display: block;
      transition: all ease-in-out .2s;
      max-width: 36rem;
      margin: auto;

      &:hover {
        box-shadow: 0 0 5.5rem .2rem rgba(0,0,0,.5);
      }
    }
</style>
