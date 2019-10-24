<template>
  <div>
    <button @click="click">
      lang
    </button>
    <p v-if="lang === 'ua'">
      ua
    </p>
    <p v-if="lang === 'ru'">
      ru
    </p>
    <p v-if="lang === 'en'">
      en
    </p>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {
      l: ['ru', 'ua', 'en'],
      i: 0
    }
  },
  computed: {
    ...mapState({
      lang: state => state.currentLang.lang
    })
  },
  methods: {
    ...mapMutations({
      change: 'currentLang/SET_LANG'
    }),
    click () {
      this.change(this.l[this.i])
      this.i++
      console.log(this.i)
    }
  }
}
</script>
