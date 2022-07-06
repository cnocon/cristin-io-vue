<template>
  <div :class="containerClasses">
    <a v-if="url" :href="url" target="_blank" rel="noopener noreferrer">
      <font-awesome-icon :icon="classes" />
      <span v-if="text" class="text" v-html="text"></span>
    </a>
    <span v-else>
      <font-awesome-icon :icon="classes" />
      <span v-if="text" class="text" v-html="text"></span>
    </span>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default Vue.extend({
  name: "Icon",
  props: {
    url: String,
    classes: String,
    text: String,
    containerClasses: {
      type: String,
      default: " icon-rainbow-dark-border",
    },
  },
  components: {
    FontAwesomeIcon,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/scss/theme/_variables.scss";
a {
  text-decoration: none;
  background-image: none;

  &:hover {
    svg {
      background-color: $color-primary;

      &::before,
      &::after {
        color: $white;
      }

      &.icon-dark {
        background-color: $black;

        &::before,
        &::after {
          color: $white;
        }
      }

      &.icon-dark,
      &.icon-dark {
        box-shadow: none;
        box-sizing: border-box;
        border: 2px solid $black;
        line-height: 26px;
        background-image: radial-gradient(
          ellipse at top right,
          $link-red 0,
          lighten($link-red, 10%) 10%,
          lighten($link-red, 15%) 26%,
          lighten($link-yellow, 5%) 35%,
          lighten($link-green, 10%) 47.5%,
          lighten($link-green, 15%) 52.5%,
          lighten($link-blue, 10%) 60%,
          lighten($link-blue, 5%) 70%,
          lighten($link-purple, 2.5%) 80%,
          $link-purple 100%,
          transparent
        );
        background-repeat: no-repeat;
        background-size: cover;

        &::before,
        &::after {
          color: $black;
          font-size: 19px;
          line-height: 26px;
        }
      }
    }

    .text {
      color: $black;
    }
  }
}
.text {
  display: block;
  font-family: $font-tertiary;
  font-weight: 500;
  line-height: 1.15em;
  font-size: 13px;
  margin: 10px auto 0;
  text-align: center;
  padding: 0;
  text-transform: uppercase;
  color: $color-primary;
}
svg {
  position: relative;
  width: 32px;
  height: 32px;
  line-height: 28px;
  vertical-align: middle;
  border-radius: 50%;
  background-color: $bg-light-gray;

  &.icon-rainbow-border {
    box-shadow: $rainbow-box-shadow;
  }

  &.icon-rainbow-dark-border {
    box-shadow: $rainbow-box-shadow-dark;
  }

  &.icon-dark {
    background-color: $color-primary;

    &::before,
    &::after {
      color: $white;
      vertical-align: middle;
    }
  }

  &::before,
  &::after {
    font-weight: 400;
    color: $color-primary;
    font-size: 18px;
    line-height: 28px;
    vertical-align: top;
  }
}
.icon-dark {
  // background-color: $color-primary;
}
</style>
