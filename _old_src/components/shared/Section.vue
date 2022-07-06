<template>
  <section class="constraining-container section" :class="classes">
    <slot></slot>
  </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Section",
  props: {
    classes: {
      type: String,
      required: false,
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/theme/_variables.scss";
section {
  position: relative;
  max-width: $lg-breakpoint;
  width: 100%;
}
</style>
