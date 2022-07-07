<template>
  <router-view :key="$route.fullPath" />
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",
  data() {
    return {
      show: false,
    };
  },
  mounted(): void {
    if (!this.show) {
      this.show = true;
    }
  },
});
</script>
