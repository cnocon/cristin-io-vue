<template>
  <Page classes="resume-page" text="Résumé" icon="fa-duotone fa-clipboard">
    <p>Resume!</p>
  </Page>
</template>

<script lang="ts">
import Vue from "vue"
import Page from "@/components/global/Page.vue"

export default Vue.extend({
  name: "Résumé",
  components: {
    Page,
  },
})
</script>

<style scoped lang="scss">
// @import "@/assets/scss/theme/_helpers.scss";
.resume-page {}
</style>
