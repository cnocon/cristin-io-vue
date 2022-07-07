<template>
  <section class="section" :class="classes">
    <slot></slot>
  </section>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  name: "Section",
  props: {
    classes: {
      type: String,
      required: false,
    },
  },
})
</script>
