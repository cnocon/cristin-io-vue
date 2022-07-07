<template>
  <Page :text="``">
    <RotatingHeader />
    <IconButton
      icon="fa-duotone fa-business-time"
      :clickHandler="handleClick"
    />
    <Connections />
  </Page>
</template>

<script lang="ts">
import Vue from "vue"
import Page from "@/components/global/Page.vue"
import IconButton from "@/components/global/IconButton.vue"
import RotatingHeader from "@/components/pages/home/RotatingHeader.vue"
import Connections from "@/components/global/Connections.vue"

export default Vue.extend({
  name: "Home",
  components: {
    Page,
    RotatingHeader,
    IconButton,
    Connections,
  },
  methods: {
    handleClick(e) {
      e.preventDefault()
      this.$router.push("/resume")
    },
  },
})
</script>

<style scoped lang="scss">
// @import "@/assets/scss/theme/_helpers.scss";
.home-page {
  svg {
    width: 2.5rem; // 40px
    height: 2.5rem; // 40px
  }
}
</style>
