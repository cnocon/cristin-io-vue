<template>
  <Page
    text="Latest from the Blog"
    icon="fa-duotone fa-rss"
    classes="blog-index-page"
  >
    <p>Blog!</p>
  </Page>
</template>

<script lang="ts">
import Vue from "vue";
import Page from "@/components/global/Page.vue";

export default Vue.extend({
  name: "Blog",
  components: {
    Page,
  },
});
</script>

<style scoped lang="scss">
// @import "@/assets/scss/theme/_helpers.scss";
.blog-index-page {
}
</style>
