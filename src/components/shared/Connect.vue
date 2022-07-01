/* eslint-disable no-undef */
<template>
  <div class="connect">
    <PageHeader
      iconClass="fa-duotone fa-handshake"
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
          :classes="profile.icon"
          :text="profile.text"
          :url="profile.link"
          container-classes=" icon-dark icon-rainbow-dark-border"
        ></Icon>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import appData from "../../data/app.ts";
import PageHeader from "@/components/shared/PageHeader.vue";
import Icon from "@/components/shared/Icon.vue";

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
    Icon,
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
