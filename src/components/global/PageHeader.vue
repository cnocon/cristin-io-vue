<template>
  <div :class="alignment ? `align-${alignment}` : ``">
    <h1>
      <font-awesome-icon :icon="icon" v-if="icon" />
      <b v-if="text">{{ text }}</b>
    </h1>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "PageHeader",
  props: {
    icon: {
      type: String,
      required: false,
    },
    text: {
      type: String || null,
      required: false,
      default: null,
    },
    alignment: {
      required: false,
      type: String,
      default: "left",
    },
    classes: {
      type: String,
      required: false,
    },
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/theme/_helpers.scss";

.page-header {
  h1 {
    b {
      display: inline-block;
      line-height: 54px;
      vertical-align: bottom;
      color: $duotone-gray;
      font-size: 1.25rem;
      font-weight: 700;
      letter-spacing: 1px;
      text-transform: uppercase;

      @media all and (min-width: $md-breakpoint) {
        margin-left: 0.75rem;
        padding-left: 0.625rem;
      }
    }

    svg {
      color: $primary;
      min-height: 46px;
      min-width: 54px;
      margin: 0 9px;
    }
  }
}
</style>
