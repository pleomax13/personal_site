<template>
  <section v-html="content" />
</template>

<script>
export default {
  data () {
    return {
    }
  },
  computed: {
    content () {
      return this.$t('biography')
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
 section {
   padding: 0 3rem;
   text-align: justify;

   /deep/ p {
     font-size: 1.8rem;
     text-indent: 2.5rem;
     line-height: 2.6rem;
   }

   /deep/ h1 {
     font-size: 3rem;
     text-align: center;
     color: rgb(0, 0, 114);
     margin-bottom: 5rem;
   }
 }
</style>
