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
  height: 100%;
  display: flex;
  flex-direction: column;

  @media all and (min-height: 496px) {
    min-height: 396px;
  }
}
</style>
