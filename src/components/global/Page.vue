<template>
  <Transition name="fade" appear>
    <main v-if="show">
      <Header />
      <div class="page" :class="classes">
        <div :class="`align-${alignment}`">
          <h2>
            <span>
              <font-awesome-icon :icon="icon" v-if="icon" />
              <b>{{ text }}</b>
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
      type: String,
      required: true,
      default: "",
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
  position: relative;
  top: 120px;
  max-width: $lg-breakpoint;
  margin: 0 auto;
  padding: 1rem 0 3rem;
  width: 100%;
  height: 100%;

  @media all and (min-width: $md-breakpoint-min) {
    padding: 3rem 0 4rem;
  }
}
</style>
