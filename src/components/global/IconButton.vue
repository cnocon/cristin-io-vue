<template>
  <div class="icon-container">
    <a v-if="to" :href="to" class="icon-link">
      <font-awesome-icon :icon="icon" size="2x" />
    </a>
    <button v-else v-on:click="handleButtonClick" class="icon-button">
      <font-awesome-icon :icon="icon" size="2x" />
    </button>
    <slot></slot>
  </div>
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
      default: "/oops",
      required: false,
    },
    clickHandler: {
      type: Function || null,
      default: null,
      required: false,
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
.icon-container {
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 1rem auto 2rem;
  flex-wrap: wrap;
  cursor: pointer;


  .icon-button,
  .icon-link {
    color: #fff;
    background-color: $primary;
    transition: all .2s ease-in-out;
    @include icon-round-rainbow-border;

    &:hover {
      background-color: $bg-med-gray;
      color: $primary;

      svg {
        fill: #fff;
        stroke: #fff;
      }
    }

    svg {
      width: 30px;
      height: 30px;
    }
  }

  a + a {
    width: 100%;
    display: block;
    line-height: 1.25;
    @include body-accent-text;
  }
}
</style>
