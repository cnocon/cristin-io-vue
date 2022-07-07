<template>
  <header class="header">
    <div class="header-inner">
      <router-link to="/" class="site-title">
        <img
          :src="avatarImg"
          alt="Avatar for Cristin O'Connor"
          title="Avatar for Cristin O'Connor"
        />
        <h1>
          <b>Cristin O'Connor</b>
          <i>Front End Engineer</i>
        </h1>
      </router-link>
      <div class="nav-wrapper">
        <Nav />
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import Vue from "vue";
import Nav from "@/components/global/Nav.vue";
import avatarImg from "@/assets/images/theme/square-portrait.png";

export default Vue.extend({
  name: "Header",
  data() {
    return {
      avatarImg,
    };
  },
  components: {
    Nav,
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/scss/theme/_helpers.scss";

header.header {
  display: block;
  padding: 1.25rem 0;
  text-align: center;
  width: 100%;
  height: 7.5rem; // 120px
  box-shadow: $box-shadow-md;
  background-color: $primary-dark;

  .header-inner {
    display: flex;
    width: 100%;
    max-width: $lg-breakpoint;
    overflow: hidden;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
  }

  .site-title,
  .nav-wrapper {
    display: flex;
    // flex-direction: column;
    // flex-basis: 50%;
  }

  .site-title {
    flex-shrink: 1;
    align-items: center;
    justify-content: flex-start;
  }

  h1 {
    display: flex;
    flex-direction: column;
    text-transform: none;
    align-items: flex-start;

    @media all and (min-width: $breakpoint-md) {
      margin-left: calc(64px + 1rem);
    }

    b {
      background-clip: text;
      background-image: $rainbow-gradient-dark;
      background-size: 18.75rem 100%; // 300px 100%
      font-family: $font-brand;
      font-size: 2.25rem;
      color: transparent;
    }

    i {
      color: white;
      font-size: 1.25rem;
      @include tertiary-title;
    }

    b,
    i {
      display: block;
      line-height: 1.25em;
    }
  }

  img {
    position: absolute;
    height: 64px;
    width: 64px;
    border-radius: 50%;
    box-shadow: $rainbow-box-shadow;
    display: none;

    @media all and (min-width: $md-breakpoint) {
      display: block;
    }
  }
}
</style>
