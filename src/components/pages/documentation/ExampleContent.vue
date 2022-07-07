<template>
  <div class="example-content">
    <!--<Section classes="text-center">
      <h1>Table of Contents</h1>
      <ul>
        <li><a href="#typography">Typography</a></li>
        <li><a href="#colors">Colors</a></li>
      </ul>
    </Section>-->
    <SectionTitle text="Typography" icon="fa-duotone fa-typewriter" />
    <Section id="typography">
      <h1>Short Version of a Heading One (or H1)</h1>
      <h2>Heading Two</h2>
      <h3>Third Heading</h3>
      <h4>Fourth Heading</h4>
      <h5>A 5<sup>th</sup> Heading</h5>
      <h6>Heading Six</h6>
    </Section>
    <Section id="colors" v-if="colors">
      <h2>Colors</h2>
      <div v-for="color in colors" :key="color.name" class="swatch" />
    </Section>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import Section from "@/components/global/Section.vue"
import SectionTitle from "@/components/global/SectionTitle.vue"

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
    SectionTitle,
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
