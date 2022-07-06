<template>
  <Page classes="homepage">
    <Section>
      <PageHeader
        iconClass="fa-duotone fa-user-astronaut"
        text="A Little Bit About Me"
        alignment="left"
      ></PageHeader>
      <RotatingHeader />
    </Section>

    <Section>
      <PageHeader
        iconClass="fa-duotone fa-concierge-bell"
        text="Services"
        alignment="left"
      ></PageHeader>
      <br />
      <div class="row services-row">
        <div
          v-for="service in data.services"
          :key="service.title"
          class="col-12 col-sm-6 col-lg-4 service"
        >
          <div class="icon"><Icon :classes="service.icon" /></div>
          <h6>{{ service.title }}</h6>
          <p v-html="service.body"></p>
        </div>
      </div>
      <br />
    </Section>

    <Section>
      <PageHeader
        iconClass="fa-duotone fa-rss"
        text="Blog"
        alignment="left"
      ></PageHeader>
      <div v-if="posts.length > 0" class="row posts">
        <div
          v-for="(post, index) in posts"
          :key="index"
          class="col-lg-4 col-md-6 col-sm-12"
        >
          <PostCard :post="post" />
        </div>
      </div>
    </Section>

    <Section>
      <Connect :includeHeader="true" />
    </Section>
  </Page>
</template>

<script lang="ts">
import Vue from "vue"
import { mapState } from "vuex"
import RotatingHeader from "@/components/RotatingHeader.vue"
import PostCard from "@/components/post/PostCard.vue"
import PageHeader from "@/components/shared/PageHeader.vue"
import Icon from "@/components/shared/Icon.vue"
import data from "../data/app.ts"
import Connect from "@/components/shared/Connect.vue"
import Section from "@/components/shared/Section.vue"
import Page from "@/components/shared/Page.vue"

export default Vue.extend({
  name: "Home",
  data() {
    return {
      data: data,
      show: false,
    }
  },
  components: {
    PageHeader,
    Icon,
    RotatingHeader,
    Connect,
    PostCard,
    Section,
    Page,
  },
  computed: {
    ...mapState("post", ["posts", "totalPosts"]),
  },
  created() {
    this.$store.dispatch("post/fetchPosts", {
      page: 1,
      perPage: 3,
      excludeBody: true,
    })
  },
  mounted() {
    if (!this.show) {
      this.show = true
    }
  },
})
</script>

<style scoped lang="scss">
@import "@/assets/scss/theme/_variables.scss";
.services-row {
  align-items: center;

  .service {
    display: flex;
    flex-direction: column;
    align-content: space-between;
    text-align: center;
    max-width: 22.5rem;
    margin: 0 auto 3rem;
    height: 100%;

    &:nth-child(2) {
      @media all and (max-width: $breakpoint-sm) {
        padding-bottom: 2rem;
      }
    }

    .icon {
      // margin-top: 2rem;
      margin-bottom: 1rem;
    }

    h6 {
      font-weight: 700;
      font-family: inherit;
      margin-top: 0;
    }

    p {
      margin-top: 0;
      font-size: 0.875rem;
      font-weight: 400;
    }

    strong {
      font-weight: 600;
    }
  }
}
.posts {
  display: flex;
  flex-wrap: wrap;

  [class^="col-"] {
    margin: 1.5rem 0;
  }
}

.testimonial blockquote p {
  font-weight: bold !important;
}
</style>
