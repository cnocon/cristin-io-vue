<template>
  <Page
    classes="documentation-page"
    text="Developer Docs"
    alignment="center"
    icon="fa-duotone fa-typewriter"
  >
    <ExampleContent />
    <ExampleContent />
  </Page>
</template>

<script lang="ts">
import Vue from "vue"
import Page from "@/components/global/Page.vue"
import ExampleContent from "@/components/pages/documentation/ExampleContent.vue"

export default Vue.extend({
  name: "Documentation",
  components: {
    Page,
    ExampleContent,
  },
  data() {
    return {
      colors: {
        type: Object,
        required: false,
        default: [],
      },
    }
  },
})
</script>

<style lang="scss" scoped>
@import "@/assets/scss/theme/_helpers.scss";
.documentation-page {
  background-color: white;
}
</style>
