<template>
  <div class="footer-container">
    <footer class="constraining-container footer">
      <div class="footer-inner">
        <div class="footer-row">
          <div class="footer-column" role="contentinfo">
            <p class="copyright">
              <span class="copyright-year">
                &copy;{{ new Date().getFullYear() }}
              </span>
              <span class="copyright-owner"> Cristin O'Connor</span>
            </p>
            <p class="built-with-info">
              Built using&nbsp;
              <a
                href="https://v3.vuejs.org"
                rel="noopener noreferrer"
                target="_blank"
                >Vue 3</a
              >
              and
              <a
                href="https://next.vuex.vuejs.org"
                rel="noopener noreferrer"
                target="_blank"
                >Vuex</a
              >
            </p>
          </div>
          <div class="footer-column">
            <div>
              <p>Blog Powered By</p>
              <img
                src="@/assets/images/logos/buttercms.png"
                alt="ButterCMS"
                class="logo"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
// import Connect from "@/components/shared/Connect.vue";

export default Vue.extend({
  name: "Footer",
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../scss/_variables.scss";
.footer-container {
  background-color: #f6f8f9;
  min-width: 100%;
  padding: 2rem 0;
}
.footer-inner {
  font-size: 0.875rem;
  display: block;
  max-width: $xl-breakpoint;
  margin: 0 auto;
}
.footer-row {
  display: flex;
  justify-content: space-between;
}
.footer-column {
  flex-direction: column;
}
.footer-column:first-of-type {
  p {
    font-family: $font-secondary;
    font-size: 0.9375rem;

    &:last-of-type {
      margin-top: 0;
      font-weight: 500;
      font-size: 0.8125rem;
    }
  }
  a {
    color: $color-primary;
    font-weight: 500;
    text-decoration: underline;
    background-image: none;

    &:hover {
      text-decoration: none;
    }
  }
}
.footer-column:last-of-type {
  div {
    text-align: right;
    max-width: 180px;
  }

  img {
    max-width: 175px;

    @media all and (max-width: $breakpoint-sm) {
      max-width: 125px;
    }
  }

  p {
    text-transform: lowercase;
    text-align: right;
    font-size: 0.8125rem;
  }
}
p {
  margin-bottom: 0;

  &:first-of-type {
    font-weight: 300;
  }
}
</style>
