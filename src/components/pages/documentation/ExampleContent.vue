<template>
  <div class="example-content">
    <Section>
      <ul>
        <li><a href="#typography">Typography</a></li>
      </ul>
    </Section>
    <Section>
      <header>
        <h2 id="typography">Typography</h2>
        <hr />
        <h1>Short Version of a Heading One (or H1)</h1>
        <h2>Heading Two</h2>
        <h3>Third Heading</h3>
        <h4>Fourth Heading</h4>
        <h5>A 5<sup>th</sup> Heading</h5>
        <h6>Heading Six</h6>
      </header>
    </Section>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import Section from "@/components/global/Section.vue"

export default Vue.extend({
  name: "ExampleContent",
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
