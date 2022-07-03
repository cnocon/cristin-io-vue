/* eslint-disable no-undef */
<template>
  <div class="app-container connect">
    <PageHeader
      :v-if="includeHeader"
      iconClass="fa-regular fa-handshake"
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
  padding: 0 0 3rem;

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
    padding: 1rem 0;
    margin: 0;

    @media all and (min-width: 992px) {
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
    flex-basis: calc(33.333333334% - 0.6666666667rem);

    @media all and (min-width: $lg-breakpoint-min) {
      margin: 0 1rem 0 0;
      flex-shrink: 1;
      flex-grow: 0;

      @media all and (max-width: $md-breakpoint-max) {
        &:nth-child(2n) {
          margin-right: 0;
        }
      }
    }

    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: transparent;
      background-image: none;
      color: transparent;
      border-radius: 50%;
      box-sizing: border-box;

      svg {
        transform: scale(1);
        transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
      }

      &:hover {
        svg {
          transform: scale(1.15);
          box-shadow: $box-shadow-lg;
          color: $link-purple-darker;
          bordwe-color: $link-purple-darker;
          background-color: white;
        }
      }
    }

    svg {
      display: block;
      width: 24px;
      height: 24px;
      padding: 5px;
      color: white;
      border: 2px solid $black;
      box-shadow: $box-shadow-sm;
      background-color: $primary-dark;
    }
  }
}
</style>
