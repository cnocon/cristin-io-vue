<template>
  <div class="post-card-container">
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
      </div>
      <p>
        <b v-if="showDate">{{ formattedDate(post.published) }}</b>
        {{ post.summary }}
      </p>
    </router-link>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import moment from "moment";
import PostMeta from "@/components/pages/blog/Meta.vue"

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
@import "@/assets/scss/theme/_variables.scss";
.post-card-container {
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  z-index: 0;

  a {
    display: flex;
    flex-direction: column;
    height: 100%;
    border-radius: 3px;
    box-shadow: $box-shadow-sm;
    background-image: $rainbow-gradient-light, $rainbow-gradient-med-alt,
      $rainbow-gradient-light, $rainbow-gradient-med-alt;
    background-size: 100% 3px, 3px 100%, 100% 3px, 3px 100%;
    background-position: top, right, bottom, left;
    padding: 1.5rem;

    &:hover {
      &::after {
        // transform: scale(1.025);
        opacity: 0;
        box-shadow: $box-shadow-lg;
      }
    }

    &::after {
      content: "";
      display: block;
      position: absolute;
      overflow: hidden;
      height: calc(100% - 4px);
      width: calc(100% - 4px);
      background-color: #f6f8f9; // $primary-dark;
      border-radius: 2px;
      left: 0;
      top: 0;
      margin: 2px;
      z-index: 0;
    }

    > * {
      z-index: 99999999999999999999999999999;
    }
  }

  .post-header {
    overflow: hidden;

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
      display: inline-block;
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
}
</style>
