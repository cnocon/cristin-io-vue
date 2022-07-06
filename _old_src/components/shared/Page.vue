<template>
  <main class="page" :class="classes">
    <slot />
  </main>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  name: "Page",
  props: {
    classes: {
      type: String,
      required: false,
    },
  },
})
</script>

<style lang="scss" scoped>
@import "@/assets/scss/theme/_variables.scss";

.page {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 0 2rem;

  @media all and (min-width: $md-breakpoint-min) {
    padding: 1rem 0 4rem;
  }
}
</style>
