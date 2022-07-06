<template>
  <img
    src="../../../assets/images/global/square-portrait.png"
    alt="Avatar for Cristin O'Connor"
    title="Avatar for Cristin O'Connor"
  />
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  name: "Header",
})
</script>

<style lang="scss" scoped>
@import "@/assets/scss/theme/_variables.scss";
header {
  h1 {
    font-family: $font-brand;
  }
}
</style>
