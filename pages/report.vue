<template>
  <section>
    <h1>Отчет об информационном поиске</h1>
    <p>
      Представленный отчет позволяет оценить информационную ситуацию по теме магистерской работы.
      Он является основным документальным подтверждением глубины
      и полноты информационного поиска, а также служит для фиксации текущей ситуации в исследуемой области.
    </p>
    <p>
      Поиск выполнен с использованием четырех поисковых систем (Google, Яндекс, Bing, Meta).
      Результаты сведены в таблицу. Всего произведено 12 запросов, имеющих отношение к магистерской работе.
      Из них три запроса соответствует названию магистерской работы на трех языках,
      три запроса с ФИО руководителя, а также шесть запросов с ключевыми понятиями по теме магистерской работы.
    </p>
    <p>
      Ниже приведены две таблицы с отчетами о поиске, которые разделяет временной промежуток в полтора месяца,
      а также ряд диаграмм, которые позволяют сравнить основные изменения, произошедшие за этот период.
    </p>
    <h2>
      Отчет о поиске за 27.09.2019 г.
    </h2>
    <component :is="tableComponent" :report="report1" class="app-table" />
    <h2>
      Отчет о поиске за 10.11.2019 г.
    </h2>
    <component :is="tableComponent" :report="report2" class="app-table" />
    <h2>
      Анализ результатов
    </h2>
    <p>
      Сравнивая результаты запросов по различным поисковым системам, можно прийти к выводу, ч
      то наилучшие результаты показала система Google.
      Во всех случаях было найдено достаточное количество документов на всех языках.
    </p>
    <p>
      Необходимо отметить, что поисковая система Яндекс при большом числе найденных результатов
      не дает возможности зафиксировать их точное количество. Поэтому в таблице для Яндекса и приведены
      приблизительные значения, которые предоставляет поисковая система.
    </p>
    <p>
      При сравнении и анализе результатов в отчетах о поиске, которые разделяют два месяца,
      необходимо отметить, что для всех поисковых запросов количество найденных результатов в
      некотрых случаях выросло, а в некоторых снизилось.
      Диаграммы сравнения результатов поиска для каждого языка приведены ниже.
    </p>
    <img src="~/assets/imgs/report_1.png" alt="Отчет" class="report">
    <p>
      Из диаграммы можно сделать вывод, что максимальный рост поисковой выдачи не превышает 100%,
      а для некоторых запросов количество найденных результатов либо осталось неизменным, либо уменьшилось.
    </p>
    <p>
      Диаграмма также позволяет оценить изменения для каждого выполненного запроса.
    </p>
    <p>
      Так, количество найденых результатов в поисковой системе <a href="https://www.google.com/" target="_blank">Google</a>
      по запросу <q>Metrological reliability</q> выросло на 22%,
      в то же время количество результатов, найденых в поисковой системе
      <a href="https://yandex.ua/" target="_blank">Яндекс</a>, упало на 49%.
    </p>
    <p>
      А по запросу <q>Исследование и разработка методов и средств метрологической надежности оптического адсорбционного шахтного метанометра</q>
      дела обстоят иначе: в поисковой системе <a href="https://www.google.com/" target="_blank">Google</a>
      количество найденных результатов уменьшилось всего на 1.5%, в то время, как в поисковой системе
      <a href="https://yandex.ua/" target="_blank">Яндекс</a> количество результатов возросло на 18%.
    </p>
    <p>
      В целом, прослеживаются такие тенденции:
    </p>
    <ul>
      <li>
        количество найденных результатов в посковой системе <a href="https://yandex.ua/" target="_blank">Яндекс</a>
        практически по всем запросам снизилось;
      </li>
      <li>
        количество найденных результатов в посковой системе <a href="https://www.google.com/" target="_blank">Google</a>,
        в основном, возросло;
      </li>
      <li>
        в поисковых системах <a href="https://www.bing.com/" target="_blank">Bing</a> и
        <a href="https://meta.ua/" target="_blank">Meta</a> количество найденых результатов,
        либо осталось неизменными, либо возросло незначительно. Однако, например, по запросу
        <q>Optical Absorption Shaft Methane Meter</q> количесво результатов возросло на
        49% и 100%, соответственно. Случаи, когда на диаграмме зафиксирован рост количества
        результатов на 100%, по факту количество изменилось лишь на еденицу (при первом поиске было ноль результатов,
        при втором – один).
      </li>
    </ul>
  </section>
</template>

<script>
import tableMobile from '~/components/report/tableMobile.vue'
import tableDesktop from '~/components/report/tableDesktop.vue'
import { mapState } from 'vuex'

export default {
  head () {
    return {
      title: this.titleHead
    }
  },
  data () {
    return {
      report1: {
        ru: [
          {
            title: 'Исследование и разработка методов и средств метрологической надежности оптического адсорбционного шахтного метанометра',
            links: [
              {
                text: '69',
                link: 'https://www.google.com/search?q=%D0%98%D1%81%D1%81%D0%BB%D0%B5%D0%B4%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5+%D0%B8+%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0+%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D0%BE%D0%B2+%D0%B8+%D1%81%D1%80%D0%B5%D0%B4%D1%81%D1%82%D0%B2+%D0%BC%D0%B5%D1%82%D1%80%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B9+%D0%BD%D0%B0%D0%B4%D0%B5%D0%B6%D0%BD%D0%BE%D1%81%D1%82%D0%B8+%D0%BE%D0%BF%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B3%D0%BE+%D0%B0%D0%B4%D1%81%D0%BE%D1%80%D0%B1%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE+%D1%88%D0%B0%D1%85%D1%82%D0%BD%D0%BE%D0%B3%D0%BE+%D0%BC%D0%B5%D1%82%D0%B0%D0%BD%D0%BE%D0%BC%D0%B5%D1%82%D1%80%D0%B0&sxsrf=ACYBGNTBOCLFRI6dvl_lD_KSH0ax_v5EDg:1569561982393&source=lnt&tbs=lr:lang_1ru&lr=lang_ru&sa=X&ved=0ahUKEwi8i6eDovDkAhUis4sKHYkrBCEQpwUIKQ&biw=1366&bih=657'
              },
              {
                text: '≈ 850 тыс',
                link: 'https://yandex.ua/search/?text=%D0%98%D1%81%D1%81%D0%BB%D0%B5%D0%B4%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5%20%D0%B8%20%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0%20%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D0%BE%D0%B2%20%D0%B8%20%D1%81%D1%80%D0%B5%D0%B4%D1%81%D1%82%D0%B2%20%D0%BC%D0%B5%D1%82%D1%80%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B9%20%D0%BD%D0%B0%D0%B4%D0%B5%D0%B6%D0%BD%D0%BE%D1%81%D1%82%D0%B8%20%D0%BE%D0%BF%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B3%D0%BE%20%D0%B0%D0%B4%D1%81%D0%BE%D1%80%D0%B1%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE%20%D1%88%D0%B0%D1%85%D1%82%D0%BD%D0%BE%D0%B3%D0%BE%20%D0%BC%D0%B5%D1%82%D0%B0%D0%BD%D0%BE%D0%BC%D0%B5%D1%82%D1%80%D0%B0&lr=142&lang=ru'
              },
              {
                text: '0',
                link: 'https://www.bing.com/search?q=%d0%98%d1%81%d1%81%d0%bb%d0%b5%d0%b4%d0%be%d0%b2%d0%b0%d0%bd%d0%b8%d0%b5+%d0%b8+%d1%80%d0%b0%d0%b7%d1%80%d0%b0%d0%b1%d0%be%d1%82%d0%ba%d0%b0+%d0%bc%d0%b5%d1%82%d0%be%d0%b4%d0%be%d0%b2+%d0%b8+%d1%81%d1%80%d0%b5%d0%b4%d1%81%d1%82%d0%b2+%d0%bc%d0%b5%d1%82%d1%80%d0%be%d0%bb%d0%be%d0%b3%d0%b8%d1%87%d0%b5%d1%81%d0%ba%d0%be%d0%b9+%d0%bd%d0%b0%d0%b4%d0%b5%d0%b6%d0%bd%d0%be%d1%81%d1%82%d0%b8+%d0%be%d0%bf%d1%82%d0%b8%d1%87%d0%b5%d1%81%d0%ba%d0%be%d0%b3%d0%be+%d0%b0%d0%b4%d1%81%d0%be%d1%80%d0%b1%d1%86%d0%b8%d0%be%d0%bd%d0%bd%d0%be%d0%b3%d0%be+%d1%88%d0%b0%d1%85%d1%82%d0%bd%d0%be%d0%b3%d0%be+%d0%bc%d0%b5%d1%82%d0%b0%d0%bd%d0%be%d0%bc%d0%b5%d1%82%d1%80%d0%b0&FORM=HDRSC1'
              },
              {
                text: '0',
                link: 'https://search.meta.ua/search.asp?q=lang%3Drussian+%28%C8%F1%F1%EB%E5%E4%EE%E2%E0%ED%E8%E5+%E8+%F0%E0%E7%F0%E0%E1%EE%F2%EA%E0+%EC%E5%F2%EE%E4%EE%E2+%E8+%F1%F0%E5%E4%F1%F2%E2+%EC%E5%F2%F0%EE%EB%EE%E3%E8%F7%E5%F1%EA%EE%E9+%ED%E0%E4%E5%E6%ED%EE%F1%F2%E8+%EE%EF%F2%E8%F7%E5%F1%EA%EE%E3%EE+%E0%E4%F1%EE%F0%E1%F6%E8%EE%ED%ED%EE%E3%EE+%F8%E0%F5%F2%ED%EE%E3%EE+%EC%E5%F2%E0%ED%EE%EC%E5%F2%F0%E0%29&rgn=all&dir=all&period=&m='
              }
            ]
          },
          {
            title: 'Хламов Михаил Георгиевич, ДонНТУ',
            links: [
              {
                text: '318',
                link: 'https://www.google.com/search?lr=lang_ru&hl=ru&as_qdr=all&biw=1366&bih=657&tbs=lr%3Alang_1ru&sxsrf=ACYBGNQJWj9W8tjLx_ws_VhkMK92hgFvhA%3A1568959293976&ei=PWuEXdGjO4eHmwXBg48Q&q=%D0%A5%D0%BB%D0%B0%D0%BC%D0%BE%D0%B2+%D0%9C%D0%B8%D1%85%D0%B0%D0%B8%D0%BB+%D0%93%D0%B5%D0%BE%D1%80%D0%B3%D0%B8%D0%B5%D0%B2%D0%B8%D1%87%2C+%D0%94%D0%BE%D0%BD%D0%9D%D0%A2%D0%A3&oq=%D0%A5%D0%BB%D0%B0%D0%BC%D0%BE%D0%B2+%D0%9C%D0%B8%D1%85%D0%B0%D0%B8%D0%BB+%D0%93%D0%B5%D0%BE%D1%80%D0%B3%D0%B8%D0%B5%D0%B2%D0%B8%D1%87%2C+%D0%94%D0%BE%D0%BD%D0%9D%D0%A2%D0%A3&gs_l=psy-ab.12...1768.1768..2711...0.0..0.114.114.0j1......0....2j1..gws-wiz.4kY4QM4M7CU&ved=0ahUKEwiRtonr3N7kAhWHw6YKHcHBAwIQ4dUDCAs'
              },
              {
                text: '≈ 55 тыс',
                link: 'https://yandex.ua/search/?text=%D0%A5%D0%BB%D0%B0%D0%BC%D0%BE%D0%B2%20%D0%9C%D0%B8%D1%85%D0%B0%D0%B8%D0%BB%20%D0%93%D0%B5%D0%BE%D1%80%D0%B3%D0%B8%D0%B5%D0%B2%D0%B8%D1%87%2C%20%D0%94%D0%BE%D0%BD%D0%9D%D0%A2%D0%A3&lr=142&lang=ru'
              },
              {
                text: '7',
                link: 'https://www.bing.com/search?q=%D0%A5%D0%BB%D0%B0%D0%BC%D0%BE%D0%B2+%D0%9C%D0%B8%D1%85%D0%B0%D0%B8%D0%BB+%D0%93%D0%B5%D0%BE%D1%80%D0%B3%D0%B8%D0%B5%D0%B2%D0%B8%D1%87%2C+%D0%94%D0%BE%D0%BD%D0%9D%D0%A2%D0%A3&qs=n&form=QBRE&filt=custom&sp=-1&pq=%D1%85%D0%BB%D0%B0%D0%BC%D0%BE%D0%B2+%D0%BC%D0%B8%D1%85%D0%B0%D0%B8%D0%BB+%D0%B3%D0%B5%D0%BE%D1%80%D0%B3%D0%B8%D0%B5%D0%B2%D0%B8%D1%87%2C+%D0%B4%D0%BE%D0%BD%D0%BD%D1%82%D1%83&sc=0-32&sk=&cvid=93A1954F9E784C0B8A3E8668BE5EB7EC'
              },
              {
                text: '8',
                link: 'https://search.meta.ua/search.asp?q=lang%3Drussian+%28%D5%EB%E0%EC%EE%E2+%CC%E8%F5%E0%E8%EB+%C3%E5%EE%F0%E3%E8%E5%E2%E8%F7%2C+%C4%EE%ED%CD%D2%D3%29&rgn=all&dir=all&period=&m='
              }
            ]
          },
          {
            title: 'Метрологическая надежность',
            links: [
              {
                text: '3 040 000',
                link: 'https://www.google.com/search?lr=lang_ru&biw=1366&bih=657&tbs=lr%3Alang_1ru&sxsrf=ACYBGNT3fex6mfvyfDG1-L4q62Jh_7Xa2A%3A1569562002981&ei=kp2NXam_O-nGrgT3mKvoDA&q=%D0%9C%D0%B5%D1%82%D1%80%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F+%D0%BD%D0%B0%D0%B4%D0%B5%D0%B6%D0%BD%D0%BE%D1%81%D1%82%D1%8C&oq=%D0%9C%D0%B5%D1%82%D1%80%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F+%D0%BD%D0%B0%D0%B4%D0%B5%D0%B6%D0%BD%D0%BE%D1%81%D1%82%D1%8C&gs_l=psy-ab.3..0l2j0i22i30l6.31918.31918..32786...0.0..0.121.121.0j1......0....2j1..gws-wiz.euDN9ffOGAg&ved=0ahUKEwip0I-NovDkAhVpo4sKHXfMCs0Q4dUDCAs&uact=5'
              },
              {
                text: '≈ 843 тыс',
                link: 'https://yandex.ua/search/?text=%D0%9C%D0%B5%D1%82%D1%80%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BD%D0%B0%D0%B4%D0%B5%D0%B6%D0%BD%D0%BE%D1%81%D1%82%D1%8C&lr=142&lang=ru'
              },
              {
                text: '21 300',
                link: 'https://www.bing.com/search?q=%D0%9C%D0%B5%D1%82%D1%80%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F+%D0%BD%D0%B0%D0%B4%D0%B5%D0%B6%D0%BD%D0%BE%D1%81%D1%82%D1%8C&qs=n&form=QBRE&sp=-1&pq=%D0%BC%D0%B5%D1%82%D1%80%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F+%D0%BD%D0%B0%D0%B4%D0%B5%D0%B6%D0%BD%D0%BE%D1%81%D1%82%D1%8C&sc=0-26&sk=&cvid=2F62B79E2E2F4FA8BA7F26D951CDF0F9'
              },
              {
                text: '36 600',
                link: 'https://search.meta.ua/search.asp?q=lang%3Drussian+%28%D0%9C%D0%B5%D1%82%D1%80%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F+%D0%BD%D0%B0%D0%B4%D0%B5%D0%B6%D0%BD%D0%BE%D1%81%D1%82%D1%8C%29&cof=FORID%3A9'
              }
            ]
          },
          {
            title: 'Оптический абсорбционный шахтный метанометр',
            links: [
              {
                text: '159',
                link: 'https://www.google.com/search?lr=lang_ru&biw=1366&bih=657&tbs=lr%3Alang_1ru&sxsrf=ACYBGNQhWkSeUQZDZl1zVg3Eii-_VxdBmg%3A1569562037521&ei=tZ2NXYi6H6vqrgSCmKjoAw&q=%D0%9E%D0%BF%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9+%D0%B0%D0%B1%D1%81%D0%BE%D1%80%D0%B1%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D1%8B%D0%B9+%D1%88%D0%B0%D1%85%D1%82%D0%BD%D1%8B%D0%B9+%D0%BC%D0%B5%D1%82%D0%B0%D0%BD%D0%BE%D0%BC%D0%B5%D1%82%D1%80&oq=%D0%9E%D0%BF%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9+%D0%B0%D0%B1%D1%81%D0%BE%D1%80%D0%B1%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D1%8B%D0%B9+%D1%88%D0%B0%D1%85%D1%82%D0%BD%D1%8B%D0%B9+%D0%BC%D0%B5%D1%82%D0%B0%D0%BD%D0%BE%D0%BC%D0%B5%D1%82%D1%80&gs_l=psy-ab.3...33573.33573..34216...0.1..0.138.138.0j1......0....2j1..gws-wiz.......0i71.mwEC4vriUTY&ved=0ahUKEwjI6MudovDkAhUrtYsKHQIMCj0Q4dUDCAs&uact=5'
              },
              {
                text: '≈ 77 тыс',
                link: 'https://yandex.ua/search/?text=%D0%9E%D0%BF%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9%20%D0%B0%D0%B1%D1%81%D0%BE%D1%80%D0%B1%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D1%8B%D0%B9%20%D1%88%D0%B0%D1%85%D1%82%D0%BD%D1%8B%D0%B9%20%D0%BC%D0%B5%D1%82%D0%B0%D0%BD%D0%BE%D0%BC%D0%B5%D1%82%D1%80&lr=142&lang=ru'
              },
              {
                text: '9',
                link: 'https://www.bing.com/search?q=%D0%9E%D0%BF%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9+%D0%B0%D0%B1%D1%81%D0%BE%D1%80%D0%B1%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D1%8B%D0%B9+%D1%88%D0%B0%D1%85%D1%82%D0%BD%D1%8B%D0%B9+%D0%BC%D0%B5%D1%82%D0%B0%D0%BD%D0%BE%D0%BC%D0%B5%D1%82%D1%80&qs=n&form=QBRE&filt=custom&sp=-1&pq=%D0%BE%D0%BF%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9+%D0%B0%D0%B1%D1%81%D0%BE%D1%80%D0%B1%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D1%8B%D0%B9+%D1%88%D0%B0%D1%85%D1%82%D0%BD%D1%8B%D0%B9+%D0%BC%D0%B5%D1%82%D0%B0%D0%BD%D0%BE%D0%BC%D0%B5%D1%82%D1%80&sc=0-43&sk=&cvid=0DFD359D787B4513BCDD2D76E0F4DF25'
              },
              {
                text: '2',
                link: 'https://search.meta.ua/search.asp?q=lang%3Drussian+%28%CE%EF%F2%E8%F7%E5%F1%EA%E8%E9+%E0%E1%F1%EE%F0%E1%F6%E8%EE%ED%ED%FB%E9+%F8%E0%F5%F2%ED%FB%E9+%EC%E5%F2%E0%ED%EE%EC%E5%F2%F0%29&rgn=all&dir=all&period=&m='
              }
            ]
          }
        ],
        ua: [
          {
            title: 'Дослідження і розробка методів і засобів метрологічної надійності оптичного адсорбционного шахтного метанометра',
            links: [
              {
                text: '8',
                link: 'https://www.google.com/search?lr=lang_uk&hl=ru&as_qdr=all&tbs=lr%3Alang_1uk&sxsrf=ACYBGNQJPYE80FN7a0z0WyRsrnE-lBnmHQ%3A1569562127226&ei=D56NXaq0DeGsrgTdvIq4AQ&q=%D0%94%D0%BE%D1%81%D0%BB%D1%96%D0%B4%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F+%D1%96+%D1%80%D0%BE%D0%B7%D1%80%D0%BE%D0%B1%D0%BA%D0%B0+%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D1%96%D0%B2+%D1%96+%D0%B7%D0%B0%D1%81%D0%BE%D0%B1%D1%96%D0%B2+%D0%BC%D0%B5%D1%82%D1%80%D0%BE%D0%BB%D0%BE%D0%B3%D1%96%D1%87%D0%BD%D0%BE%D1%97+%D0%BD%D0%B0%D0%B4%D1%96%D0%B9%D0%BD%D0%BE%D1%81%D1%82%D1%96+%D0%BE%D0%BF%D1%82%D0%B8%D1%87%D0%BD%D0%BE%D0%B3%D0%BE+%D0%B0%D0%B4%D1%81%D0%BE%D1%80%D0%B1%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE+%D1%88%D0%B0%D1%85%D1%82%D0%BD%D0%BE%D0%B3%D0%BE+%D0%BC%D0%B5%D1%82%D0%B0%D0%BD%D0%BE%D0%BC%D0%B5%D1%82%D1%80%D0%B0&oq=%D0%94%D0%BE%D1%81%D0%BB%D1%96%D0%B4%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F+%D1%96+%D1%80%D0%BE%D0%B7%D1%80%D0%BE%D0%B1%D0%BA%D0%B0+%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D1%96%D0%B2+%D1%96+%D0%B7%D0%B0%D1%81%D0%BE%D0%B1%D1%96%D0%B2+%D0%BC%D0%B5%D1%82%D1%80%D0%BE%D0%BB%D0%BE%D0%B3%D1%96%D1%87%D0%BD%D0%BE%D1%97+%D0%BD%D0%B0%D0%B4%D1%96%D0%B9%D0%BD%D0%BE%D1%81%D1%82%D1%96+%D0%BE%D0%BF%D1%82%D0%B8%D1%87%D0%BD%D0%BE%D0%B3%D0%BE+%D0%B0%D0%B4%D1%81%D0%BE%D1%80%D0%B1%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE+%D1%88%D0%B0%D1%85%D1%82%D0%BD%D0%BE%D0%B3%D0%BE+%D0%BC%D0%B5%D1%82%D0%B0%D0%BD%D0%BE%D0%BC%D0%B5%D1%82%D1%80%D0%B0&gs_l=psy-ab.3...34107.34107..34983...0.0..0.0.0.......0....2j1..gws-wiz.i1wJMNkZSZI&ved=0ahUKEwjq967IovDkAhVhlosKHV2eAhcQ4dUDCAs&uact=5'
              },
              {
                text: '≈ 100 тыс',
                link: 'https://yandex.ua/search/?text=%D0%94%D0%BE%D1%81%D0%BB%D1%96%D0%B4%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F%20%D1%96%20%D1%80%D0%BE%D0%B7%D1%80%D0%BE%D0%B1%D0%BA%D0%B0%20%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D1%96%D0%B2%20%D1%96%20%D0%B7%D0%B0%D1%81%D0%BE%D0%B1%D1%96%D0%B2%20%D0%BC%D0%B5%D1%82%D1%80%D0%BE%D0%BB%D0%BE%D0%B3%D1%96%D1%87%D0%BD%D0%BE%D1%97%20%D0%BD%D0%B0%D0%B4%D1%96%D0%B9%D0%BD%D0%BE%D1%81%D1%82%D1%96%20%D0%BE%D0%BF%D1%82%D0%B8%D1%87%D0%BD%D0%BE%D0%B3%D0%BE%20%D0%B0%D0%B4%D1%81%D0%BE%D1%80%D0%B1%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE%20%D1%88%D0%B0%D1%85%D1%82%D0%BD%D0%BE%D0%B3%D0%BE%20%D0%BC%D0%B5%D1%82%D0%B0%D0%BD%D0%BE%D0%BC%D0%B5%D1%82%D1%80%D0%B0&lr=142&lang=uk'
              },
              {
                text: '0',
                link: 'https://www.bing.com/search?q=%D0%94%D0%BE%D1%81%D0%BB%D1%96%D0%B4%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F+%D1%96+%D1%80%D0%BE%D0%B7%D1%80%D0%BE%D0%B1%D0%BA%D0%B0+%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D1%96%D0%B2+%D1%96+%D0%B7%D0%B0%D1%81%D0%BE%D0%B1%D1%96%D0%B2+%D0%BC%D0%B5%D1%82%D1%80%D0%BE%D0%BB%D0%BE%D0%B3%D1%96%D1%87%D0%BD%D0%BE%D1%97+%D0%BD%D0%B0%D0%B4%D1%96%D0%B9%D0%BD%D0%BE%D1%81%D1%82%D1%96+%D0%BE%D0%BF%D1%82%D0%B8%D1%87%D0%BD%D0%BE%D0%B3%D0%BE+%D0%B0%D0%B4%D1%81%D0%BE%D1%80%D0%B1%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE+%D1%88%D0%B0%D1%85%D1%82%D0%BD%D0%BE%D0%B3%D0%BE+%D0%BC%D0%B5%D1%82%D0%B0%D0%BD%D0%BE%D0%BC%D0%B5%D1%82%D1%80%D0%B0&qs=n&form=QBRE&filt=custom&sp=-1&pq=%D0%B4%D0%BE%D1%81%D0%BB%D1%96%D0%B4%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F+%D1%96+%D1%80%D0%BE%D0%B7%D1%80%D0%BE%D0%B1%D0%BA%D0%B0+%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D1%96%D0%B2+%D1%96+%D0%B7%D0%B0%D1%81%D0%BE%D0%B1%D1%96%D0%B2+%D0%BC%D0%B5%D1%82%D1%80%D0%BE%D0%BB%D0%BE%D0%B3%D1%96%D1%87%D0%BD%D0%BE%D1%97+%D0%BD%D0%B0%D0%B4%D1%96%D0%B9%D0%BD%D0%BE%D1%81%D1%82%D1%96+%D0%BE%D0%BF%D1%82%D0%B8%D1%87%D0%BD%D0%BE%D0%B3%D0%BE+%D0%B0%D0%B4%D1%81%D0%BE%D1%80%D0%B1%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE+%D1%88%D0%B0%D1%85%D1%82%D0%BD%D0%BE%D0%B3%D0%BE+%D0%BC%D0%B5%D1%82%D0%B0%D0%BD%D0%BE%D0%BC%D0%B5%D1%82%D1%80%D0%B0&sc=0-111&sk=&cvid=FCFB6C3F42ED49D7A786B7E0765FD8F2'
              },
              {
                text: '0',
                link: 'https://search.meta.ua/search.asp?q=lang%3Dukrainian+%28%D0%94%D0%BE%D1%81%D0%BB%D1%96%D0%B4%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F+%D1%96+%D1%80%D0%BE%D0%B7%D1%80%D0%BE%D0%B1%D0%BA%D0%B0+%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D1%96%D0%B2+%D1%96+%D0%B7%D0%B0%D1%81%D0%BE%D0%B1%D1%96%D0%B2+%D0%BC%D0%B5%D1%82%D1%80%D0%BE%D0%BB%D0%BE%D0%B3%D1%96%D1%87%D0%BD%D0%BE%D1%97+%D0%BD%D0%B0%D0%B4%D1%96%D0%B9%D0%BD%D0%BE%D1%81%D1%82%D1%96+%D0%BE%D0%BF%D1%82%D0%B8%D1%87%D0%BD%D0%BE%D0%B3%D0%BE+%D0%B0%D0%B4%D1%81%D0%BE%D1%80%D0%B1%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE+%D1%88%D0%B0%D1%85%D1%82%D0%BD%D0%BE%D0%B3%D0%BE+%D0%BC%D0%B5%D1%82%D0%B0%D0%BD%D0%BE%D0%BC%D0%B5%D1%82%D1%80%D0%B0%29&cof=FORID%3A9'
              }
            ]
          },
          {
            title: 'Хламов Михайло Георгійович, ДонНТУ',
            links: [
              {
                text: '112',
                link: 'https://www.google.com/search?lr=lang_uk&hl=ru&as_qdr=all&tbs=lr%3Alang_1uk&sxsrf=ACYBGNSQSIw3E1f0W2-LRWIDNQYwXfg2SQ%3A1573393310958&ei=nhPIXeOGOvCPmwXa9YPYCw&q=%D0%A5%D0%BB%D0%B0%D0%BC%D0%BE%D0%B2+%D0%9C%D0%B8%D1%85%D0%B0%D0%B9%D0%BB%D0%BE+%D0%93%D0%B5%D0%BE%D1%80%D0%B3%D1%96%D0%B9%D0%BE%D0%B2%D0%B8%D1%87%2C+%D0%94%D0%BE%D0%BD%D0%9D%D0%A2%D0%A3&oq=%D0%A5%D0%BB%D0%B0%D0%BC%D0%BE%D0%B2+%D0%9C%D0%B8%D1%85%D0%B0%D0%B9%D0%BB%D0%BE+%D0%93%D0%B5%D0%BE%D1%80%D0%B3%D1%96%D0%B9%D0%BE%D0%B2%D0%B8%D1%87%2C+%D0%94%D0%BE%D0%BD%D0%9D%D0%A2%D0%A3&gs_l=psy-ab.12..35i39l2.13595.13595..14930...0.0..0.74.74.1......0....2j1..gws-wiz.hPa_B2osoQk&ved=0ahUKEwjjzZDr4t_lAhXwx6YKHdr6ALsQ4dUDCAs'
              },
              {
                text: '≈ 25 тыс',
                link: 'https://yandex.ua/search/?text=%D0%A5%D0%BB%D0%B0%D0%BC%D0%BE%D0%B2%20%D0%9C%D0%B8%D1%85%D0%B0%D0%B9%D0%BB%D0%BE%20%D0%93%D0%B5%D0%BE%D1%80%D0%B3%D1%96%D0%B9%D0%BE%D0%B2%D0%B8%D1%87%2C%20%D0%94%D0%BE%D0%BD%D0%9D%D0%A2%D0%A3&lr=142&lang=uk'
              },
              {
                text: '2',
                link: 'https://www.bing.com/search?q=%D0%A5%D0%BB%D0%B0%D0%BC%D0%BE%D0%B2+%D0%9C%D0%B8%D1%85%D0%B0%D0%B9%D0%BB%D0%BE+%D0%93%D0%B5%D0%BE%D1%80%D0%B3%D1%96%D0%B9%D0%BE%D0%B2%D0%B8%D1%87%2C+%D0%94%D0%BE%D0%BD%D0%9D%D0%A2%D0%A3&qs=n&form=QBRE&sp=-1&pq=%D1%85%D0%BB%D0%B0%D0%BC%D0%BE%D0%B2+%D0%BC%D0%B8%D1%85%D0%B0%D0%B9%D0%BB%D0%BE+%D0%B3%D0%B5%D0%BE%D1%80%D0%B3%D1%96%D0%B9%D0%BE%D0%B2%D0%B8%D1%87%2C+%D0%B4%D0%BE%D0%BD%D0%BD%D1%82%D1%83&sc=0-34&sk=&cvid=7DD402E47D204B13A61B4253B97F599D&filt=custom'
              },
              {
                text: '1',
                link: 'https://search.meta.ua/search.asp?q=lang%3Dukrainian+%28%D0%A5%D0%BB%D0%B0%D0%BC%D0%BE%D0%B2+%D0%9C%D0%B8%D1%85%D0%B0%D0%B9%D0%BB%D0%BE+%D0%93%D0%B5%D0%BE%D1%80%D0%B3%D1%96%D0%B9%D0%BE%D0%B2%D0%B8%D1%87%2C+%D0%94%D0%BE%D0%BD%D0%9D%D0%A2%D0%A3%29&cof=FORID%3A9'
              }
            ]
          },
          {
            title: 'Метрологічна надійність',
            links: [
              {
                text: '136 000',
                link: 'https://www.google.com/search?lr=lang_uk&hl=ru&as_qdr=all&tbs=lr%3Alang_1uk&sxsrf=ACYBGNRdu8nhKFhEVfzbuHpxVIDRNrg_cg%3A1569562163582&ei=M56NXf2XI4XrrgTDo4jwCQ&q=%D0%9C%D0%B5%D1%82%D1%80%D0%BE%D0%BB%D0%BE%D0%B3%D1%96%D1%87%D0%BD%D0%B0+%D0%BD%D0%B0%D0%B4%D1%96%D0%B9%D0%BD%D1%96%D1%81%D1%82%D1%8C&oq=%D0%9C%D0%B5%D1%82%D1%80%D0%BE%D0%BB%D0%BE%D0%B3%D1%96%D1%87%D0%BD%D0%B0+%D0%BD%D0%B0%D0%B4%D1%96%D0%B9%D0%BD%D1%96%D1%81%D1%82%D1%8C&gs_l=psy-ab.3..0j0i22i30.20434.20434..21724...0.0..0.138.138.0j1......0....2j1..gws-wiz.PeqowONTjbc&ved=0ahUKEwi9_dnZovDkAhWFtYsKHcMRAp4Q4dUDCAs&uact=5'
              },
              {
                text: '≈ 79 тыс',
                link: 'https://yandex.ua/search/?text=%D0%9C%D0%B5%D1%82%D1%80%D0%BE%D0%BB%D0%BE%D0%B3%D1%96%D1%87%D0%BD%D0%B0%20%D0%BD%D0%B0%D0%B4%D1%96%D0%B9%D0%BD%D1%96%D1%81%D1%82%D1%8C&lr=142&lang=uk'
              },
              {
                text: '3 030',
                link: 'https://www.bing.com/search?q=%D0%9C%D0%B5%D1%82%D1%80%D0%BE%D0%BB%D0%BE%D0%B3%D1%96%D1%87%D0%BD%D0%B0+%D0%BD%D0%B0%D0%B4%D1%96%D0%B9%D0%BD%D1%96%D1%81%D1%82%D1%8C&qs=n&form=QBRE&filt=custom&sp=-1&pq=%D0%BC%D0%B5%D1%82%D1%80%D0%BE%D0%BB%D0%BE%D0%B3%D1%96%D1%87%D0%BD%D0%B0+%D0%BD%D0%B0%D0%B4%D1%96%D0%B9%D0%BD%D1%96%D1%81%D1%82%D1%8C&sc=0-23&sk=&cvid=3ADE80D042F648B4BFD1AEDEA2E513EC'
              },
              {
                text: '769',
                link: 'https://search.meta.ua/search.asp?q=lang%3Dukrainian+%28%D0%9C%D0%B5%D1%82%D1%80%D0%BE%D0%BB%D0%BE%D0%B3%D1%96%D1%87%D0%BD%D0%B0+%D0%BD%D0%B0%D0%B4%D1%96%D0%B9%D0%BD%D1%96%D1%81%D1%82%D1%8C%29&cof=FORID%3A9'
              }
            ]
          },
          {
            title: 'Оптичний абсорбційний шахтний метанометр',
            links: [
              {
                text: '44',
                link: 'https://www.google.com/search?lr=lang_uk&hl=ru&as_qdr=all&tbs=lr%3Alang_1uk&sxsrf=ACYBGNTKuZXvU0g5KDj4SAjvD4EXZlOYUQ%3A1569562186915&ei=Sp6NXfv7L47JrgSloLP4Cg&q=%D0%9E%D0%BF%D1%82%D0%B8%D1%87%D0%BD%D0%B8%D0%B9+%D0%B0%D0%B1%D1%81%D0%BE%D1%80%D0%B1%D1%86%D1%96%D0%B9%D0%BD%D0%B8%D0%B9+%D1%88%D0%B0%D1%85%D1%82%D0%BD%D0%B8%D0%B9+%D0%BC%D0%B5%D1%82%D0%B0%D0%BD%D0%BE%D0%BC%D0%B5%D1%82%D1%80&oq=%D0%9E%D0%BF%D1%82%D0%B8%D1%87%D0%BD%D0%B8%D0%B9+%D0%B0%D0%B1%D1%81%D0%BE%D1%80%D0%B1%D1%86%D1%96%D0%B9%D0%BD%D0%B8%D0%B9+%D1%88%D0%B0%D1%85%D1%82%D0%BD%D0%B8%D0%B9+%D0%BC%D0%B5%D1%82%D0%B0%D0%BD%D0%BE%D0%BC%D0%B5%D1%82%D1%80&gs_l=psy-ab.3...26619.30332..31111...0.0..0.187.586.0j4......0....2j1..gws-wiz.......33i160.G_YjQy_ubmY&ved=0ahUKEwj7yOLkovDkAhWOpIsKHSXQDK8Q4dUDCAs&uact=5'
              },
              {
                text: '≈ 68 тыс',
                link: 'https://yandex.ua/search/?text=%D0%9E%D0%BF%D1%82%D0%B8%D1%87%D0%BD%D0%B8%D0%B9%20%D0%B0%D0%B1%D1%81%D0%BE%D1%80%D0%B1%D1%86%D1%96%D0%B9%D0%BD%D0%B8%D0%B9%20%D1%88%D0%B0%D1%85%D1%82%D0%BD%D0%B8%D0%B9%20%D0%BC%D0%B5%D1%82%D0%B0%D0%BD%D0%BE%D0%BC%D0%B5%D1%82%D1%80&lr=142&lang=uk'
              },
              {
                text: '0',
                link: 'https://www.bing.com/search?q=%D0%9E%D0%BF%D1%82%D0%B8%D1%87%D0%BD%D0%B8%D0%B9+%D0%B0%D0%B1%D1%81%D0%BE%D1%80%D0%B1%D1%86%D1%96%D0%B9%D0%BD%D0%B8%D0%B9+%D1%88%D0%B0%D1%85%D1%82%D0%BD%D0%B8%D0%B9+%D0%BC%D0%B5%D1%82%D0%B0%D0%BD%D0%BE%D0%BC%D0%B5%D1%82%D1%80&qs=n&form=QBRE&filt=custom&sp=-1&pq=%D0%BE%D0%BF%D1%82%D0%B8%D1%87%D0%BD%D0%B8%D0%B9+%D0%B0%D0%B1%D1%81%D0%BE%D1%80%D0%B1%D1%86%D1%96%D0%B9%D0%BD%D0%B8%D0%B9+%D1%88%D0%B0%D1%85%D1%82%D0%BD%D0%B8%D0%B9+%D0%BC%D0%B5%D1%82%D0%B0%D0%BD%D0%BE%D0%BC%D0%B5%D1%82%D1%80&sc=0-40&sk=&cvid=8E3A12BAA84D4D93809ED43FA0445D79'
              },
              {
                text: '0',
                link: 'https://search.meta.ua/search.asp?q=lang%3Dukrainian+%28%D0%9E%D0%BF%D1%82%D0%B8%D1%87%D0%BD%D0%B8%D0%B9+%D0%B0%D0%B1%D1%81%D0%BE%D1%80%D0%B1%D1%86%D1%96%D0%B9%D0%BD%D0%B8%D0%B9+%D1%88%D0%B0%D1%85%D1%82%D0%BD%D0%B8%D0%B9+%D0%BC%D0%B5%D1%82%D0%B0%D0%BD%D0%BE%D0%BC%D0%B5%D1%82%D1%80%29&cof=FORID%3A9'
              }
            ]
          }
        ],
        en: [
          {
            title: 'Research and development of methods and means of metrological reliability of an optical adsorption mine methanometer',
            links: [
              {
                text: '527',
                link: 'https://www.google.com/search?lr=lang_en&hl=ru&as_qdr=all&tbs=lr%3Alang_1en&sxsrf=ACYBGNQWxe34dWfS2ft8K2EEPjem6fsZEQ%3A1569562250542&ei=ip6NXfbVIKOxrgSLgqSoBQ&q=Research+and+development+of+methods+and+means+of+metrological+reliability+of+an+optical+adsorption+mine+methanometer&oq=Research+and+development+of+methods+and+means+of+metrological+reliability+of+an+optical+adsorption+mine+methanometer&gs_l=psy-ab.12...981.981..1991...0.0..0.0.0.......0....2j1..gws-wiz.fu-F9AC0WM8&ved=0ahUKEwj2wpWDo_DkAhWjmIsKHQsBCVUQ4dUDCAs'
              },
              {
                text: '≈ 100 тыс',
                link: 'https://yandex.ua/search/?text=Research%20and%20development%20of%20methods%20and%20means%20of%20metrological%20reliability%20of%20an%20optical%20adsorption%20mine%20methanometer&lr=142&lang=en'
              },
              {
                text: '0',
                link: 'https://www.bing.com/search?q=Research+and+development+of+methods+and+means+of+metrological+reliability+of+an+optical+adsorption+mine+methanometer&qs=n&form=QBRE&filt=custom&sp=-1&pq=research+and+development+of+methods+and+means+of+metrological+reliability+of+an+optical+adsorption+mine+methanometer&sc=0-116&sk=&cvid=88BE72F124EA435D9FB0FC4736445C30'
              },
              {
                text: '146',
                link: 'https://search.meta.ua/search.asp?q=lang%3Denglish+%28Research+and++development+of+methods+and++means+of+metrological+reliability+of+an+optical+adsorption+mine+methanometer%29&cof=FORID%3A9'
              }
            ]
          },
          {
            title: 'Khlamov Michael, DonNTU',
            links: [
              {
                text: '34',
                link: 'https://www.google.com/search?lr=lang_en&hl=ru&as_qdr=all&tbs=lr%3Alang_1en&sxsrf=ACYBGNQglYZ1o5fGxuRTR6KzIbTnsSAFkA%3A1573393804114&ei=jBXIXeLQBvGKk74PqrqAgAE&q=Khlamov+Michael%2C+DonNTU&oq=Khlamov+Michael%2C+DonNTU&gs_l=psy-ab.12...47498.48717..49026...0.0..0.82.163.2......0....2j1..gws-wiz.wVHwuAyKDes&ved=0ahUKEwjixqTW5N_lAhVxxcQBHSodABAQ4dUDCAs'
              },
              {
                text: '≈ 3 млн',
                link: 'https://yandex.ua/search/?text=Khlamov%20Michael%2C%20DonNTU&lr=142&lang=en'
              },
              {
                text: '2',
                link: 'https://www.bing.com/search?q=Khlamov+Michael,+DonNTU&qs=n&form=QBRE&sp=-1&pq=khlamov+michael,+donntu&sc=0-23&sk=&cvid=9C0B75B88C0A4D9FA608539C491D5FF7&filt=custom'
              },
              {
                text: '57',
                link: 'https://search.meta.ua/search.asp?q=lang%3Denglish+%28Khlamov+Michael%2C+DonNTU%29&cof=FORID%3A9'
              }
            ]
          },
          {
            title: 'Metrological reliability',
            links: [
              {
                text: '252 000',
                link: 'https://www.google.com/search?lr=lang_en&hl=ru&as_qdr=all&tbs=lr%3Alang_1en&sxsrf=ACYBGNRidSue-6SsOPoUuve6ZJpPD_vOeQ%3A1569562253721&ei=jZ6NXaDVK_DorgTt3qWADg&q=Metrological+reliability&oq=Metrological+reliability&gs_l=psy-ab.3..0i30.15680.18787..19312...0.0..0.151.549.0j4......0....2j1..gws-wiz.......0i22i30.IbrUwTKbAMc&ved=0ahUKEwjgz9eEo_DkAhVwtIsKHW1vCeAQ4dUDCAs&uact=5'
              },
              {
                text: '≈ 589 тыс',
                link: 'https://yandex.ua/search/?text=Metrological%20reliability&lr=142&lang=en'
              },
              {
                text: '51 900',
                link: 'https://www.bing.com/search?q=Metrological+reliability&qs=n&form=QBRE&filt=custom&sp=-1&pq=metrological+reliability&sc=0-24&sk=&cvid=EF388DE14286419EA38FFF7A597C989B'
              },
              {
                text: '334 000',
                link: 'https://search.meta.ua/search.asp?q=lang%3Denglish+%28Metrological+reliability%29&cof=FORID%3A9'
              }
            ]
          },
          {
            title: 'Optical Absorption Shaft Methane Meter',
            links: [
              {
                text: '562 000',
                link: 'https://www.google.com/search?lr=lang_en&hl=ru&as_qdr=all&tbs=lr%3Alang_1en&sxsrf=ACYBGNSwvyupUWg_vtWRG-2_QTPoBeXAkw%3A1569562274397&ei=op6NXcfrF4ytrgSgs5zIDg&q=Optical+Absorption+Shaft+Methane+Meter&oq=Optical+Absorption+Shaft+Methane+Meter&gs_l=psy-ab.3..33i160.26973.26973..27880...0.0..0.174.174.0j1......0....2j1..gws-wiz.n1isijxK22g&ved=0ahUKEwjHxMWOo_DkAhWMlosKHaAZB-kQ4dUDCAs&uact=5'
              },
              {
                text: '≈3 млн',
                link: 'https://yandex.ua/search/?text=Optical%20Absorption%20Shaft%20Methane%20Meter&lr=142&lang=en'
              },
              {
                text: '49 500',
                link: 'https://www.bing.com/search?q=Optical+Absorption+Shaft+Methane+Meter&qs=n&form=QBRE&filt=custom&sp=-1&pq=optical+absorption+shaft+methane+meter&sc=0-38&sk=&cvid=569716DEE76B4515B6EA4122E6A7E463'
              },
              {
                text: '302 000',
                link: 'https://search.meta.ua/search.asp?q=lang%3Denglish+%28Optical+Absorption+Shaft+Methane+Meter%29&cof=FORID%3A9'
              }
            ]
          }
        ]
      },
      report2: {
        ru: [
          {
            title: 'Исследование и разработка методов и средств метрологической надежности оптического адсорбционного шахтного метанометра',
            links: [
              {
                text: '68',
                link: 'https://www.google.com/search?q=%D0%98%D1%81%D1%81%D0%BB%D0%B5%D0%B4%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5+%D0%B8+%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0+%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D0%BE%D0%B2+%D0%B8+%D1%81%D1%80%D0%B5%D0%B4%D1%81%D1%82%D0%B2+%D0%BC%D0%B5%D1%82%D1%80%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B9+%D0%BD%D0%B0%D0%B4%D0%B5%D0%B6%D0%BD%D0%BE%D1%81%D1%82%D0%B8+%D0%BE%D0%BF%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B3%D0%BE+%D0%B0%D0%B4%D1%81%D0%BE%D1%80%D0%B1%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE+%D1%88%D0%B0%D1%85%D1%82%D0%BD%D0%BE%D0%B3%D0%BE+%D0%BC%D0%B5%D1%82%D0%B0%D0%BD%D0%BE%D0%BC%D0%B5%D1%82%D1%80%D0%B0&sxsrf=ACYBGNTBOCLFRI6dvl_lD_KSH0ax_v5EDg:1569561982393&source=lnt&tbs=lr:lang_1ru&lr=lang_ru&sa=X&ved=0ahUKEwi8i6eDovDkAhUis4sKHYkrBCEQpwUIKQ&biw=1366&bih=657'
              },
              {
                text: '≈ 1 млн',
                link: 'https://yandex.ua/search/?text=%D0%98%D1%81%D1%81%D0%BB%D0%B5%D0%B4%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5%20%D0%B8%20%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0%20%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D0%BE%D0%B2%20%D0%B8%20%D1%81%D1%80%D0%B5%D0%B4%D1%81%D1%82%D0%B2%20%D0%BC%D0%B5%D1%82%D1%80%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B9%20%D0%BD%D0%B0%D0%B4%D0%B5%D0%B6%D0%BD%D0%BE%D1%81%D1%82%D0%B8%20%D0%BE%D0%BF%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B3%D0%BE%20%D0%B0%D0%B4%D1%81%D0%BE%D1%80%D0%B1%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE%20%D1%88%D0%B0%D1%85%D1%82%D0%BD%D0%BE%D0%B3%D0%BE%20%D0%BC%D0%B5%D1%82%D0%B0%D0%BD%D0%BE%D0%BC%D0%B5%D1%82%D1%80%D0%B0&lr=142&lang=ru'
              },
              {
                text: '0',
                link: 'https://www.bing.com/search?q=%d0%98%d1%81%d1%81%d0%bb%d0%b5%d0%b4%d0%be%d0%b2%d0%b0%d0%bd%d0%b8%d0%b5+%d0%b8+%d1%80%d0%b0%d0%b7%d1%80%d0%b0%d0%b1%d0%be%d1%82%d0%ba%d0%b0+%d0%bc%d0%b5%d1%82%d0%be%d0%b4%d0%be%d0%b2+%d0%b8+%d1%81%d1%80%d0%b5%d0%b4%d1%81%d1%82%d0%b2+%d0%bc%d0%b5%d1%82%d1%80%d0%be%d0%bb%d0%be%d0%b3%d0%b8%d1%87%d0%b5%d1%81%d0%ba%d0%be%d0%b9+%d0%bd%d0%b0%d0%b4%d0%b5%d0%b6%d0%bd%d0%be%d1%81%d1%82%d0%b8+%d0%be%d0%bf%d1%82%d0%b8%d1%87%d0%b5%d1%81%d0%ba%d0%be%d0%b3%d0%be+%d0%b0%d0%b4%d1%81%d0%be%d1%80%d0%b1%d1%86%d0%b8%d0%be%d0%bd%d0%bd%d0%be%d0%b3%d0%be+%d1%88%d0%b0%d1%85%d1%82%d0%bd%d0%be%d0%b3%d0%be+%d0%bc%d0%b5%d1%82%d0%b0%d0%bd%d0%be%d0%bc%d0%b5%d1%82%d1%80%d0%b0&FORM=HDRSC1'
              },
              {
                text: '1',
                link: 'https://search.meta.ua/search.asp?q=lang%3Drussian+%28%C8%F1%F1%EB%E5%E4%EE%E2%E0%ED%E8%E5+%E8+%F0%E0%E7%F0%E0%E1%EE%F2%EA%E0+%EC%E5%F2%EE%E4%EE%E2+%E8+%F1%F0%E5%E4%F1%F2%E2+%EC%E5%F2%F0%EE%EB%EE%E3%E8%F7%E5%F1%EA%EE%E9+%ED%E0%E4%E5%E6%ED%EE%F1%F2%E8+%EE%EF%F2%E8%F7%E5%F1%EA%EE%E3%EE+%E0%E4%F1%EE%F0%E1%F6%E8%EE%ED%ED%EE%E3%EE+%F8%E0%F5%F2%ED%EE%E3%EE+%EC%E5%F2%E0%ED%EE%EC%E5%F2%F0%E0%29&rgn=all&dir=all&period=&m='
              }
            ]
          },
          {
            title: 'Хламов Михаил Георгиевич, ДонНТУ',
            links: [
              {
                text: '360',
                link: 'https://www.google.com/search?lr=lang_ru&hl=ru&as_qdr=all&biw=1366&bih=657&tbs=lr%3Alang_1ru&sxsrf=ACYBGNQJWj9W8tjLx_ws_VhkMK92hgFvhA%3A1568959293976&ei=PWuEXdGjO4eHmwXBg48Q&q=%D0%A5%D0%BB%D0%B0%D0%BC%D0%BE%D0%B2+%D0%9C%D0%B8%D1%85%D0%B0%D0%B8%D0%BB+%D0%93%D0%B5%D0%BE%D1%80%D0%B3%D0%B8%D0%B5%D0%B2%D0%B8%D1%87%2C+%D0%94%D0%BE%D0%BD%D0%9D%D0%A2%D0%A3&oq=%D0%A5%D0%BB%D0%B0%D0%BC%D0%BE%D0%B2+%D0%9C%D0%B8%D1%85%D0%B0%D0%B8%D0%BB+%D0%93%D0%B5%D0%BE%D1%80%D0%B3%D0%B8%D0%B5%D0%B2%D0%B8%D1%87%2C+%D0%94%D0%BE%D0%BD%D0%9D%D0%A2%D0%A3&gs_l=psy-ab.12...1768.1768..2711...0.0..0.114.114.0j1......0....2j1..gws-wiz.4kY4QM4M7CU&ved=0ahUKEwiRtonr3N7kAhWHw6YKHcHBAwIQ4dUDCAs'
              },
              {
                text: '≈ 23 тыс',
                link: 'https://yandex.ua/search/?text=%D0%A5%D0%BB%D0%B0%D0%BC%D0%BE%D0%B2%20%D0%9C%D0%B8%D1%85%D0%B0%D0%B8%D0%BB%20%D0%93%D0%B5%D0%BE%D1%80%D0%B3%D0%B8%D0%B5%D0%B2%D0%B8%D1%87%2C%20%D0%94%D0%BE%D0%BD%D0%9D%D0%A2%D0%A3&lr=142&lang=ru'
              },
              {
                text: '8',
                link: 'https://www.bing.com/search?q=%D0%A5%D0%BB%D0%B0%D0%BC%D0%BE%D0%B2+%D0%9C%D0%B8%D1%85%D0%B0%D0%B8%D0%BB+%D0%93%D0%B5%D0%BE%D1%80%D0%B3%D0%B8%D0%B5%D0%B2%D0%B8%D1%87%2C+%D0%94%D0%BE%D0%BD%D0%9D%D0%A2%D0%A3&qs=n&form=QBRE&filt=custom&sp=-1&pq=%D1%85%D0%BB%D0%B0%D0%BC%D0%BE%D0%B2+%D0%BC%D0%B8%D1%85%D0%B0%D0%B8%D0%BB+%D0%B3%D0%B5%D0%BE%D1%80%D0%B3%D0%B8%D0%B5%D0%B2%D0%B8%D1%87%2C+%D0%B4%D0%BE%D0%BD%D0%BD%D1%82%D1%83&sc=0-32&sk=&cvid=93A1954F9E784C0B8A3E8668BE5EB7EC'
              },
              {
                text: '8',
                link: 'https://search.meta.ua/search.asp?q=lang%3Drussian+%28%D5%EB%E0%EC%EE%E2+%CC%E8%F5%E0%E8%EB+%C3%E5%EE%F0%E3%E8%E5%E2%E8%F7%2C+%C4%EE%ED%CD%D2%D3%29&rgn=all&dir=all&period=&m='
              }
            ]
          },
          {
            title: 'Метрологическая надежность',
            links: [
              {
                text: '3 390 000',
                link: 'https://www.google.com/search?lr=lang_ru&biw=1366&bih=657&tbs=lr%3Alang_1ru&sxsrf=ACYBGNT3fex6mfvyfDG1-L4q62Jh_7Xa2A%3A1569562002981&ei=kp2NXam_O-nGrgT3mKvoDA&q=%D0%9C%D0%B5%D1%82%D1%80%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F+%D0%BD%D0%B0%D0%B4%D0%B5%D0%B6%D0%BD%D0%BE%D1%81%D1%82%D1%8C&oq=%D0%9C%D0%B5%D1%82%D1%80%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F+%D0%BD%D0%B0%D0%B4%D0%B5%D0%B6%D0%BD%D0%BE%D1%81%D1%82%D1%8C&gs_l=psy-ab.3..0l2j0i22i30l6.31918.31918..32786...0.0..0.121.121.0j1......0....2j1..gws-wiz.euDN9ffOGAg&ved=0ahUKEwip0I-NovDkAhVpo4sKHXfMCs0Q4dUDCAs&uact=5'
              },
              {
                text: '≈ 1 млн',
                link: 'https://yandex.ua/search/?text=%D0%9C%D0%B5%D1%82%D1%80%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BD%D0%B0%D0%B4%D0%B5%D0%B6%D0%BD%D0%BE%D1%81%D1%82%D1%8C&lr=142&lang=ru'
              },
              {
                text: '21 200',
                link: 'https://www.bing.com/search?q=%D0%9C%D0%B5%D1%82%D1%80%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F+%D0%BD%D0%B0%D0%B4%D0%B5%D0%B6%D0%BD%D0%BE%D1%81%D1%82%D1%8C&qs=n&form=QBRE&sp=-1&pq=%D0%BC%D0%B5%D1%82%D1%80%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F+%D0%BD%D0%B0%D0%B4%D0%B5%D0%B6%D0%BD%D0%BE%D1%81%D1%82%D1%8C&sc=0-26&sk=&cvid=2F62B79E2E2F4FA8BA7F26D951CDF0F9'
              },
              {
                text: '40 200',
                link: 'https://search.meta.ua/search.asp?q=lang%3Drussian+%28%D0%9C%D0%B5%D1%82%D1%80%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F+%D0%BD%D0%B0%D0%B4%D0%B5%D0%B6%D0%BD%D0%BE%D1%81%D1%82%D1%8C%29&cof=FORID%3A9'
              }
            ]
          },
          {
            title: 'Оптический абсорбционный шахтный метанометр',
            links: [
              {
                text: '166',
                link: 'https://www.google.com/search?lr=lang_ru&biw=1366&bih=657&tbs=lr%3Alang_1ru&sxsrf=ACYBGNQhWkSeUQZDZl1zVg3Eii-_VxdBmg%3A1569562037521&ei=tZ2NXYi6H6vqrgSCmKjoAw&q=%D0%9E%D0%BF%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9+%D0%B0%D0%B1%D1%81%D0%BE%D1%80%D0%B1%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D1%8B%D0%B9+%D1%88%D0%B0%D1%85%D1%82%D0%BD%D1%8B%D0%B9+%D0%BC%D0%B5%D1%82%D0%B0%D0%BD%D0%BE%D0%BC%D0%B5%D1%82%D1%80&oq=%D0%9E%D0%BF%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9+%D0%B0%D0%B1%D1%81%D0%BE%D1%80%D0%B1%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D1%8B%D0%B9+%D1%88%D0%B0%D1%85%D1%82%D0%BD%D1%8B%D0%B9+%D0%BC%D0%B5%D1%82%D0%B0%D0%BD%D0%BE%D0%BC%D0%B5%D1%82%D1%80&gs_l=psy-ab.3...33573.33573..34216...0.1..0.138.138.0j1......0....2j1..gws-wiz.......0i71.mwEC4vriUTY&ved=0ahUKEwjI6MudovDkAhUrtYsKHQIMCj0Q4dUDCAs&uact=5'
              },
              {
                text: '≈ 74 тыс',
                link: 'https://yandex.ua/search/?text=%D0%9E%D0%BF%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9%20%D0%B0%D0%B1%D1%81%D0%BE%D1%80%D0%B1%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D1%8B%D0%B9%20%D1%88%D0%B0%D1%85%D1%82%D0%BD%D1%8B%D0%B9%20%D0%BC%D0%B5%D1%82%D0%B0%D0%BD%D0%BE%D0%BC%D0%B5%D1%82%D1%80&lr=142&lang=ru'
              },
              {
                text: '9',
                link: 'https://www.bing.com/search?q=%D0%9E%D0%BF%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9+%D0%B0%D0%B1%D1%81%D0%BE%D1%80%D0%B1%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D1%8B%D0%B9+%D1%88%D0%B0%D1%85%D1%82%D0%BD%D1%8B%D0%B9+%D0%BC%D0%B5%D1%82%D0%B0%D0%BD%D0%BE%D0%BC%D0%B5%D1%82%D1%80&qs=n&form=QBRE&filt=custom&sp=-1&pq=%D0%BE%D0%BF%D1%82%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B9+%D0%B0%D0%B1%D1%81%D0%BE%D1%80%D0%B1%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D1%8B%D0%B9+%D1%88%D0%B0%D1%85%D1%82%D0%BD%D1%8B%D0%B9+%D0%BC%D0%B5%D1%82%D0%B0%D0%BD%D0%BE%D0%BC%D0%B5%D1%82%D1%80&sc=0-43&sk=&cvid=0DFD359D787B4513BCDD2D76E0F4DF25'
              },
              {
                text: '3',
                link: 'https://search.meta.ua/search.asp?q=lang%3Drussian+%28%CE%EF%F2%E8%F7%E5%F1%EA%E8%E9+%E0%E1%F1%EE%F0%E1%F6%E8%EE%ED%ED%FB%E9+%F8%E0%F5%F2%ED%FB%E9+%EC%E5%F2%E0%ED%EE%EC%E5%F2%F0%29&rgn=all&dir=all&period=&m='
              }
            ]
          }
        ],
        ua: [
          {
            title: 'Дослідження і розробка методів і засобів метрологічної надійності оптичного адсорбционного шахтного метанометра',
            links: [
              {
                text: '8',
                link: 'https://www.google.com/search?lr=lang_uk&hl=ru&as_qdr=all&tbs=lr%3Alang_1uk&sxsrf=ACYBGNQJPYE80FN7a0z0WyRsrnE-lBnmHQ%3A1569562127226&ei=D56NXaq0DeGsrgTdvIq4AQ&q=%D0%94%D0%BE%D1%81%D0%BB%D1%96%D0%B4%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F+%D1%96+%D1%80%D0%BE%D0%B7%D1%80%D0%BE%D0%B1%D0%BA%D0%B0+%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D1%96%D0%B2+%D1%96+%D0%B7%D0%B0%D1%81%D0%BE%D0%B1%D1%96%D0%B2+%D0%BC%D0%B5%D1%82%D1%80%D0%BE%D0%BB%D0%BE%D0%B3%D1%96%D1%87%D0%BD%D0%BE%D1%97+%D0%BD%D0%B0%D0%B4%D1%96%D0%B9%D0%BD%D0%BE%D1%81%D1%82%D1%96+%D0%BE%D0%BF%D1%82%D0%B8%D1%87%D0%BD%D0%BE%D0%B3%D0%BE+%D0%B0%D0%B4%D1%81%D0%BE%D1%80%D0%B1%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE+%D1%88%D0%B0%D1%85%D1%82%D0%BD%D0%BE%D0%B3%D0%BE+%D0%BC%D0%B5%D1%82%D0%B0%D0%BD%D0%BE%D0%BC%D0%B5%D1%82%D1%80%D0%B0&oq=%D0%94%D0%BE%D1%81%D0%BB%D1%96%D0%B4%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F+%D1%96+%D1%80%D0%BE%D0%B7%D1%80%D0%BE%D0%B1%D0%BA%D0%B0+%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D1%96%D0%B2+%D1%96+%D0%B7%D0%B0%D1%81%D0%BE%D0%B1%D1%96%D0%B2+%D0%BC%D0%B5%D1%82%D1%80%D0%BE%D0%BB%D0%BE%D0%B3%D1%96%D1%87%D0%BD%D0%BE%D1%97+%D0%BD%D0%B0%D0%B4%D1%96%D0%B9%D0%BD%D0%BE%D1%81%D1%82%D1%96+%D0%BE%D0%BF%D1%82%D0%B8%D1%87%D0%BD%D0%BE%D0%B3%D0%BE+%D0%B0%D0%B4%D1%81%D0%BE%D1%80%D0%B1%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE+%D1%88%D0%B0%D1%85%D1%82%D0%BD%D0%BE%D0%B3%D0%BE+%D0%BC%D0%B5%D1%82%D0%B0%D0%BD%D0%BE%D0%BC%D0%B5%D1%82%D1%80%D0%B0&gs_l=psy-ab.3...34107.34107..34983...0.0..0.0.0.......0....2j1..gws-wiz.i1wJMNkZSZI&ved=0ahUKEwjq967IovDkAhVhlosKHV2eAhcQ4dUDCAs&uact=5'
              },
              {
                text: '≈ 79 тыс',
                link: 'https://yandex.ua/search/?text=%D0%94%D0%BE%D1%81%D0%BB%D1%96%D0%B4%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F%20%D1%96%20%D1%80%D0%BE%D0%B7%D1%80%D0%BE%D0%B1%D0%BA%D0%B0%20%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D1%96%D0%B2%20%D1%96%20%D0%B7%D0%B0%D1%81%D0%BE%D0%B1%D1%96%D0%B2%20%D0%BC%D0%B5%D1%82%D1%80%D0%BE%D0%BB%D0%BE%D0%B3%D1%96%D1%87%D0%BD%D0%BE%D1%97%20%D0%BD%D0%B0%D0%B4%D1%96%D0%B9%D0%BD%D0%BE%D1%81%D1%82%D1%96%20%D0%BE%D0%BF%D1%82%D0%B8%D1%87%D0%BD%D0%BE%D0%B3%D0%BE%20%D0%B0%D0%B4%D1%81%D0%BE%D1%80%D0%B1%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE%20%D1%88%D0%B0%D1%85%D1%82%D0%BD%D0%BE%D0%B3%D0%BE%20%D0%BC%D0%B5%D1%82%D0%B0%D0%BD%D0%BE%D0%BC%D0%B5%D1%82%D1%80%D0%B0&lr=142&lang=uk'
              },
              {
                text: '0',
                link: 'https://www.bing.com/search?q=%D0%94%D0%BE%D1%81%D0%BB%D1%96%D0%B4%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F+%D1%96+%D1%80%D0%BE%D0%B7%D1%80%D0%BE%D0%B1%D0%BA%D0%B0+%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D1%96%D0%B2+%D1%96+%D0%B7%D0%B0%D1%81%D0%BE%D0%B1%D1%96%D0%B2+%D0%BC%D0%B5%D1%82%D1%80%D0%BE%D0%BB%D0%BE%D0%B3%D1%96%D1%87%D0%BD%D0%BE%D1%97+%D0%BD%D0%B0%D0%B4%D1%96%D0%B9%D0%BD%D0%BE%D1%81%D1%82%D1%96+%D0%BE%D0%BF%D1%82%D0%B8%D1%87%D0%BD%D0%BE%D0%B3%D0%BE+%D0%B0%D0%B4%D1%81%D0%BE%D1%80%D0%B1%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE+%D1%88%D0%B0%D1%85%D1%82%D0%BD%D0%BE%D0%B3%D0%BE+%D0%BC%D0%B5%D1%82%D0%B0%D0%BD%D0%BE%D0%BC%D0%B5%D1%82%D1%80%D0%B0&qs=n&form=QBRE&filt=custom&sp=-1&pq=%D0%B4%D0%BE%D1%81%D0%BB%D1%96%D0%B4%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F+%D1%96+%D1%80%D0%BE%D0%B7%D1%80%D0%BE%D0%B1%D0%BA%D0%B0+%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D1%96%D0%B2+%D1%96+%D0%B7%D0%B0%D1%81%D0%BE%D0%B1%D1%96%D0%B2+%D0%BC%D0%B5%D1%82%D1%80%D0%BE%D0%BB%D0%BE%D0%B3%D1%96%D1%87%D0%BD%D0%BE%D1%97+%D0%BD%D0%B0%D0%B4%D1%96%D0%B9%D0%BD%D0%BE%D1%81%D1%82%D1%96+%D0%BE%D0%BF%D1%82%D0%B8%D1%87%D0%BD%D0%BE%D0%B3%D0%BE+%D0%B0%D0%B4%D1%81%D0%BE%D1%80%D0%B1%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE+%D1%88%D0%B0%D1%85%D1%82%D0%BD%D0%BE%D0%B3%D0%BE+%D0%BC%D0%B5%D1%82%D0%B0%D0%BD%D0%BE%D0%BC%D0%B5%D1%82%D1%80%D0%B0&sc=0-111&sk=&cvid=FCFB6C3F42ED49D7A786B7E0765FD8F2'
              },
              {
                text: '1',
                link: 'https://search.meta.ua/search.asp?q=lang%3Dukrainian+%28%D0%94%D0%BE%D1%81%D0%BB%D1%96%D0%B4%D0%B6%D0%B5%D0%BD%D0%BD%D1%8F+%D1%96+%D1%80%D0%BE%D0%B7%D1%80%D0%BE%D0%B1%D0%BA%D0%B0+%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D1%96%D0%B2+%D1%96+%D0%B7%D0%B0%D1%81%D0%BE%D0%B1%D1%96%D0%B2+%D0%BC%D0%B5%D1%82%D1%80%D0%BE%D0%BB%D0%BE%D0%B3%D1%96%D1%87%D0%BD%D0%BE%D1%97+%D0%BD%D0%B0%D0%B4%D1%96%D0%B9%D0%BD%D0%BE%D1%81%D1%82%D1%96+%D0%BE%D0%BF%D1%82%D0%B8%D1%87%D0%BD%D0%BE%D0%B3%D0%BE+%D0%B0%D0%B4%D1%81%D0%BE%D1%80%D0%B1%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE+%D1%88%D0%B0%D1%85%D1%82%D0%BD%D0%BE%D0%B3%D0%BE+%D0%BC%D0%B5%D1%82%D0%B0%D0%BD%D0%BE%D0%BC%D0%B5%D1%82%D1%80%D0%B0%29&cof=FORID%3A9'
              }
            ]
          },
          {
            title: 'Хламов Михайло Георгійович, ДонНТУ',
            links: [
              {
                text: '139',
                link: 'https://www.google.com/search?lr=lang_uk&hl=ru&as_qdr=all&tbs=lr%3Alang_1uk&sxsrf=ACYBGNSQSIw3E1f0W2-LRWIDNQYwXfg2SQ%3A1573393310958&ei=nhPIXeOGOvCPmwXa9YPYCw&q=%D0%A5%D0%BB%D0%B0%D0%BC%D0%BE%D0%B2+%D0%9C%D0%B8%D1%85%D0%B0%D0%B9%D0%BB%D0%BE+%D0%93%D0%B5%D0%BE%D1%80%D0%B3%D1%96%D0%B9%D0%BE%D0%B2%D0%B8%D1%87%2C+%D0%94%D0%BE%D0%BD%D0%9D%D0%A2%D0%A3&oq=%D0%A5%D0%BB%D0%B0%D0%BC%D0%BE%D0%B2+%D0%9C%D0%B8%D1%85%D0%B0%D0%B9%D0%BB%D0%BE+%D0%93%D0%B5%D0%BE%D1%80%D0%B3%D1%96%D0%B9%D0%BE%D0%B2%D0%B8%D1%87%2C+%D0%94%D0%BE%D0%BD%D0%9D%D0%A2%D0%A3&gs_l=psy-ab.12..35i39l2.13595.13595..14930...0.0..0.74.74.1......0....2j1..gws-wiz.hPa_B2osoQk&ved=0ahUKEwjjzZDr4t_lAhXwx6YKHdr6ALsQ4dUDCAs'
              },
              {
                text: '≈ 18 тыс',
                link: 'https://yandex.ua/search/?text=%D0%A5%D0%BB%D0%B0%D0%BC%D0%BE%D0%B2%20%D0%9C%D0%B8%D1%85%D0%B0%D0%B9%D0%BB%D0%BE%20%D0%93%D0%B5%D0%BE%D1%80%D0%B3%D1%96%D0%B9%D0%BE%D0%B2%D0%B8%D1%87%2C%20%D0%94%D0%BE%D0%BD%D0%9D%D0%A2%D0%A3&lr=142&lang=uk'
              },
              {
                text: '3',
                link: 'https://www.bing.com/search?q=%D0%A5%D0%BB%D0%B0%D0%BC%D0%BE%D0%B2+%D0%9C%D0%B8%D1%85%D0%B0%D0%B9%D0%BB%D0%BE+%D0%93%D0%B5%D0%BE%D1%80%D0%B3%D1%96%D0%B9%D0%BE%D0%B2%D0%B8%D1%87%2C+%D0%94%D0%BE%D0%BD%D0%9D%D0%A2%D0%A3&qs=n&form=QBRE&sp=-1&pq=%D1%85%D0%BB%D0%B0%D0%BC%D0%BE%D0%B2+%D0%BC%D0%B8%D1%85%D0%B0%D0%B9%D0%BB%D0%BE+%D0%B3%D0%B5%D0%BE%D1%80%D0%B3%D1%96%D0%B9%D0%BE%D0%B2%D0%B8%D1%87%2C+%D0%B4%D0%BE%D0%BD%D0%BD%D1%82%D1%83&sc=0-34&sk=&cvid=7DD402E47D204B13A61B4253B97F599D&filt=custom'
              },
              {
                text: '1',
                link: 'https://search.meta.ua/search.asp?q=lang%3Dukrainian+%28%D0%A5%D0%BB%D0%B0%D0%BC%D0%BE%D0%B2+%D0%9C%D0%B8%D1%85%D0%B0%D0%B9%D0%BB%D0%BE+%D0%93%D0%B5%D0%BE%D1%80%D0%B3%D1%96%D0%B9%D0%BE%D0%B2%D0%B8%D1%87%2C+%D0%94%D0%BE%D0%BD%D0%9D%D0%A2%D0%A3%29&cof=FORID%3A9'
              }
            ]
          },
          {
            title: 'Метрологічна надійність',
            links: [
              {
                text: '128 000',
                link: 'https://www.google.com/search?lr=lang_uk&hl=ru&as_qdr=all&tbs=lr%3Alang_1uk&sxsrf=ACYBGNRdu8nhKFhEVfzbuHpxVIDRNrg_cg%3A1569562163582&ei=M56NXf2XI4XrrgTDo4jwCQ&q=%D0%9C%D0%B5%D1%82%D1%80%D0%BE%D0%BB%D0%BE%D0%B3%D1%96%D1%87%D0%BD%D0%B0+%D0%BD%D0%B0%D0%B4%D1%96%D0%B9%D0%BD%D1%96%D1%81%D1%82%D1%8C&oq=%D0%9C%D0%B5%D1%82%D1%80%D0%BE%D0%BB%D0%BE%D0%B3%D1%96%D1%87%D0%BD%D0%B0+%D0%BD%D0%B0%D0%B4%D1%96%D0%B9%D0%BD%D1%96%D1%81%D1%82%D1%8C&gs_l=psy-ab.3..0j0i22i30.20434.20434..21724...0.0..0.138.138.0j1......0....2j1..gws-wiz.PeqowONTjbc&ved=0ahUKEwi9_dnZovDkAhWFtYsKHcMRAp4Q4dUDCAs&uact=5'
              },
              {
                text: '≈ 76 тыс',
                link: 'https://yandex.ua/search/?text=%D0%9C%D0%B5%D1%82%D1%80%D0%BE%D0%BB%D0%BE%D0%B3%D1%96%D1%87%D0%BD%D0%B0%20%D0%BD%D0%B0%D0%B4%D1%96%D0%B9%D0%BD%D1%96%D1%81%D1%82%D1%8C&lr=142&lang=uk'
              },
              {
                text: '3 090',
                link: 'https://www.bing.com/search?q=%D0%9C%D0%B5%D1%82%D1%80%D0%BE%D0%BB%D0%BE%D0%B3%D1%96%D1%87%D0%BD%D0%B0+%D0%BD%D0%B0%D0%B4%D1%96%D0%B9%D0%BD%D1%96%D1%81%D1%82%D1%8C&qs=n&form=QBRE&filt=custom&sp=-1&pq=%D0%BC%D0%B5%D1%82%D1%80%D0%BE%D0%BB%D0%BE%D0%B3%D1%96%D1%87%D0%BD%D0%B0+%D0%BD%D0%B0%D0%B4%D1%96%D0%B9%D0%BD%D1%96%D1%81%D1%82%D1%8C&sc=0-23&sk=&cvid=3ADE80D042F648B4BFD1AEDEA2E513EC'
              },
              {
                text: '820',
                link: 'https://search.meta.ua/search.asp?q=lang%3Dukrainian+%28%D0%9C%D0%B5%D1%82%D1%80%D0%BE%D0%BB%D0%BE%D0%B3%D1%96%D1%87%D0%BD%D0%B0+%D0%BD%D0%B0%D0%B4%D1%96%D0%B9%D0%BD%D1%96%D1%81%D1%82%D1%8C%29&cof=FORID%3A9'
              }
            ]
          },
          {
            title: 'Оптичний абсорбційний шахтний метанометр',
            links: [
              {
                text: '47',
                link: 'https://www.google.com/search?lr=lang_uk&hl=ru&as_qdr=all&tbs=lr%3Alang_1uk&sxsrf=ACYBGNTKuZXvU0g5KDj4SAjvD4EXZlOYUQ%3A1569562186915&ei=Sp6NXfv7L47JrgSloLP4Cg&q=%D0%9E%D0%BF%D1%82%D0%B8%D1%87%D0%BD%D0%B8%D0%B9+%D0%B0%D0%B1%D1%81%D0%BE%D1%80%D0%B1%D1%86%D1%96%D0%B9%D0%BD%D0%B8%D0%B9+%D1%88%D0%B0%D1%85%D1%82%D0%BD%D0%B8%D0%B9+%D0%BC%D0%B5%D1%82%D0%B0%D0%BD%D0%BE%D0%BC%D0%B5%D1%82%D1%80&oq=%D0%9E%D0%BF%D1%82%D0%B8%D1%87%D0%BD%D0%B8%D0%B9+%D0%B0%D0%B1%D1%81%D0%BE%D1%80%D0%B1%D1%86%D1%96%D0%B9%D0%BD%D0%B8%D0%B9+%D1%88%D0%B0%D1%85%D1%82%D0%BD%D0%B8%D0%B9+%D0%BC%D0%B5%D1%82%D0%B0%D0%BD%D0%BE%D0%BC%D0%B5%D1%82%D1%80&gs_l=psy-ab.3...26619.30332..31111...0.0..0.187.586.0j4......0....2j1..gws-wiz.......33i160.G_YjQy_ubmY&ved=0ahUKEwj7yOLkovDkAhWOpIsKHSXQDK8Q4dUDCAs&uact=5'
              },
              {
                text: '≈ 23 тыс',
                link: 'https://yandex.ua/search/?text=%D0%9E%D0%BF%D1%82%D0%B8%D1%87%D0%BD%D0%B8%D0%B9%20%D0%B0%D0%B1%D1%81%D0%BE%D1%80%D0%B1%D1%86%D1%96%D0%B9%D0%BD%D0%B8%D0%B9%20%D1%88%D0%B0%D1%85%D1%82%D0%BD%D0%B8%D0%B9%20%D0%BC%D0%B5%D1%82%D0%B0%D0%BD%D0%BE%D0%BC%D0%B5%D1%82%D1%80&lr=142&lang=uk'
              },
              {
                text: '1',
                link: 'https://www.bing.com/search?q=%D0%9E%D0%BF%D1%82%D0%B8%D1%87%D0%BD%D0%B8%D0%B9+%D0%B0%D0%B1%D1%81%D0%BE%D1%80%D0%B1%D1%86%D1%96%D0%B9%D0%BD%D0%B8%D0%B9+%D1%88%D0%B0%D1%85%D1%82%D0%BD%D0%B8%D0%B9+%D0%BC%D0%B5%D1%82%D0%B0%D0%BD%D0%BE%D0%BC%D0%B5%D1%82%D1%80&qs=n&form=QBRE&filt=custom&sp=-1&pq=%D0%BE%D0%BF%D1%82%D0%B8%D1%87%D0%BD%D0%B8%D0%B9+%D0%B0%D0%B1%D1%81%D0%BE%D1%80%D0%B1%D1%86%D1%96%D0%B9%D0%BD%D0%B8%D0%B9+%D1%88%D0%B0%D1%85%D1%82%D0%BD%D0%B8%D0%B9+%D0%BC%D0%B5%D1%82%D0%B0%D0%BD%D0%BE%D0%BC%D0%B5%D1%82%D1%80&sc=0-40&sk=&cvid=8E3A12BAA84D4D93809ED43FA0445D79'
              },
              {
                text: '0',
                link: 'https://search.meta.ua/search.asp?q=lang%3Dukrainian+%28%D0%9E%D0%BF%D1%82%D0%B8%D1%87%D0%BD%D0%B8%D0%B9+%D0%B0%D0%B1%D1%81%D0%BE%D1%80%D0%B1%D1%86%D1%96%D0%B9%D0%BD%D0%B8%D0%B9+%D1%88%D0%B0%D1%85%D1%82%D0%BD%D0%B8%D0%B9+%D0%BC%D0%B5%D1%82%D0%B0%D0%BD%D0%BE%D0%BC%D0%B5%D1%82%D1%80%29&cof=FORID%3A9'
              }
            ]
          }
        ],
        en: [
          {
            title: 'Research and development of methods and means of metrological reliability of an optical adsorption mine methanometer',
            links: [
              {
                text: '512',
                link: 'https://www.google.com/search?lr=lang_en&hl=ru&as_qdr=all&tbs=lr%3Alang_1en&sxsrf=ACYBGNQWxe34dWfS2ft8K2EEPjem6fsZEQ%3A1569562250542&ei=ip6NXfbVIKOxrgSLgqSoBQ&q=Research+and+development+of+methods+and+means+of+metrological+reliability+of+an+optical+adsorption+mine+methanometer&oq=Research+and+development+of+methods+and+means+of+metrological+reliability+of+an+optical+adsorption+mine+methanometer&gs_l=psy-ab.12...981.981..1991...0.0..0.0.0.......0....2j1..gws-wiz.fu-F9AC0WM8&ved=0ahUKEwj2wpWDo_DkAhWjmIsKHQsBCVUQ4dUDCAs'
              },
              {
                text: '≈ 79 тыс',
                link: 'https://yandex.ua/search/?text=Research%20and%20development%20of%20methods%20and%20means%20of%20metrological%20reliability%20of%20an%20optical%20adsorption%20mine%20methanometer&lr=142&lang=en'
              },
              {
                text: '1',
                link: 'https://www.bing.com/search?q=Research+and+development+of+methods+and+means+of+metrological+reliability+of+an+optical+adsorption+mine+methanometer&qs=n&form=QBRE&filt=custom&sp=-1&pq=research+and+development+of+methods+and+means+of+metrological+reliability+of+an+optical+adsorption+mine+methanometer&sc=0-116&sk=&cvid=88BE72F124EA435D9FB0FC4736445C30'
              },
              {
                text: '206',
                link: 'https://search.meta.ua/search.asp?q=lang%3Denglish+%28Research+and++development+of+methods+and++means+of+metrological+reliability+of+an+optical+adsorption+mine+methanometer%29&cof=FORID%3A9'
              }
            ]
          },
          {
            title: 'Khlamov Michael, DonNTU',
            links: [
              {
                text: '18',
                link: 'https://www.google.com/search?lr=lang_en&hl=ru&as_qdr=all&tbs=lr%3Alang_1en&sxsrf=ACYBGNQglYZ1o5fGxuRTR6KzIbTnsSAFkA%3A1573393804114&ei=jBXIXeLQBvGKk74PqrqAgAE&q=Khlamov+Michael%2C+DonNTU&oq=Khlamov+Michael%2C+DonNTU&gs_l=psy-ab.12...47498.48717..49026...0.0..0.82.163.2......0....2j1..gws-wiz.wVHwuAyKDes&ved=0ahUKEwjixqTW5N_lAhVxxcQBHSodABAQ4dUDCAs'
              },
              {
                text: '≈ 2 млн',
                link: 'https://yandex.ua/search/?text=Khlamov%20Michael%2C%20DonNTU&lr=142&lang=en'
              },
              {
                text: '3',
                link: 'https://www.bing.com/search?q=Khlamov+Michael,+DonNTU&qs=n&form=QBRE&sp=-1&pq=khlamov+michael,+donntu&sc=0-23&sk=&cvid=9C0B75B88C0A4D9FA608539C491D5FF7&filt=custom'
              },
              {
                text: '19',
                link: 'https://search.meta.ua/search.asp?q=lang%3Denglish+%28Khlamov+Michael%2C+DonNTU%29&cof=FORID%3A9'
              }
            ]
          },
          {
            title: 'Metrological reliability',
            links: [
              {
                text: '307 000',
                link: 'https://www.google.com/search?lr=lang_en&hl=ru&as_qdr=all&tbs=lr%3Alang_1en&sxsrf=ACYBGNRidSue-6SsOPoUuve6ZJpPD_vOeQ%3A1569562253721&ei=jZ6NXaDVK_DorgTt3qWADg&q=Metrological+reliability&oq=Metrological+reliability&gs_l=psy-ab.3..0i30.15680.18787..19312...0.0..0.151.549.0j4......0....2j1..gws-wiz.......0i22i30.IbrUwTKbAMc&ved=0ahUKEwjgz9eEo_DkAhVwtIsKHW1vCeAQ4dUDCAs&uact=5'
              },
              {
                text: '≈ 302 тыс',
                link: 'https://yandex.ua/search/?text=Metrological%20reliability&lr=142&lang=en'
              },
              {
                text: '52 500',
                link: 'https://www.bing.com/search?q=Metrological+reliability&qs=n&form=QBRE&filt=custom&sp=-1&pq=metrological+reliability&sc=0-24&sk=&cvid=EF388DE14286419EA38FFF7A597C989B'
              },
              {
                text: '646 000',
                link: 'https://search.meta.ua/search.asp?q=lang%3Denglish+%28Metrological+reliability%29&cof=FORID%3A9'
              }
            ]
          },
          {
            title: 'Optical Absorption Shaft Methane Meter',
            links: [
              {
                text: '479 000',
                link: 'https://www.google.com/search?lr=lang_en&hl=ru&as_qdr=all&tbs=lr%3Alang_1en&sxsrf=ACYBGNSwvyupUWg_vtWRG-2_QTPoBeXAkw%3A1569562274397&ei=op6NXcfrF4ytrgSgs5zIDg&q=Optical+Absorption+Shaft+Methane+Meter&oq=Optical+Absorption+Shaft+Methane+Meter&gs_l=psy-ab.3..33i160.26973.26973..27880...0.0..0.174.174.0j1......0....2j1..gws-wiz.n1isijxK22g&ved=0ahUKEwjHxMWOo_DkAhWMlosKHaAZB-kQ4dUDCAs&uact=5'
              },
              {
                text: '≈ 3 млн',
                link: 'https://yandex.ua/search/?text=Optical%20Absorption%20Shaft%20Methane%20Meter&lr=142&lang=en'
              },
              {
                text: '73 800',
                link: 'https://www.bing.com/search?q=Optical+Absorption+Shaft+Methane+Meter&qs=n&form=QBRE&filt=custom&sp=-1&pq=optical+absorption+shaft+methane+meter&sc=0-38&sk=&cvid=569716DEE76B4515B6EA4122E6A7E463'
              },
              {
                text: '603 000',
                link: 'https://search.meta.ua/search.asp?q=lang%3Denglish+%28Optical+Absorption+Shaft+Methane+Meter%29&cof=FORID%3A9'
              }
            ]
          }
        ]
      }
    }
  },
  computed: {
    ...mapState({
      device: state => state.device.device
    }),
    titleHead () {
      return `Отчет о поиске ${this.$t('titleHead')}`
    },
    tableComponent () {
      if (this.device === 'mobile') {
        return tableMobile
      } else {
        return tableDesktop
      }
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/style/media_mixin.scss";
@import "~/assets/style/var.scss";

.report {
  height: auto;
  width: auto;
  max-width: 100%;
  margin: auto;
  display: block;
  margin-bottom: 2rem;
}

 section {
   text-align: justify;

   p {
     font-size: 1.8rem;
     text-indent: 2.5rem;
     line-height: 2.6rem;
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
    text-align: center;
  }
 }

 .app-table {
   max-width: 160rem;
   margin: auto;
 }

  li {
   &+& {
     margin-top: .5rem;
   }
 }

 ul {
   font-size: 1.8rem;
 }
 </style>
