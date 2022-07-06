<template>
  <Page v-if="data" classes="portfolio-page">
    <PageHeader
      text="Portfolio"
      iconClass="fa-regular fa-folders"
      alignment="center"
    ></PageHeader>
    <article
      v-for="(item, index) in portfolio"
      :key="index"
      class="row portfolio-item"
    >
      <header class="col-12">
        <h2>{{ item.name }}</h2>
        <p class="links">
          <span v-for="(link, linkIndex) in item.links" :key="linkIndex">
            <span v-if="linkIndex !== 0">&nbsp;|&nbsp;</span>
            <a :href="link.href" target="_blank" rel="noopener noreferrer">
              {{ link.text }}
            </a>
          </span>
        </p>
      </header>

      <div class="col-12 col-md-7">
        <h4>Summary</h4>
        <div v-for="(paragraph, pIndex) in item.summary" :key="pIndex">
          <p v-html="paragraph"></p>
        </div>

        <h4>Technologies</h4>
        <ul>
          <li v-for="(tech, techIndex) in item.technologies" :key="techIndex">
            {{ tech }}
          </li>
        </ul>
      </div>

      <div class="col-12 col-md-5 image-wrapper">
        <img :src="item.previewImage" :alt="item.previewAlt" />
      </div>
    </article>
  </Page>
</template>

<script>
import PageHeader from "@/components/shared/PageHeader.vue"
import Page from "@/components/shared/Page.vue"
import data from "../data/app.ts"

export default {
  name: "Portfolio",
  components: {
    PageHeader,
    Page,
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data() {
    return {
      data: data,
      portfolio: data.portfolio,
    }
  },
  methods: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    computedImgSrc(src) {
      const img = `@/assets/images/pages/portfolio/${src}`
      return img
    },
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  mounted() {
    if (!this.show) {
      this.show = true
    }
  },
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/theme/_variables.scss";
.portfolio-item h2 {
  font-size: 2rem;

  @media all and (max-width: $breakpoint-sm) {
    font-size: 1.65rem;
    line-height: 1.35;
  }
}
.portfolio-item h2,
.portfolio-item .links {
  text-align: center;

  @media all and (max-width: $breakpoint-sm) {
    text-align: left;
  }
}
ul {
  list-style: disc;
  padding-left: 20px;
}

p,
li {
  font-weight: 400;
}

h4 {
  margin: 2rem 0 1rem;
}

.image-wrapper {
  @media all and (min-width: $breakpoint-md) {
    padding-left: 3rem;
    max-width: 400px;
    overflow: hidden;
    float: right;
  }

  img {
    width: 100%;
    display: block;
    border: 2px solid $border-light-gray;

    @media all and (min-width: $breakpoint-md) {
      margin: 0 0 2rem 1rem;
      max-width: 500px;
    }
  }
}
</style>
