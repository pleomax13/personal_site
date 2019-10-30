<template>
  <div>
    <table>
      <tr class="table-head">
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
        <th colspan="4" class="lang">
          На русском языке
        </th>
      </tr>
      <tr
        v-for="search in report.ru"
        :key="search.title"
      >
        <td colspan="4">
          <table class="table-inset">
            <tr class="c1">
              <td class="td-wrap" colspan="4">
                {{ search.title }}
              </td>
            </tr>
            <tr>
              <td
                v-for="link in search.links"
                :key="link.link"
                class="cn number"
              >
                <a :href="link.link" target="_blank">
                  {{ link.text }}
                </a>
              </td>
            </tr>
          </table>
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
        <td colspan="4">
          <table class="table-inset">
            <tr class="c1">
              <td class="td-wrap" colspan="4">
                {{ search.title }}
              </td>
            </tr>
            <tr>
              <td
                v-for="link in search.links"
                :key="link.link"
                class="cn number"
              >
                <a :href="link.link" target="_blank">
                  {{ link.text }}
                </a>
              </td>
            </tr>
          </table>
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
        <td colspan="4">
          <table class="table-inset">
            <tr class="c1">
              <td class="td-wrap" colspan="4">
                {{ search.title }}
              </td>
            </tr>
            <tr>
              <td
                v-for="link in search.links"
                :key="link.link"
                class="cn number"
              >
                <a :href="link.link" target="_blank">
                  {{ link.text }}
                </a>
              </td>
            </tr>
          </table>
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
    overflow: hidden;
  }

  td, th {
    border: 1px solid black;
  }

  .svg {
    height: auto;
    width: 100%;
    max-width: calc(32rem / 4);
  }

  .cn {
    padding: 1rem;
    text-align: center;
    width: 25%;
  }

  .c1 {
    padding: 1rem;
  }

  .lang {
    color: $main-blue;
    padding: 2rem 1rem 1rem;
    text-align: center;
  }

  .td-wrap {
    border: none;
    padding: 1rem;
    text-align: center;
  }

  .number {
    &:first-of-type {
      border-left: 0;
    }

    &:last-of-type{
      border-right: 0;
    }

    border-bottom: 0;
  }

  .table-inset {
    position: relative;
    bottom: -1px;
    left: -1px;
    width: calc(100% + 2px);
  }

  a {
    text-decoration: none;
    font-weight: 500;

      &:hover {
        text-decoration: underline;
      }
  }
</style>
