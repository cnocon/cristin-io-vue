<template>
  <a v-if="to" :href="to" class="icon-link">
    <font-awesome-icon :icon="icon" size="2x" />
  </a>
  <button v-else v-on:click="handleButtonClick" class="icon-button">
    <font-awesome-icon :icon="icon" size="2x" />
  </button>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  name: "IconButton",
  props: {
    icon: {
      type: String,
      default: "fa-duotone fa-user-astronaut",
      required: true,
    },
    to: {
      type: Object || String || null,
      default: null,
      required: false,
    },
    clickHandler: {
      type: Function || null,
      default: null,
      required: false,
    },
    dark: {
      type: Boolean,
      required: false,
      default: false,
    },
    size: {
      type: String,
      required: false,
      default: "2x",
    },
  },
  methods: {
    handleButtonClick(e) {
      e.preventDefault()

      if (this.clickHandler) {
        this.clickHandler(e)
      }
    },
  },
})
</script>

<style scoped lang="scss">
@import "@/assets/scss/theme/_helpers.scss";
.icon-button {
  cursor: pointer;
  @include icon-round-rainbow-border;

  svg {
    width: 40px;
    height: 40px;
  }
}
</style>
