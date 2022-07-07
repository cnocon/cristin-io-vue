<template>
  <div>
    <font-awesome-icon :icon="icon || ''" size="2x" />
    <h2>
      <span v-if="text">{{ text }}</span>
    </h2>
  </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  name: "SectionTitle",
  props: {
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
