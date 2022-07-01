<template>
  <main class="not-found-page site-content">
    <PageHeader
      iconClass="fa-regular fa-exclamation-triangle"
      text="Oops!"
    ></PageHeader>
    <transition name="fade">
      <div class="text-center">
        <h1>Page Does Not Exist</h1>
        <p>The page at {{ $route.path }} cannot be found.</p>
        <font-awesome-icon class="fa-duotone fa-bomb fa-10x" />
      </div>
    </transition>
  </main>
</template>

<script>
import PageHeader from "@/components/shared/PageHeader.vue";

export default {
  name: "NotFound",
  props: ["badurl"],
  components: {
    PageHeader,
  },
};
</script>

<style scoped lang="scss">
@import "@/scss/_variables.scss";
</style>
