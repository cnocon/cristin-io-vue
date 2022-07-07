<template>
  <footer>
    <div class="footer-inner">
      <div class="footer-row">
        <div class="footer-column" role="contentinfo">
          <p class="copyright">
            <span class="copyright-year">
              &copy;{{ new Date().getFullYear() }}&nbsp;
            </span>
            <span class="copyright-owner">Cristin O'Connor</span>
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
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Footer",
});
</script>

<style scoped lang="scss">
@import "@/assets/scss/theme/_helpers.scss";

footer {
  height: 7.5rem;
  background-color: $bg-gray;
  box-shadow: $box-shadow-md;
  min-width: 100%;
  padding: 2rem 0;

  .footer-inner {
    max-width: $lg-breakpoint;
    margin-left: auto;
    margin-right: auto;

    .footer-row {
      display: flex;
      justify-content: space-between;

      .footer-column {
        flex-direction: column;
        flex-basis: 50%;

        &:last-child div {
          display: flex;
          align-items: flex-end;
          flex-direction: column;

          p,
          img {
            display: block;
          }

          img {
            max-width: 200px;
          }
        }
      }
    }
  }
}
</style>
