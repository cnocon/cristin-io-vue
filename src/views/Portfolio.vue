<template>
  <Page classes="portfolio-page" text="Portfolio" icon="fa-duotone fa-folders">
    <p>Portfolio!</p>
  </Page>
</template>

<script>
import Vue from "vue"
import Page from "@/components/global/Page.vue"

export default Vue.extend({
  name: "Portfolio",
  components: {
    Page,
  },
})
</script>

<style scoped lang="scss">
// @import "@/assets/scss/theme/_helpers.scss";
.portfolio-page {}
</style>
