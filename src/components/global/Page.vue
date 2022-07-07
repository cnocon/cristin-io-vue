<template>
  <Transition name="fade" appear>
    <main v-if="show">
      <Header />
      <div class="page" :class="classes">
        <PageHeader :text="text" :alignment="alignment" :icon="icon" />
        <!--div :class="alignment ? `align-${alignment}` : ``">
          <h1>
            <font-awesome-icon :icon="icon" v-if="icon" />
            <b v-if="text">{{ text }}</b>
          </h1>
        </div-->
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
import PageHeader from "@/components/global/PageHeader.vue"

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
    PageHeader,
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
  overflow: auto;

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
