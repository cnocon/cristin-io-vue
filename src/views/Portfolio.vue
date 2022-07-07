<template>
  <Page classes="portfolio-page" text="Portfolio" icon="fa-duotone fa-folders">
    <div v-for="(item, i) in portfolio" :key="`${i}-portfolio-item`">
      <img v-bind:src="item.previewImage" v-bind:alt="item.previewAlt" />
    </div>
  </Page>
</template>

<script lang="ts">
import Vue from "vue";
import Page from "@/components/global/Page.vue";

export default Vue.extend({
  name: "Portfolio",
  components: {
    Page,
  },
  data() {
    return {
      portfolio: [
        {
          name: "GitHub Stats Card for React",
          links: [
            {
              href: "https://github.com/cnocon/react-github-stats-card-v2",
              text: "GitHub",
            },
            {
              href: "https://www.npmjs.com/package/react-github-stats-card-v2",
              text: "NPM",
            },
            {
              href: "https://react-github-stats-card-v2-demo.netlify.app",
              text: "Demo",
            },
          ],
          summary: [
            "A simple card, with or without attached styles, to show some basic GitHub statistics for a given GitHub user.",
            "There are multiple theme options that can be implemented by passing props to the component.",
            "Usage instructions are included in the <a target='blank' rel='noopener' href='https://github.com/cnocon/react-github-stats-card-v2#readme'>repository README file</a>.",
          ],
          technologies: [
            "GitHub API",
            "JavaScript",
            "Node",
            "React",
            "Webpack",
            "Storybook",
          ],
          previewImage:
            "https://www.dropbox.com/s/h1fk109v2aluaoz/stats-card.png?dl=1",
          previewAlt: "GitHub Stats Card for React Component",
        },
        {
          name: "Front End Development Flash Cards App",
          links: [
            {
              href: "https://github.com/cnocon/flash-cards",
              text: "GitHub",
            },
            {
              href: "https://fed-flash-cards.netlify.app",
              text: "Demo",
            },
          ],
          summary: [
            "A flash card app specifically geared toward teaching front end development skills. The questions are pulled in from a custom-built API and MongoDB database.",
          ],
          technologies: [
            "MongoDB (custom API)",
            "Mongoose (custom API)",
            "Express (custom API)",
            "Node (custom API)",
            "React",
            "React Context API",
          ],
          previewImage:
            "https://www.dropbox.com/s/eo7a2yqya792c5n/flashcards.png?dl=1",
          previewAlt: "Front End Development Flash Cards Application",
        },
        {
          name: "Weather Charts App",
          links: [
            {
              href: "https://github.com/cnocon/weather-charts-app-new",
              text: "GitHub",
            },
            {
              href: "https://weather-charts-app.netlify.app",
              text: "Demo",
            },
          ],
          summary: [
            "This app lets you see a 7-day forecast including temperature, pressure, and humidity for any major U.S. city you search for. As a bonus, you can see the city rendered in satellite view in a Google Map.",
          ],
          technologies: [
            "React",
            "Redux",
            "Google Maps API",
            "Open Weather API",
            "Bootstrap",
          ],
          previewImage:
            "https://www.dropbox.com/s/30e7e2v8qp4yu49/weather.png?dl=1",
          previewAlt: "Weather Charts Application",
        },
        {
          name: "CRISTIN.IO",
          links: [
            {
              href: "https://github.com/cnocon/vue-cristin-io-2",
              text: "GitHub",
            },
            {
              href: "https://weather-charts-app.netlify.app",
              text: "Demo",
            },
          ],
          summary: [
            "CRISTIN.IO is an <b>obvious</b> virtual wonderland that includes a front end web development blog authored by yours truly, my résumé, portfolio (surprise!), and some general information about me and the services I offer.",
          ],
          technologies: ["Vue", "Vuex", "Vue Router", "ButterCMS API"],
          previewImage:
            "https://www.dropbox.com/s/r9luh3jymxesfus/cristin-io.png?dl=1",
          previewAlt: "CRISTIN.IO Website",
        },
        {
          name: "YouTube Search App",
          links: [
            {
              href: "https://github.com/cnocon/youtube-search-new",
              text: "GitHub",
            },
            {
              href: "https://youtube-search-new.netlify.app",
              text: "Demo",
            },
          ],
          summary: ["Search for and watch content from YouTube."],
          technologies: ["YouTube API V3", "React", "Bootstrap"],
          previewImage:
            "https://www.dropbox.com/s/3gc2omblwyfpgz2/youtube.png?dl=1",
          previewAlt: "YouTube Search Application",
        },
        {
          name: "CenturyLink Small Business",
          links: [
            {
              href: "https://business.centurylink.com/",
              text: "Demo",
            },
          ],
          summary: [
            "Built using a proprietary component library, this website searches for service in a user's zip code and updates content based on product availability along with showcasing small business products. Please note I cannot provide the repository link because it is private.",
          ],
          technologies: [
            "Component-based architecture",
            "Responsive design",
            "SCSS",
            "Handlebars",
            "JavaScript (ES6)",
            "PHP",
          ],
          previewImage:
            "https://www.dropbox.com/s/b9kw7gs380pfwck/clq.png?dl=1",
          previewAlt: "CenturyLink Small Business Website (for Clearlink)",
        },
      ],
    };
  },
});
</script>

<style scoped lang="scss">
// @import "@/assets/scss/theme/_helpers.scss";
.portfolio-page {
}
</style>
