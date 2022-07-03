<template>
  <main class="blog-page site-content">
    <PageHeader iconClass="fa-duotone fa-rss" text="Blog" />
    <div class="container app-container">
      <div class="row post-summary-list" v-if="posts">
        <div
          v-for="(post, index) in posts"
          :key="index"
          class="col-lg-4 col-md-6 col-12 mb-4"
        >
          <PostCard :post="post" />
        </div>
      </div>
      <div class="row summary-list" v-if="posts">
        <div class="col-12">
          <Pagination
            :perPage="6"
            :currentPage="page"
            :totalItems="totalPosts"
            routeName="blog"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
import PageHeader from "@/components/shared/PageHeader.vue";
import Pagination from "@/components/shared/Pagination.vue";
import PostCard from "@/components/post/PostCard.vue";

export default Vue.extend({
  name: "Blog",
  components: {
    PageHeader,
    PostCard,
    Pagination,
  },
  computed: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types 
    page() {
      return parseInt(this.$route.query.page) || 1;
    },
    ...mapState("post", ["posts", "totalPosts"]),
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  created() {
    this.$store.dispatch("post/fetchPosts", {
      page: this.page,
      perPage: 6,
      excludeBody: true,
    });
  },
});
</script>

<style scoped lang="scss">
@import "@/scss/_variables.scss";
main {
  margin: 0 auto;
}
</style>
