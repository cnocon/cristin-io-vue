<template>
  <Page
    classes="not-found-page"
    icon="fa-regular fa-exclamation-triangle fa-4x"
    text="Page Does Not Exist"
  >
    <header>
      <nav>
        <p><router-link to="/">Go Home</router-link></p>
        <p>
          <router-link
            :to="pathNotFound"
            class="button button-primary"
            @click="
              (e) => {
                window ? window.alert('But don\'t really...') : null;
              }
            "
            >Pretend to leave, but don't really.</router-link
          >
        </p>
        <p>The page at {{ pathNotFound }} cannot be found.</p>
        <font-awesome-icon icon="fa-duotone fa-bomb" size="10x" />
        <router-link to="/documentation">Documentation</router-link>
      </nav>
    </header>
  </Page>
</template>

<script lang="ts">
import Vue from "vue";
import Page from "@/components/global/Page.vue";

export default Vue.extend({
  name: "NotFound",
  components: {
    Page,
  },
  data() {
    return {
      pathNotFound: this.$router.currentRoute.fullPath,
    };
  },
  created() {
    if (!this.pathNotFound.length) {
      this.pathNotFound = this.$router.currentRoute.fullPath;
    }
  },
});
</script>

<style scoped lang="scss">
// @import "@/assets/scss/theme/_helpers.scss";
// .not-found-page {
// }
</style>
