/* eslint-disable no-undef */
<template>
  <div class="connect">
    <PageHeader
      iconClass="fas fa-handshake"
      text="Connect"
      alignment="left"
    ></PageHeader>
    <ul class="row list-style-none text-center connect">
      <li
        v-for="(profile, index) in connections"
        :key="index"
        class="col-lg-2 col-md-4 col-6"
      >
        <br />
        <Icon
          :classes="profile.icon + ` icon-dark icon-rainbow-dark-border`"
          :text="profile.text"
          :url="profile.link"
        ></Icon>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import appData from "../../data/app.ts";
import PageHeader from "@/components/shared/PageHeader.vue";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface IConnection {
  icon: string;
  link?: string;
  text: string;
  classes: string;
}

export default Vue.extend({
  name: "Connect",
  components: {
    PageHeader,
  },
  data() {
    return {
      connections: appData.connect 
    };
  },
});
</script>

<style lang="scss"></style>
