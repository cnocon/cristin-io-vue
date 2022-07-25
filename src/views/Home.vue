<template>
  <Page text="">
    <RotatingHeader />
    <Connections />
    <Rolodex />
  </Page>
</template>

<script lang="ts">
import Vue from "vue"
import Page from "@/components/global/Page.vue"
import RotatingHeader from "@/components/pages/home/RotatingHeader.vue"
import Connections from "@/components/global/Connections.vue"
import Rolodex from "@/components/global/Rolodex.vue"

export default Vue.extend({
  name: "Home",
  components: {
    Page,
    RotatingHeader,
    Connections,
    Rolodex,
  },
})
</script>

<style scoped lang="scss">
// @import "@/assets/scss/theme/_helpers.scss";
</style>
