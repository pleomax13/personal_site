<template>
  <section>
    <h1>Математическая модель абсорбционного измерителя концентрации метана с открытым оптическим каналом</h1>
    <p class="subtitle-wrap">
      <span class="subtitle">Авторы: </span>
      М.&nbsp;Г.&nbsp;Хламов, А.&nbsp;Е.&nbsp;Кочин
    </p>
    <p class="subtitle-wrap">
      <span class="subtitle">Источник:</span>
      <a href="http://masters.donntu.org/2000/fkita/kochin/statya.htm" target="_blank">
        Донецкий национальный технический университет. Кафедра Электронной техники. Сайт магистра А.&nbsp;Е.&nbsp;Кочина.
      </a>
    </p>
    <h3>Аннотация</h3>
    <p class="annotation">
      <span class="subtitle">
        М.&nbsp;Г.&nbsp;Хламов, А.&nbsp;Е.&nbsp;Кочин. Математическая модель абсорбционного измерителя концентрации метана с открытым оптическим каналом.
      </span>
      <i>
        Предложена феноменологическая математическая модель спектра поглощения инфракрасного излучения метаном.
        Модель использована в алгоритме определения концентрации метана в атмосфере подземных выработок угольных шахт.
        Введение дополнительного оптического канала и приведенный алгоритм обеспечивают устранение
        влияния рудничной пыли в открытом оптическом канале на результат измерения концентрации метана.
      </i>
    </p>
    <p>
      Переход к разработке глубоко залегающих угольных пластов на угольных шахтах Донбасса ведет
      к увеличению газовыделения в горных выработках, повышению температуры в них,
      а так же частоты и интенсивности газодинамических проявлений,
      что ведет к повышению опасности ведения горных работ.
    </p>
    <p>
      В таких условиях особое значение приобретают вопросы комплексного
      оснащения шахт непрерывно действующими средствами автоматического контроля повышенного
      быстродействия состава и параметров рудничной атмосферы и одного из опаснейших ее компонентов -
      метана. Существующие стационарные средства контроля концентрации метана обладают общим недостатком: низким быстродействием,
      обусловленным значительной инерционностью определения объемной концентрации метана.
    </p>
    <p>
      Метод, положенный в основу построения быстродействующего устройства измерения концентрации метана,
      основан на способности метана избирательно поглощать инфракрасное излучение
      в спектральной области и относится к бездисперсионным методам абсорбционной спектроскопии.
    </p>
    <p>
      В соответствии с экспериментальными данными приведенными в работах [1-2] спектр поглощения метана имеет сложную структуру.
      Спектр метана, полученный при высокой разрешающей способности анализатора спектра, включает в себя спектральные полосы,
      каждая из которых содержит два типа составляющих: спектр поглощения колебательной структуры, и спектр поглощения вращательной
      структуры. Спектр вращательной структуры носит характер длинно и коротко волновых не полностью симметричных крыльев при центральной
      вращательной составляющей. Предложена феноменологическая математическая модель описания полосы такого спектра:
    </p>
    <div class="formula-wrap">
      <img src="~/assets/imgs/formulas/ar_1_1.svg" alt="" class="formula f-1">
      <span class="formula-num">(1)</span>
    </div>
    <div class="desc">
      где
      <div class="formula-wrap">
        <img src="~/assets/imgs/formulas/ar_1_1_1.svg" alt="" class="formula f-1-1">
        <span class="formula-num">– огибающая колебательного спектра;</span>
      </div>
      <div class="formula-wrap">
        <img src="~/assets/imgs/formulas/ar_1_1_2.svg" alt="" class="formula f-1-1">
        <span class="formula-num">– огибающая  <i>j</i>-ой составляющей вращательного спектра;</span>
      </div>
      <div class="formula-wrap">
        <img src="~/assets/imgs/formulas/ar_1_1_3.svg" alt="" class="formula f-1-2">
        <span class="formula-num">– огибающая длинно и коротко волновых крыльев вращательного спектра;</span>
      </div>
      <div class="formula-wrap">
        <i>A, B, D, E</i>
        <span class="formula-num">– огибающая длинно и коротко волновых крыльев вращательного спектра;</span>
      </div>
    </div>
    <p>
      При малой концентрации поглощающего газа в соответствии с законом Бугера -
      Ламберта определяется величина поглощенного потока  k – ой компоненты:
    </p>
    <div class="formula-wrap">
      <img src="~/assets/imgs/formulas/ar_1_2.svg" alt="" class="formula f-2">
      <span class="formula-num">(2)</span>
    </div>
    <div class="desc">
      где
      <p> <i>l</i> – длинна трассы;</p>
      <p> <i>C</i> – концентрация поглощающего вещества;</p>
      <p> <i>a</i> – удельный коэффициент поглощения веществом потока излучения;</p>
      <p> <i>I<sub>0</sub></i> – монохроматический поток излучения;</p>
      <p> <i>I<sub>n</sub></i> – поглощенный поток излучения.</p>
    </div>
    <p>
      Определив коэффициент передачи оптического канала как отношение выходного потока излучения к входному и
      учтя частотную избирательность поглощенного излучения, квадрат коэффициента передачи представляется в виде:
    </p>
    <div class="formula-wrap">
      <img src="~/assets/imgs/formulas/ar_1_3.svg" alt="" class="formula f-3">
      <span class="formula-num">(3)</span>
    </div>
    <p>
      Длина трассы (измерительная база) фиксируется значением  <i>l</i> = <i>l<sub>б</sub></i>  и этим уменьшается число факторов, определяющих
      передаточную характеристику оптического канала. На рис.1 приведен пример графика этой характеристики канала.
    </p>
    <p>
      Поглощение излучения проявляется при передаче по каналу оптического сигнала в виде изменения его потока.
      В качестве оптического сигнала используется поток излучения, создаваемый электролюминесцентным источником
      со спектральной характеристикой <i>S<sub>u</sub></i><i>(<span class="symbol">l</span>)</i>.
      Спектральная плотность выходного сигнала канала находится известным способом:
    </p>
    <div class="formula-wrap">
      <img src="~/assets/imgs/formulas/ar_1_4.svg" alt="" class="formula f-3">
      <span class="formula-num">(4)</span>
    </div>
    <p>
      Входной величиной всех фотоприемников является поток излучения, а не отдельные спектральные составляющие.
      Выходной сигнал фотоприемника пропорционален интегральной характеристике сигнала – потоку излучения:
    </p>
    <div class="formula-wrap">
      <img src="~/assets/imgs/formulas/ar_1_5.svg" alt="" class="formula f-2">
      <span class="formula-num">(5)</span>
    </div>
    <div class="formula-wrap">
      <img src="~/assets/imgs/formulas/ar_1_6.svg" alt="" class="formula f-3">
      <span class="formula-num">(6)</span>
    </div>
    <div class="desc">
      где
      <p> <i>S<sub>инт</sub></i> – длинна трассы;</p>
    </div>
    <div class="chart-wrap">
      <img
        src="~/assets/imgs/ar_1_1.gif"
        alt="Частотная характеристика оптического канала в районе полосы  поглощения метана"
        title="Частотная характеристика оптического канала в районе полосы  поглощения метана"
        class="chart"
      >
      <p>
        Рисунок 1 – Частотная характеристика оптического канала в районе
        полосы  поглощения метана
      </p>
    </div>
    <p>
      Поскольку выходной поток оптического канала зависит от концентрации метана, то и выходной
      сигнал фотоприемника также оказывается зависимым от этого параметра.
      Рассматривая оптический канал как звено измерительной цепи, достигнутый результат представляется в виде зависимости:
    </p>
    <div class="formula-wrap">
      <img src="~/assets/imgs/formulas/ar_1_7.svg" alt="" class="formula f-2">
      <span class="formula-num">(7)</span>
    </div>
    <p>
      Поскольку результатом измерений должна быть концентрация метана, а не величина выходного потока, то устанавливается обратная зависимость:
    </p>
    <div class="formula-wrap">
      <img src="~/assets/imgs/formulas/ar_1_8.svg" alt="" class="formula f-2">
      <span class="formula-num">(8)</span>
    </div>
    <p>
      Для этого уравнение (6) решается относительно концентрации метана  <i>С</i>. Решение получается в виде:
    </p>
    <div class="formula-wrap">
      <img src="~/assets/imgs/formulas/ar_1_9.svg" alt="" class="formula f-1">
      <span class="formula-num">(9)</span>
    </div>
    <div class="desc">
      где
      <p><i>C(<span class="symbol">D</span>f<sub>выхOK</sub>)</i> – приведенная концентрация метана;</p>
      <p><i><span class="symbol">D</span>f<sub>выхOK</sub></i> – приведенное изменение потока излучения на выходе оптического канала;</p>
      <p><i>I<sub>u</sub></i> – номинальный поток источника излучения;</p>
      <div class="formula-wrap">
        <img src="~/assets/imgs/formulas/ar_1_9_1.svg" alt="" class="formula f-1-1">
      </div>
    </div>
    <p>
      Пример зависимости <i>C(<span class="symbol">D</span>f<sub>выхOK</sub>)</i>  построенной в соответствии с (9) приведен на рис. 2.
    </p>
    <div class="chart-wrap">
      <img
        src="~/assets/imgs/ar_1_2.gif"
        alt="Зависимость приведенной концентрации метана от приведенного изменения потока излучения оптического канала"
        title="Зависимость приведенной концентрации метана от приведенного изменения потока излучения оптического канала"
        class="chart"
      >
      <p>
        Рисунок 2 – Зависимость приведенной концентрации метана от
        приведенного изменения потока излучения оптического канала
      </p>
    </div>
    <p>
      Описанная математическая модель бездисперсионного абсорбционного спектрометрического измерителя концентрации метана описывает
      процессы в открытым оптическом канале. Но потери излучения в открытом канале не сводятся к его поглощению метаном.
      Существенная часть оптического потока, соизмеримая с поглощенной, рассеивается пылью рудничной атмосферы.
    </p>
    <p>
      Для компенсации пылевой составляющей вводятся два оптических канала – один образцовый, а второй измерительный.
      В образцовом канале отсутствуют компоненты поглощающие излучение. Также вводятся два источника излучения.
      Один с длинной волны 3,31 мкм (основной) а второй с длинной волны 3 мкм (вспомогательный).
      Потоки излучения от каждого излучателя разделяется на два с равной мощностью. Каждый из них пропускается по двум оптическим каналам.
      Итого, на фотоприемники приходит четыре луча, попарно прошедших через один и тот же оптический канал.
    </p>
    <div class="chart-wrap">
      <img
        src="~/assets/imgs/ar_2_1.gif"
        alt="Структурная схема организации оптических каналов метанометра"
        title="Структурная схема организации оптических каналов метанометра"
        class="chart"
      >
      <p>
        Рисунок 3 – Структурная схема организации оптических каналов метанометра
      </p>
    </div>
    <p>
      Излучатель ИИ1 излучает ИК лучи с длинной волны
      <i><span class="symbol">l</span></i>=3,3 мкм, которые пройдя через оптические
      системы разделяются на два равных потока  Ф<sub>01</sub>.
      Поток лучистой энергии Ф<sub>1</sub> – результат прохождения излучения через рабочий открытый оптический канал,
      содержащий поглощающую компоненту  анализируемой смеси (метан), не поглощающие компоненты (азот, кислород) и мешающую компоненту
      (рудничную пыль). Этот поток определяется зависимостью:
    </p>
    <div class="formula-wrap">
      <img src="~/assets/imgs/formulas/ar_2_10.svg" alt="" class="formula f-1">
      <span class="formula-num">(10)</span>
    </div>
    <div class="desc">
      где
      <p>
        Ф<sub>01</sub> – поток лучистой энергии на входе ОК;
      </p>
      <p>
        <span class="symbol">D</span>Ф<sub>п</sub> – поток энергии, поглощаемый компонентом смеси (CH<sub>4</sub>);
      </p>
      <p>
        <span class="symbol">D</span>Ф<sub>p</sub> –  потери потока излучения за счет его рассеяния пылью.
      </p>
    </div>
    <div class="formula-wrap">
      <img src="~/assets/imgs/formulas/ar_2_11.svg" alt="" class="formula f-2">
      <span class="formula-num">(11)</span>
    </div>
    <p>
      Второй  излучатель ИИ2 излучает поток энергии с длинной  волны <i><span class="symbol">l</span></i>=3,0 мкм и
      пройдя через оптическую систему разделяется на два равных потока Ф<sub>02</sub> .
      Поток  Ф<sub>2</sub> проходит через рабочий открытый оптический канал и равен:
    </p>
    <div class="formula-wrap">
      <img src="~/assets/imgs/formulas/ar_2_12.svg" alt="" class="formula f-2">
      <span class="formula-num">(12)</span>
    </div>
    <div class="desc">
      где
      <p>
        Ф<sub>02</sub> – поток энергии на входе оптических каналов.
      </p>
    </div>
    <p>
      Поток Ф<sub>4</sub> – выходной поток эталонной кюветы с не поглощающими компонентами равен:
    </p>
    <div class="formula-wrap">
      <img src="~/assets/imgs/formulas/ar_2_12_1.svg" alt="" class="formula f-2">
    </div>
    <p>
      Все потоки лучистой энергии  Ф<sub>1</sub> ... Ф<sub>4</sub>, пройдя через оптические каналы и претерпев изменения,
      падают на фотоприемники ФП<sub>1</sub> и ФП<sub>2</sub> . Определение информационной составляющей –
      относительного изменения поглощенного потока определяется следующим образом.
    </p>
    <p>
      Вычисляются отношения выходных потоков оптических каналов:
    </p>
    <div class="formula-wrap">
      <img src="~/assets/imgs/formulas/ar_2_13.svg" alt="" class="formula f-1">
      <span class="formula-num">(13)</span>
    </div>
    <p>
      Обеспечив равенство входных потоков излучения оптических каналов:
    </p>
    <div class="formula-wrap">
      <img src="~/assets/imgs/formulas/ar_2_13_1.svg" alt="" class="formula f-2">
    </div>
    <p>
      получим в результате компенсации относительных потоков:
    </p>
    <div class="formula-wrap">
      <img src="~/assets/imgs/formulas/ar_2_13_2.svg" alt="" class="formula f-2">
    </div>
    <p>
      Таким образом, введение дополнительного канала и приведенный алгоритм обеспечивают устранение влияния
      рудничной пыли в открытом оптическом канале на результат измерения концентрации метана. Использование
      открытого оптического канала значительно сокращает время выполнения операций измерения, устраняя транспортное запаздывание,
      которое имеет место в подобного типа абсорбционных спектрометрических метанометрах. Приведенная математическая модель бездисперсионного
      абсорбционного спектрометрического измерителя концентрации метана с открытым оптическим каналом позволяет построить на основе современных
      оптических средств и средств современной микроэлектроники метанометры высокого быстродействия.
    </p>
    <h3>ЛИТЕРАТУРА</h3>
    <p class="left">
      1.   Прикладная инфракрасная спектрометрия: Под ред. Д.&nbsp;Кендела. – М.: Мир, 1970. – 376 с.
    </p>
    <p class="left">
      2.   Смит&nbsp;А. Прикладная ИК-спектрометрия. – М.: Мир , 1982. – 328с.
    </p>
  </section>
</template>

<script>
export default {
  head () {
    return {
      title: ' М.Г. Хламов, А.Е.Кочин – Математическая модель абсорбционного измерителя концентрации метана с открытым оптическим каналом'
    }
  },
  layout: 'article'

}
</script>

<style lang="scss" scoped>
  @import "~/assets/style/media_mixin.scss";
  @import "~/assets/style/var.scss";
  section {
    font-size: 1.7rem;
  }
  h1 {
    font-size: 3rem;
    text-align: center;
    color: $main-blue;
    margin-bottom: 5rem;
  }

  h3 {
    font-size: 2rem;
    color: $main-blue;
    margin-bottom: 2rem;
    margin-top: 3rem;
  }

  p {
    font-size: 1.7rem;
    text-indent: 2.5rem;
    line-height: 150%;
    text-align: left;

    @include tablet {
      text-align: justify;
    }

    &+& {
      margin-top: .5rem;
    }
  }

  .subtitle {
    font-weight: 500;
  }

  .subtitle-wrap {
    text-indent: 0;
  }

  .formula {
    height: auto;
    margin: 0 auto;
    width: 100%;
    display: block;
    margin-bottom: 1rem;

    &.f-1 {
      max-width: 60rem;
    }

    &.f-1-1 {
      max-width: 30rem;
      margin-left: 0;
      margin-right: 0;
    }

    &.f-1-2 {
      max-width: 45rem;
      margin-left: 0;
      margin-right: 0;
    }

    &.f-2 {
      max-width: 20rem;
    }
    &.f-3 {
      max-width: 40rem;
    }
  }

  .formula-wrap {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 3rem 0;

    @include tablet {
      flex-direction: row;
    }
  }

  .formula-num {
    font-size: 1.7rem;
    margin-left: 1rem;
  }

  .symbol {
    font-family:Symbol;
  }

  .annotation {
    margin-bottom: 3rem;
    text-indent: 0;
    margin-left: 2.5rem;
  }

  .desc {
    margin-bottom: 2rem;
  }

  .chart {
    height: auto;
    width: 100%;
    max-width: 36rem;

    @include tablet {
      width: auto;
      max-width: 100%;
    }
  }

  .chart-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 3rem;

    p {
      text-align: center;
      text-indent: 0;
      margin-top: 1rem;
    }
  }
</style>
