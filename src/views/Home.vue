<template>
  <Page :text="null">
    <p>Home!</p>
  </Page>
</template>

<script>
import Vue from "vue"
import Page from "@/components/global/Page.vue"

export default Vue.extend({
  name: "Home",
  components: {
    Page,
  },
})
</script>

<style scoped lang="scss">
// @import "@/assets/scss/theme/_helpers.scss";
.home-page {}
</style>
