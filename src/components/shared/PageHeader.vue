<template>
  <div
    :class="
      alignment
        ? `page-header-container align-${alignment}`
        : 'page-header-container'
    "
  >
    <h2>
      <span>
        <font-awesome-icon :icon="iconClass" v-if="iconClass" />
        <b>{{ text }}</b>
      </span>
    </h2>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "PageHeader",
  props: {
    iconClass: {
      type: String,
      required: false,
    },
    text: {
      type: String,
      required: true,
      default: "",
    },
    alignment: {
      required: false,
      type: String,
    }
  },
});
</script>

<style scoped lang="scss">
@import "@/scss/_variables.scss";
.page-header-container {
  width: 100%;
  position: static;
  text-align: center;
  position: relative;
  margin-bottom: 2rem;

  &.align-center {
    h2 span {
      @media all and (min-width: $sm-breakpoint-min) {
        left: 50% !important;
        transform: translate(-50%, -50%);
      }
    }
  }

  h2 {
    display: flex;
    flex-direction: row;
    height: 54px;
    margin-top: 1rem;

    &::after {
      content: "";
      position: absolute;
      z-index: 0;
      width: 100%;
      height: 3px;
      background-color: $border-light-gray;
      bottom: 0;

      @media all and (min-width: $md-breakpoint-min) {
        top: calc(50% - 1.5px);
      }
    }

    span {
      @media all and (min-width: $sm-breakpoint-min) {
        left: 0;
        top: 50%;
        background-color: $white;
        z-index: 1;
        transform: translateY(calc(-50% - 3px));
        padding-right: 1rem;
        position: absolute;
      }
    }
  }

  svg {
    margin-right: 1rem;
    background-color: $white;

    &:not(.fa-duotone) {
      color: #afb4bb;
    }
  }

  b {
    display: inline-block;
    line-height: 1em;
    background-color: $white;
    font-size: 1rem;
    vertical-align: middle;
    text-transform: uppercase;
  }

  &.align-center {
    svg {
      margin-left: 1rem;
      margin-right: 1rem;
    }
  }
}
</style>
