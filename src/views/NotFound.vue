<template>
  <Page
    classes="not-found-page"
    icon="fa-regular fa-exclamation-triangle"
    text="Oops!"
  >
    <div class="text-center">
      <h1>Page Does Not Exist</h1>
      <p>The page at {{ $route.path }} cannot be found.</p>
      <font-awesome-icon icon="fa-duotone fa-bomb" size="10x" />
      <router-link to="/documentation">Documentation</router-link>
    </div>
  </Page>
</template>

<script>
import Vue from "vue"

export default Vue.extend({
  name: "NotFound",
  props: ["badurl"],
})
</script>

<style scoped lang="scss">
// @import "@/assets/scss/theme/_helpers.scss";
.not-found-page {}
</style>
