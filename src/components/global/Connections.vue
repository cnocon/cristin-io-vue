<template>
  <IconButton icon="fa-duotone fa-user-astronaut" href="/"
    >I'm a Rainbow Button</IconButton
  >
</template>

<script lang="ts">
import Vue from "vue"
import IconButton from "@/components/global/IconButton.vue"

export default Vue.extend({
  name: "Connections",
  components: {
    IconButton,
  },
})
</script>

<style scoped lang="scss">
// @import "@/assets/scss/theme/_helpers.scss";
.icon-button {
  svg {
    width: 40px;
    height: 40px;
  }
}
</style>
