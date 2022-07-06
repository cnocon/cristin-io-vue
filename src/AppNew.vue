<template>
  <Transition name="fade" appear>
    <div v-if="show" class="app">
      <Header />
      <div class="app-content">
        Content Goes Here
        <!--router-view :key="$route.fullPath" /-->
      </div>
      <Footer />
    </div>
  </Transition>
</template>

<script lang="ts">
import Vue from "vue"
import Header from "@/components/global/Header.vue"

export default Vue.extend({
  name: "App",
  components: {
    Header,
  },
  data() {
    return {
      show: false,
    }
  },
  mounted(): void {
    if (!this.show) {
      this.show = true
    }
    // const header = document.getElementsByTagName("header")
    // const el = document.querySelector("main")
    // if (!(el || header)) return
    // console.log("header", header)
    // console.log("el", el)

    // const headerHeight = header.offsetHeight
    // const elementHeight = el.offsetHeight
    // const newHeight = elementHeight + headerHeight
    // if (el && el !== null) {
    //   el.style.height = `${newHeight}`
    // }
  },
})
</script>

<style lang="scss">
@import "@/assets/scss/theme/_variables.scss";
</style>
