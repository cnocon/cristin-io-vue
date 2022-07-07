<template>
  <ul>
    <li :v-for="connect in connections" :v-key="connect.link">
      <IconButton
        :icon="connect.icon"
        :to="connect.link"
        target="_blank"
        rel="noopener noreferrer"
        >{{ connect.text }}</IconButton
      >
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from "vue"
import IconButton from "@/components/global/IconButton.vue"

export default Vue.extend({
  name: "Connections",
  components: {
    IconButton,
  },
  data() {
    return {
      connections: [
        {
          icon: "fa-brands fa-github",
          link: "https://github.com/cnocon",
          text: "GitHub",
          classes: "rainbow-box-shadow-rounded dark",
        },
        {
          icon: "fa-brands fa-codepen",
          link: "https://codepen.io/cnocon",
          text: "CodePen",
          classes: "rainbow-box-shadow-rounded dark",
        },
        {
          icon: "fa-brands fa-stack-overflow",
          link: "https://stackoverflow.com/users/2187039/cnocon",
          text: "Stack Overflow",
          classes: "rainbow-box-shadow-rounded dark",
        },
        {
          icon: "fa-brands fa-twitter",
          link: "https://twitter.com/cnocon",
          text: "Twitter",
          classes: "rainbow-box-shadow-rounded dark",
        },
        {
          icon: "fa-brands fa-linkedin-in",
          link: "https://www.linkedin.com/in/cristinoconnor",
          text: "LinkedIn",
          classes: "rainbow-box-shadow-rounded dark",
        },
        {
          icon: "fa-light fa-envelope",
          link: "mailto:her@cristin.io",
          text: "Email",
          classes: "rainbow-box-shadow-rounded dark",
        },
      ],
    }
  },
})
</script>

<style scoped lang="scss">
// @import "@/assets/scss/theme/_helpers.scss";
</style>
