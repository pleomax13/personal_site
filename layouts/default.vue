<template>
  <div>
    <app-header />
    <nuxt />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import header from '~/components/header.vue'
export default {
  components: {
    'app-header': header
  },
  computed: {
    ...mapState({
      lang: state => state.currentLang.lang
    })
  }
}
</script>

<style >
</style>
