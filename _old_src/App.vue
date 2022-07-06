<template>
  <div class="app">
    <Header />
    <div class="app-content">
      <router-view :key="$route.fullPath" />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import Header from "@/components/shared/Header.vue"
import Footer from "@/components/shared/Footer.vue"

export default Vue.extend({
  name: "App",
  components: {
    Footer,
    Header,
  },
  mounted(): void {
    const header = document.getElementsByTagName("header")
    const el = document.querySelector("main")
    if (!(el || header)) return

    const headerHeight = header.offsetHeight
    const elementHeight = el.offsetHeight
    const newHeight = elementHeight + headerHeight
    if (el && el !== null) {
      el.style.height = `${newHeight}`
    }
  },
})
</script>

<style lang="scss"></style>
