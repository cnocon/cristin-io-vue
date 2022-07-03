/* eslint-disable no-undef */
<template>
  <div class="app-container connect">
    <PageHeader
      :v-if="includeHeader"
      iconClass="fa-duotone fa-handshake"
      alignment="left"
      text="Connect"
    />
    <ul class="list-style-none text-center">
      <li v-for="(profile, index) in connections" :key="index">
        <Icon
          :classes="profile.icon"
          :text="profile.text"
          :url="profile.link"
          container-classes=" icon-rainbow-dark-border"
        />
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
  includeHeader: boolean;
}

export default Vue.extend({
  name: "Connect",
  components: {
    Icon,
    PageHeader,
  },
  props: {
    includeHeader: {
      type: Boolean,
      default: true,
      required: false,
    },
  },
  data() {
    return {
      connections: appData.connect,
    };
  },
});
</script>

<style lang="scss">
@import "@/scss/_variables.scss";

.connect {
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    padding: 4rem 0 0;
    margin: 1rem auto 2rem;

    @media all and (min-width: 940px) {
      flex-wrap: nowrap;
    }
  }
  li {
    text-align: center;
    padding: 0 0 1rem;
    padding-top: 1rem !important;
    white-space: wrap;
    flex-direction: column;
    background-color: transparent;
    text-align: center;
    display: flex;
    margin: 1rem 0.5rem;
    flex-basis: calc(33.333% - 1rem);

    @media all and (min-width: 940px) {
      flex-basis: calc(16.5% - 1rem);
      // flex-basis: calc((100% * (100 / 6)) - 1rem);
      margin: 0 1rem 0 0;
      flex-shrink: 1;
      flex-grow: 0;
    }
  }

  li a {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: transparent !important;
    background-image: none !important;
    color: transparent;
    border-radius: 50%;
    box-sizing: border-box;
  }

  li svg {
    width: 40px;
    height: 40px;
    padding: 5px;
    border: 3px solid #345;
    display: block;
    background-color: transparent !important;
    background-image: $rainbow-gradient-med;
    background-size: cover;
    color: #345;
  }
}
</style>
