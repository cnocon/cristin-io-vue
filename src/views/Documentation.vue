<template>
  <Page
    classes="documentation-page"
    text="Developer Docs"
    alignment="center"
    icon="fa-duotone fa-typewriter"
  >
    <br />
    <hr />
    <br />
    <ExampleContent />
    <br />
    <hr />
    <br />
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
  data: function () {
    return {
      message: "Hello",
    }
  },
  computed: {
    // a computed getter
    reversedMessage: function () {
      // `this` points to the vm instance
      return this.message.split("").reverse().join("")
    },
  },
  mounted() {
    console.log(this.reversedMessage) // => 'olleH'
    this.message = "Goodbye"
    console.log(this.reversedMessage) // => 'eybdooG'
  },
})
</script>

<style lang="scss" scoped>
// @import "@/assets/scss/theme/_helpers.scss";
.documentation-page {
  background-color: white;
}
</style>
