<template>
  <div v-if="testimonial" class="testimonial" :class="classes">
    <blockquote>
      <!--<font-awesome-icon icon="fa-solid fa-quote-left" />-->
      <div v-if="testimonial.content" v-html="testimonial.content"></div>
      <cite v-if="testimonial.cite" v-html="testimonial.cite"></cite>
      <span
        v-if="testimonial.citePosition"
        v-html="testimonial.citePosition"
        class="cite-info"
      ></span>
    </blockquote>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { ITestimonial } from "@/types/app.ts";

export default Vue.extend({
  name: "Testimonial",
  props: {
    classes: {
      type: String,
      required: false,
    },
    testimonial: {
      type: Object,
      required: true,
    } as ITestimonial,
  },
});
</script>

<style scoped lang="scss">
@import "@/scss/_variables.scss";

.testimonial {
  position: relative;
  max-width: $sm-breakpoint;
  margin: 4rem auto;
  display: block;
  padding: 0 1rem 0 2rem;
  position: relative;
  box-shadow: $box-shadow-lg;
  @include rainbow-border(dark);

  @media all and (max-width: $breakpoint-lg) {
    max-width: 37.5rem;
    margin-left: auto;
    margin-right: auto;
  }

  @media all and (min-width: $breakpoint-lg-min) {
    margin: 1rem auto 14rem;
  }

  svg {
    position: absolute;
    top: 2rem;
    height: 40px;
    width: 40px;
    // box-shadow: $rainbow-box-shadow-lg;
    padding: 4px;
    border-radius: 50%;
    color: $primary-light;
  }

  blockquote {
    display: block;
    z-index: 10000;
    position: relative;
    box-sizing: border-box;
    left: 0;
    top: 0;
    font-size: 1.25rem;
    line-height: 1.62;
    padding: 2rem 2.5rem 2rem 1.5rem;
    margin: 8px;

    p,
    li,
    span,
    a,
    div {
      font-size: 1.25rem;
      color: white;
      font-weight: 400 !important;
    }

    p + p,
    li + li {
      margin-bottom: 0;
      padding-top: 5px;
    }

    cite {
      display: block;
      text-align: right;
      font-size: 1rem;
      font-weight: 800;
      color: $primary-light;

      &::before {
        content: "– ";
        display: inline-block;
        padding-right: 3px;
      }
    }

    .cite-info {
      display: block;
      text-align: right;
      font-style: italic;
      font-size: 0.9375rem;
    }
  }
}
</style>
