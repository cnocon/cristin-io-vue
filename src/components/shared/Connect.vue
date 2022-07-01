/* eslint-disable no-undef */
<template>
  <div class="app-container connect">
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
          container-classes=" icon-rainbow-dark-border"
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

<style lang="scss">
@import "@/scss/_variables.scss";
.connect {
  margin: 2rem auto 4rem;
  ul {
    display: flex;
    flex-wrap: wrap;
  }
  li {
    flex-direction: column;
    background-color: transparent;
  }
  li a {
    display: block;
    background-color: transparent !important;
    background-image: none !important;
    color: transparent;
    // border: 2px solid #345;
    border-radius: 50%;
    width: 60px;
    height: 60px;
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
    // background-clip: text;
  }

  // ul {
  //   display: flex;
  //   flex-wrap: wrap;
  //   align-items: center;
  // }

  // li {
  //   flex-direction: column;
  //   flex-grow: 1;
  //   flex-basis: 44px;
  //   justify-items: center;
  // }

  // a {
  //   position: relative;
  //   display: block;
  //   height: 44px;
  //   width: 44px;
  //   border-radius: 22px;
  //   left: 50%;
  //   top: 50%;
  //   transform: translate(-50%, -50%);
  //   color: white;
  // }

  // li svg {
  //   position: absolute;
  //   display: block;
  //   height: 40px;
  //   width: 40px;
  //   left: 50%;
  //   top: 50%;
  //   transform: translate(-50%, -50%);
  //   z-index: 99999999999999999999999999;
  //   color: white;

  //   &::before {
  //     content: "";
  //     height: 44px;
  //     width: 44px;
  //     box-shadow: $rainbow-box-shadow-dark;
  //     border-radius: 22px;
  //     display: block;
  //     color: white;
  //   }
  // }
}
</style>
