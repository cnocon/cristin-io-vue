<template>
  <router-link
    :to="{
      name: 'blogPost',
      params: { slug: post.slug },
    }"
    class="post"
  >
    <div class="post-header">
      <h4 class="text-center">
        <span>{{ post.title }}</span>
      </h4>
      <div class="post-meta">
        <PostMeta :post="post" />
      </div>
      <!--<div class="img-wrapper">
        <img :src="post.featured_image" :alt="post.featured_image_alt" />
      </div>
      <br />-->
    </div>
    <p>
      <b v-if="showDate">{{ formattedDate(post.published) }}</b>
      {{ post.summary }}
    </p>
  </router-link>
</template>

<script lang="ts">
import Vue from "vue";
import moment from "moment";
import PostMeta from "@/components/post/Meta.vue";

export default Vue.extend({
  name: "PostCard",
  props: {
    post: {
      required: true,
    },
    showDate: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  components: {
    PostMeta,
  },
  methods: {
    formattedDate(isoString) {
      return moment(isoString).format("dddd, MMMM D, YYYY");
    },
  },
});
</script>

<style scoped lang="scss">
@import "@/scss/_variables.scss";
a {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  justify-items: flex-start;
  align-content: flex-start;
  border-radius: 4px;
  box-shadow: $box-shadow-md;
  background-image: $rainbow-gradient-light;
  height: 100%;
  background-size: 100% 3.5px;
  background-position: top;
  transition: all 0.3s ease;
  padding: 1rem 14px;

  @media all and (max-width: $breakpoint-sm) {
    padding: 0.9375rem;
  }

  &:hover {
    border-radius: 4px;
    box-shadow: $box-shadow-md;
    transform: scale(1.015);

    span {
      text-decoration: none;
    }
  }
}

.post-header {
  overflow: hidden;
  position: relative;

  .img-wrapper {
    border: 1px solid $color-primary;
    margin: 0.1875rem 0.625rem 3px 3px;
    box-shadow: rgba($color-primary, 0.5) 0 1px 1px,
      rgba($color-primary, 0.5) 0 -1px 1px, rgba($color-primary, 0.5) 1px 0 1px,
      rgba($color-primary, 0.5) -1px 0 1px;
    border-radius: 50%;
    text-align: center;
    height: calc(2.625rem - 2px);
    width: calc(2.625rem - 2px);
    display: block;
    position: absolute;
    top: 0;
    left: 50%;
    display: none;
  }
}

h4 {
  text-transform: none;
  font-family: $font-secondary;
  margin-bottom: 0;

  span {
    font-weight: 800;
    // max-width: calc(100% - 55px);
    display: inline-block;
    // font-size: 1.125rem;
    line-height: 1.25em;
    font-family: $font-secondary;
    font-size: 1.5rem;
  }
}

.post-meta {
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  padding-top: 0;
}

p {
  font-weight: 400;
  font-family: $font-secondary;
  font-size: 14px;
  margin-bottom: 15px;
  line-height: 1.8491428572em;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  b {
    text-transform: uppercase;
    font-weight: 600;
  }
}
</style>
