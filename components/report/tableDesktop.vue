<template>
  <div>
    <table>
      <tr class="table-head">
        <th class="c0">
          Строка поиска
        </th>
        <th class="cn">
          <img src="~/assets/imgs/icons/google.svg" alt="Google" class="svg">
        </th>
        <th class="cn">
          <img src="~/assets/imgs/icons/yandex.svg" alt="Yandex" class="svg">
        </th>
        <th class="cn">
          <img src="~/assets/imgs/icons/bing.svg" alt="bing" class="svg">
        </th>
        <th class="cn">
          <img src="~/assets/imgs/icons/meta.svg" alt="meta" class="svg">
        </th>
      </tr>
      <tr>
        <th colspan="5" class="lang">
          На русском языке
        </th>
      </tr>
      <tr
        v-for="search in report.ru"
        :key="search.title"
      >
        <td class="c1">
          {{ search.title }}
        </td>
        <td
          v-for="link in search.links"
          :key="link.link"
          class="cn"
        >
          <a :href="link.link" target="_blank">
            {{ link.text }}
          </a>
        </td>
      </tr>
      <tr>
        <th colspan="5" class="lang">
          На украинском языке
        </th>
      </tr>
      <tr
        v-for="search in report.ua"
        :key="search.title"
      >
        <td class="c1">
          {{ search.title }}
        </td>
        <td
          v-for="link in search.links"
          :key="link.link"
          class="cn"
        >
          <a :href="link.link" target="_blank">
            {{ link.text }}
          </a>
        </td>
      </tr>
      <tr>
        <th colspan="5" class="lang">
          На английском языке
        </th>
      </tr>
      <tr
        v-for="search in report.en"
        :key="search.title"
      >
        <td class="c1">
          {{ search.title }}
        </td>
        <td
          v-for="link in search.links"
          :key="link.link"
          class="cn"
        >
          <a :href="link.link" target="_blank">
            {{ link.text }}
          </a>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    report: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/style/var.scss";

  table {
    width: 100%;
    font-size: 1.8rem;
    border-collapse: collapse;
  }

  td, th {
    border: 1px solid black;
  }

  .svg {
    height: auto;
    width: 100%;
    max-height: 4rem;
  }

  .cn {
    width: 17rem;
    padding: 1rem;
    text-align: center;
  }

  .c0 {
    text-align: center;
  }

  .c1 {
    padding: 1rem;
    text-align: left;
  }

  .lang {
    color: $main-blue;
    padding: 2rem 1rem 1rem;
  }
</style>
