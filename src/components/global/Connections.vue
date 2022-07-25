<template>
  <ul>
    <li v-for="connect in connections" v-bind:key="connect.link">
      <IconButton
        :icon="connect.icon"
        v-on:click="window ? window.location.pathname(connect.link) : null"
        target="_blank"
        rel="noopener noreferrer"
      >
        <a :href="connect.link" target="_blank" rel="noopener noreferrer">{{
          connect.text
        }}</a>
      </IconButton>
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
  methods: {
    handleClick(e) {
      e.preventDefault()
      this.$router.push("/resume")
    },
  },
})
</script>

<style scoped lang="scss">
@import "@/assets/scss/theme/_helpers.scss";
ul {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  li {
    flex-grow: 1;
    flex-direction: column;
    flex-basis: calc(100% / 6);
  }
  .easter-egg-button {
    content: "HI CRISTIN!";
    display: block;
  }
}
</style>
