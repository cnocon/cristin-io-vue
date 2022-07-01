<template>
  <div class="app">
    <Header />
    <div class="app-container main">
      <router-view :key="$route.fullPath"></router-view>
    </div>
    <Connect />
    <Footer />
  </div>
</template>

<script lang="ts">
import Header from "@/components/shared/Header.vue";
import Footer from "@/components/shared/Footer.vue";
import Connect from "@/components/shared/Connect.vue";

export default {
  name: "App",
  components: {
    Footer,
    Header,
    Connect,
  },
};
</script>

<style lang="scss">
@import "@/scss/_variables.scss";
@import "@/scss/_grid.scss";
@import "@/scss/theme";

.app-container {
  max-width: 940px;
  margin: 0 auto;
}
</style>
