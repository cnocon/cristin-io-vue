<template>
  <Page v-if="posts" classes="blog-page">
    <PageHeader iconClass="fa-duotone fa-rss" text="Blog" alignment="center" />
    <div class="container constraining-container">
      <div class="row">
        <div
          v-for="(post, index) in posts"
          :key="index"
          class="col-lg-4 col-md-6 col-12 mb-4"
        >
          <PostCard :post="post" />
        </div>
      </div>
      <div class="row" v-if="posts">
        <div class="col-12">
          <Pagination
            :perPage="9"
            :currentPage="page"
            :totalItems="totalPosts"
            routeName="blog"
          />
        </div>
      </div>
    </div>
  </Page>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
import PageHeader from "@/components/shared/PageHeader.vue";
import Pagination from "@/components/shared/Pagination.vue";
import PostCard from "@/components/post/PostCard.vue";
import Page from "@/components/shared/Page.vue";

export default Vue.extend({
  name: "Blog",
  components: {
    PageHeader,
    PostCard,
    Pagination,
    Page,
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
      perPage: 9,
      excludeBody: true,
    });
  },
});
</script>
