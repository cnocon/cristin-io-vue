<template>
  <Page classes="documentation-page">
    <Section>
      <PageHeader
        text="Documentation"
        alignment="center"
        iconClass="fa-solid fa-book"
      />
    </Section>
  </Page>
</template>

<script lang="ts">
import Vue from "vue"
import Page from "@/components/shared/Page.vue"
import Section from "@/components/shared/Section.vue"
import PageHeader from "@/components/shared/PageHeader.vue"

export default Vue.extend({
  name: "Documentation",
  components: {
    Page,
    Section,
    PageHeader,
  },
})
</script>

<style scoped lang="scss"></style>
