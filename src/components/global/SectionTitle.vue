<template>
  <div class="section-title" :class="`align-${alignment}`">
    <h2>
      <font-awesome-icon v-if="icon" :icon="icon || ''" size="2x" />
      <span v-if="text">{{ text }}</span>
    </h2>
    <span class="rule"></span>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

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
      e.preventDefault();

      if (this.clickHandler) {
        this.clickHandler(e);
      }
    },
  },
});
</script>

<style scoped lang="scss">
@import "@/assets/scss/theme/_helpers.scss";

.section-title {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center; // Default left alignment

  @media all and (min-width: $md-breakpoint) {
    justify-content: flex-start;
  }

  &::before {
    content: "";
    display: block;
    height: 40px;
    width: 100%;
    margin-bottom: 1rem;
  }

  h2 {
    line-height: 2.5rem;
    font-size: 1.25rem;
    display: inline-block;
    flex-shrink: 1;
    flex-grow: 0;
    z-index: 2;
    background-color: white;
    position: absolute;
    height: 2.5rem;
    line-height: 2.5rem;
    background-color: white;
    padding-right: 1rem;
    margin-top: -1.25rem;
    top: 0;
    left: 0;

    span {
      display: inline-block;

      @media all and (min-width: $md-breakpoint) {
        padding-left: 1rem;
      }
    }

    span {
      font-weight: 300;
      text-transform: uppercase;
    }
  }

  .rule,
  h2 {
    flex-direction: column;
  }

  .rule {
    position: absolute;
    top: 50%;
    left: 0;
    z-index: 1;
    flex-grow: 1;
    flex-shrink: 0;
    height: 4px;
    width: 100%;
    background-color: $primary-light;
    display: none;
    border: 0;
    top: 26px;

    @media all and (min-width: $md-breakpoint) {
      display: block;
    }
  }

  div {
    padding: 5px;
    // display: none;

    @media all and (min-width: $md-breakpoint) {
      display: block;
    }

    > svg {
      color: $primary-light;
      width: 2.5rem;
      height: 2.5rem;
    }
  }
}
</style>
