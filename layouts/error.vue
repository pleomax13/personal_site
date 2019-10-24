<template>
  <section>
    <h1>{{ error.statusCode }}</h1>
    <h3>{{ error.message }}</h3>
  </section>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style scoped>
section {
  margin: auto;
}

h1 {
  font-size: 4rem;
  text-align: center;
}

h3 {
  text-align: center;
}
</style>
