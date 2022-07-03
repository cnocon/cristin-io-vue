<template>
  <div class="app">
    <Header />
    <div class="app-container main">
      <router-view :key="$route.fullPath"></router-view>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import Header from "@/components/shared/Header.vue";
import Footer from "@/components/shared/Footer.vue";

export default {
  name: "App",
  components: {
    Footer,
    Header,
  },
};
</script>

<style lang="scss">
@import "@/scss/_variables.scss";
@import "@/scss/_grid.scss";
@import "@/scss/theme";

.app-container {
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 0.9375rem;
}
</style>
