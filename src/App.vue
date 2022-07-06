<template>
  <div class="app">
    <Header />
    <div class="app-container main">
      <router-view :key="$route.fullPath" />
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
@import "@/assets/scss/_theme";
main {
  height: 100vh;
}
.app-container {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
