<template>
  <Page
    classes="documentation-page"
    text="Documentation &amp; Examples"
    icon="fa-solid fa-book"
    alignment="center"
  >
    <Section>
      <ExampleContent />
    </Section>
  </Page>
</template>

<script lang="ts">
import Vue from "vue"
import Page from "@/components/global/Page.vue"
import Section from "@/components/global/Section.vue"
import ExampleContent from "@/components/pages/documentation/ExampleContent.vue"

export default Vue.extend({
  name: "Documentation",
  components: {
    Page,
    Section,
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
