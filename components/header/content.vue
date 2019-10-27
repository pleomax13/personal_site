<template>
  <section class="section">
    <img src="/saveliev_big.jpg" alt="" class="photo" @click="showModal">
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
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {
      modal: false
    }
  },
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
          name: 'Савельєв Дмитро Олександрович',
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
  },
  methods: {
    ...mapMutations({
      toggleModal: 'modal/SET_TOGGLE_MODAL'
    }),
    showModal () {
      this.toggleModal(true)
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~/assets/style/media_mixin.scss";

  .photo {
    height: 24rem;
    width: auto;
    margin-bottom: 3rem;
    flex-shrink: 0;
    border-radius: .5rem;
    cursor: pointer;

    @include _1280 {
      margin-right: 2.5rem;
      margin-bottom: 0;
    }
  }

  .content-wrap {
    color: white;
  }

  .section {
    display: flex;
    padding: 0 1rem;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 3rem;

    @include tablet {
      padding: 0 3rem;

    }

    @include _1280 {
      flex-direction: row;
      text-align: left;
    }
  }

  h1 {
    margin-bottom: 2.5rem;
    font-size: 2.5rem
  }

  h3 {
    margin-bottom: 1.5rem;
    font-weight: 400;
    font-size: 2.1rem;

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  h2 {
    margin-bottom: 2rem;
    font-size: 2.2rem;
  }
</style>
