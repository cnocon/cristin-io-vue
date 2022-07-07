<template>
  <Page :text="``">
    <RotatingHeader />
    <IconButton
      size="3x"
      icon="fa-light fa-briefcase"
      :clickHandler="handleClick"
    />
  </Page>
</template>

<script lang="ts">
import Vue from "vue"
import Page from "@/components/global/Page.vue"
import IconButton from "@/components/global/IconButton.vue"
import RotatingHeader from "@/components/pages/home/RotatingHeader.vue"

export default Vue.extend({
  name: "Home",
  components: {
    Page,
    RotatingHeader,
    IconButton,
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
    width: 40px;
    height: 40px;
  }
}
</style>
