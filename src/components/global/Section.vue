<template>
  <section class="section" :class="classes">
    <SectionTitle :text="text" :icon="icon" />
    <slot></slot>
  </section>
</template>

<script lang="ts">
import Vue from "vue"
import SectionTitle from "@/components/global/SectionTitle.vue"

export default Vue.extend({
  name: "Section",
  props: {
    classes: {
      type: String,
      required: false,
    },
    icon: {
      type: String,
      default: "",
      required: false,
    },
    text: {
      type: String,
      default: "",
      required: false,
    },
  },
  components: {
    SectionTitle,
  },
})
</script>
