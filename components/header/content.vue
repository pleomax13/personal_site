<template>
  <section class="section">
    <img src="/photo.jpg" alt="" class="photo">
    <div class="content-wrap">
      <h1>
        {{ mainInfo.name }}
      </h1>
      <h3>
        {{ mainInfo.dep }}
      </h3>
      <h3>
        {{ mainInfo.caf }}
      </h3>

      <h3 v-html="mainInfo.specialty" />
      <h2>
        {{ mainInfo.topic }}
      </h2>
      <h3>
        {{ mainInfo.head }}
      </h3>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      lang: state => state.currentLang.lang
    }),
    mainInfo () {
      if (this.lang === 'ru') {
        return {
          name: 'Савельев Дмитрий Александрович',
          dep: 'Факультет компьютерных информационных технологий и автоматики',
          caf: 'Кафедра эелектронной техники',
          specialty: 'Специальность <q>Эелектроника и наноэлектроника</q>',
          topic: 'Исследование и разработка методов и средств метрологической надежности оптического адсорбционного шахтного метанометра',
          head: 'Научный руководитель: к.т.н., проф. Хламов Михаил Георгиевич'
        }
      } else if (this.lang === 'ua') {
        return {
          name: 'Савельєв Дмитро Олексанлрович',
          dep: "Факультет комп'ютерних інформаційних технологій та автоматики",
          caf: 'Кафедра електронної техніки',
          specialty: 'Спеціальність <q>Електроніка та наноелектроніка</q>',
          topic: 'Дослідження і розробка методів і засобів метрологічної надійності оптичного адсорбционного шахтного метанометра',
          head: 'Науковий керівник: к.т.н., проф. Хламов Михайло Георгійович'
        }
      } else if (this.lang === 'en') {
        return {
          name: 'Dmitry Saveliev',
          dep: 'Faculty of computer information technologies and automation',
          caf: 'Department of electronic engineering',
          specialty: 'Speciality <q>Electronics and nanoelectronics</q>',
          topic: 'Research and development of methods and means of metrological reliability of an optical adsorption mine methanometer',
          head: 'Scientific adviser: Candidate of Engineering Sciences, Professor Khlamov Michael G.'
        }
      }
      return {
        name: 'Савельев Дмитрий Александрович',
        dep: 'Факультет компьютерных информационных технологий и автоматики',
        caf: 'Кафедра эелектронной техники',
        specialty: 'Специальность <q>Эелектроника и наноэлектроника</q>',
        topic: 'Исследование и разработка методов и средств метрологической надежности оптического адсорбционного шахтного метанометра',
        head: 'Научный руководитель: к.т.н., проф. Хламов Михаил Георгиевич'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .photo {
    height: 25rem;
    width: auto;
    margin-right: 2.5rem;
    flex-shrink: 0;
  }

  .content-wrap {
    color: white;
  }

  .section {
    display: flex;
    align-items: center;
    padding: 0 3rem;
  }

  h1 {
    margin-bottom: 2.5rem;
    font-size: 2.5rem
  }

  h3 {
    margin-bottom: 1.5rem;
    font-weight: 400;
    font-size: 2.1rem;
  }

  h2 {
    margin-bottom: 2rem;
    font-size: 2.2rem;
  }
</style>
