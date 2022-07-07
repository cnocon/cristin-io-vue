<template>
  <div class="example-content">
    <Section
      id="typography"
      text="Typography"
      icon="fa-duotone fa-typewriter"
      alignment="center"
    >
      <h6>Heading Six</h6>
      <h5>A 5<sup>th</sup> Heading</h5>
      <h4>Four<sub>th</sub> Heading</h4>
      <h3>Third Heading</h3>
      <h2>Heading Two</h2>
      <h1>Short Version of a Heading One (or H1)</h1>
    </Section>
    <Section
      id="colors"
      text="Typography"
      icon="fa-duotone fa-typewriter"
      alignment="center"
    >
      <h2>Colors</h2>
      <div v-for="color in colors" :key="color.name" class="swatch" />
    </Section>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import Section from "@/components/global/Section.vue"
export default Vue.extend({
  name: "ExampleContent",
  data() {
    return {
      colors: {
        type: Object,
        default: [],
        required: false,
      },
    }
  },
  components: {
    Section,
  },
})
</script>

<style lang="scss" scoped>
@import "@/assets/scss/theme/_helpers.scss";
.example-content {
  section:first-of-type a {
    text-decoration: underline;
  }
}
</style>
