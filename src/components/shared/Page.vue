<template>
  <transition appear>
    <main v-if="show" class="page" :class="classes">
      <slot></slot>
    </main>
  </transition>
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
  data() {
    return {
      show: false,
    }
  },
  mounted() {
    if (!this.show) {
      this.show = true
    }
  },
})
</script>

<style lang="scss" scoped>
.page {
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
}
</style>
