<template>
  <Transition name="fade" appear>
    <main v-if="show">
      <Header />
      <div class="page" :class="classes">
        <div :class="alignment ? `align-${alignment}` : ``">
          <h2>
            <span>
              <font-awesome-icon :icon="icon" v-if="icon" />
              <b v-if="text">{{ text }}</b>
            </span>
          </h2>
        </div>
        <slot></slot>
      </div>
      <Footer />
    </main>
  </Transition>
</template>

<script lang="ts">
import Vue from "vue"
import Header from "@/components/global/Header.vue"
import Footer from "@/components/global/Footer.vue"

export default Vue.extend({
  name: "Page",
  data() {
    return {
      show: {
        type: Boolean,
        required: false,
        default: false,
      },
    }
  },
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
  components: {
    Footer,
    Header,
  },
  computed: {
    contentHeight() {
      const contentHeight =
        document.querySelector(".header").offsetHeight +
        document.querySelector("footer").offsetHeight
      return `calc(100vh - ${contentHeight}px)`
    },
  },
  mounted() {
    this.$el.style.height = this.contentHeight
    if (!this.show) this.show = true
  },
})
</script>

<style lang="scss" scoped>
@import "@/assets/scss/theme/_helpers.scss";
.page {
  max-width: $lg-breakpoint;
  margin: 4rem auto;
  min-height: calc(100% - 60px);
  // max-height: 100vh;
  overflow: auto;
}
// .page {
//   position: relative;
//   top: 4.5rem; // 72px
//   width: 100%;
//   max-width: $lg-breakpoint;
//   height: calc(100vh - 15rem); // Content height minus header + footer heights
//   margin: 0 auto;
//   padding: 0 0.875rem 3rem;

//   @media all and (min-width: $md-breakpoint-min) {
//     padding: 0 1.25rem 4rem;
//   }
// }
</style>
