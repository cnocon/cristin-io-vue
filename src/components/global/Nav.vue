<template>
  <nav role="navigation">
    <router-link to="/" :exact="true"><span>Home</span></router-link>
    <router-link to="/blog?page=1" :class="manualActiveClass">
      <span>Blog</span>
    </router-link>
    <router-link to="/resume"><span>Resumé</span></router-link>
    <router-link to="/portfolio"><span>Portfolio</span></router-link>
    <router-link to="/documentation"><span>Documentation</span></router-link>
  </nav>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  name: "Nav",
  computed: {
    manualActiveClass(): string {
      return this.$route.fullPath.split("blog").length &&
        this.$route.fullPath.split("blog").length > 1
        ? "router-link-active"
        : ""
    },
  },
})
</script>

<style lang="scss" scoped>
@import "@/assets/scss/theme/_helpers.scss";

nav {
  display: flex;
  flex-basis: 50%;
  justify-content: flex-end;
  align-items: center;
  height: 100%;

  a {
    flex-grow: 1;
    margin: 0 0 0 1rem;
    color: white;
    flex-direction: column;
  }
}
</style>
