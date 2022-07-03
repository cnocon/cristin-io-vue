<template>
  <Page v-if="data" classes="resume-page">
    <PageHeader
      iconClass="fa-light fa-file-user"
      text="Résumé"
      alignment="center"
    />
    <div class="row resume-row">
      <div class="col-lg-7 col-md-12 left-column">
        <span class="rule"></span>
        <div class="work-history">
          <div class="rule"></div>
          <h3>
            <!--<font-awesome-icon icon="fa-light fa-briefcase" size="sm" />-->
            <span>Work History</span>
          </h3>
          <div class="timeline">
            <ResumeItem
              :item="job"
              itemClass="work-item"
              :key="index"
              v-for="(job, index) in resume.experience"
            />
          </div>
        </div>
      </div>

      <!-- BEGIN RIGHT COLUMN -->
      <div class="col-lg-5 col-md-12 right-column">
        <h3>
          <!--<font-awesome-icon
            class="fa-light fa-hands-heart"
          ></font-awesome-icon>-->
          <span>Service</span>
        </h3>
        <div class="service">
          <ResumeItem
            v-for="(service, index) in resume.volunteering"
            class="service-item"
            descItemClass="list-style-none"
            descClass="pl-0"
            :item="service"
            :key="index"
          />
        </div>

        <h3>
          <font-awesome-icon class="fa-regular fa-code"></font-awesome-icon>
          <span>Skills</span>
        </h3>
        <div class="skills">
          <Skill
            v-for="(skill, index) in resume.skills"
            :skill="skill"
            :key="index"
          />
        </div>

        <h3>
          <!--<font-awesome-icon
            class="fa-light fa-gem adjust-top"
          ></font-awesome-icon>-->
          <span>Assets</span>
        </h3>
        <div class="assets pb-3">
          <ul class="mt-0">
            <li
              v-for="(asset, index) in resume.assets"
              :key="index"
              class="asset-item"
            >
              <font-awesome-icon icon="fa-regular fa-check" />
              <span v-html="asset"></span>
            </li>
          </ul>
        </div>

        <h3>
          <!--<font-awesome-icon icon="fa-regular fa-graduation-cap" />-->
          <span>Education</span>
        </h3>
        <div class="education">
          <ResumeItem
            :item="edu"
            :key="index"
            itemClass="edu-item"
            descClass="pl-0"
            descItemClass="list-style-none"
            v-for="(edu, index) in resume.education"
          />
        </div>

        <Testimonial
          :testimonial="{
            content:
              'How we spend our days is, of course, how we spend our lives. What we do with this hour, and that one, is what we are doing.',
          }"
        />

        <div class=""><Connect /></div>
      </div>
    </div>

    <PageHeader
      iconClass="fa-regular fa-graduation-cap"
      text="Recent Coursework"
      alignment="center"
    />
    <div class="courses-row">
      <div v-for="(course, cIndex) in courses" :key="cIndex" class="course">
        <figure>
          <img
            :data-url="course.img"
            :src="course.img"
            :alt="course.name"
            :title="course.name"
          />
        </figure>
        <h3>
          <a :href="course.url" target="_blank" rel="noopener noreferrer">
            {{ course.name }}
          </a>
        </h3>
        <h4>
          <span class="company">{{ course.company }}</span>
          <span v-if="course.instructor">
            <span class="instructor">&nbsp;|&nbsp;{{ course.instructor }}</span>
          </span>
        </h4>
        <p class="description">
          {{ course.description }}
          <a
            v-if="course.certificate_url"
            :href="course.certificate_url"
            class="btn-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Certificate <i class="fa-r fa-external-link"></i>
          </a>
        </p>
      </div>
    </div>
  </Page>
</template>

<script lang="ts">
import Vue from "vue";
import PageHeader from "@/components/shared/PageHeader";
import { IAppData, IResumeData } from "@/types/app.ts";
import data from "../data/app.ts";
import ResumeItem from "@/components/ResumeItem";
import Skill from "@/components/Skill";
import Connect from "@/components/shared/Connect.vue";
import Testimonial from "@/components/shared/Testimonial.vue";
import Page from "@/components/shared/Page.vue";

export default Vue.extend({
  name: "Resume",
  components: {
    ResumeItem,
    Skill,
    Connect,
    PageHeader,
    Testimonial,
    Page,
  },
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data(): () => { data: IAppData; resume: IResumeData; courses: Array } {
    return {
      data: data,
      resume: data.resume,
      courses: data.courses,
    };
  },
});
</script>

<style scoped lang="scss">
@import "@/scss/_variables.scss";
.timeline {
  @media all and (min-width: $breakpoint-sm-min) {
    padding-left: 68px;
  }
}
.work-history {
  position: relative;
  z-index: 1;
  margin-bottom: 5rem;

  @media all and (min-width: $breakpoint-sm-min) {
    padding-right: 30px;
  }

  .rule {
    position: absolute;
    display: none;
    top: 33px;
    left: 26.5px;
    z-index: 0;
    width: 3px;
    height: calc(100% - 33px);
    background-color: $border-light-gray;

    @media all and (min-width: $breakpoint-sm-min) {
      display: block;
    }
  }
}

.resume-row {
  h3 {
    position: relative;
    padding: 0 0 1rem 0;
    font-size: 1rem;
    line-height: 3.5rem;
    font-weight: 900;
    font-family: $font-tertiary;
    text-transform: uppercase;
    margin-top: 0;

    // .svg-wrapper {
    //   position: absolute;
    //   height: 3rem;
    //   width: 3rem;
    //   border-radius: 50%;
    //   left: 1.5rem;
    //   top: 1.5rem;
    //   transform: translate(-50%, -50%);
    // }

    // svg {
    //   position: absolute;
    //   padding: 0.5rem;
    //   height: 2.5rem;
    //   width: 2.5rem;
    //   border-radius: 50%;
    //   border: 2px solid $color-primary-light;
    //   background-color: $white;
    //   z-index: 1;
    //   color: $color-primary-med;
    //   background-color: $white;

    //   &.adjust-top {
    //     top: calc(50% + 2px);
    //   }
    // }
  }
  .left-column {
    h3 {
      @media all and (max-width: $breakpoint-sm) {
        padding-left: 0;
        line-height: inherit;
        padding-bottom: 2rem;
        margin-top: 0.5rem;
      }

      span {
        background-color: $color-primary;
        color: $white;
        border-radius: 4px;
        padding-left: 6px;
        width: 100%;
        display: inline-block;

        @media all and (max-width: $breakpoint-sm) {
          text-align: center;
          width: 100%;
        }
      }

      svg {
        @media all and (max-width: $breakpoint-sm) {
          display: none;
        }
      }
    }
  }
  .right-column {
    h3 {
      padding-left: 0;

      @media all and (max-width: $breakpoint-sm) {
        line-height: inherit;
        padding-bottom: 0;
        margin-top: 0;
      }

      span {
        display: inline-block;
        width: 100%;
        z-index: 2;
        background-color: $white;
        padding-left: 6px;
        color: $white;
        background-color: $color-primary;
        border-radius: 4px;

        @media all and (max-width: $breakpoint-sm) {
          text-align: center;
        }
      }

      svg {
        display: none;
      }
    }
  }
}
// .service {
//   @media all and (max-width: $breakpoint-sm) {
//     padding-bottom: 3rem;
//   }

//   .service-item {
//     padding-bottom: 2rem;
//     @media all and (max-width: $breakpoint-sm) {
//       padding-bottom: 1rem;
//     }
//   }
// }
.education {
  @media all and (max-width: $breakpoint-sm) {
    padding-top: 2rem;
  }
}
.assets {
  ul {
    list-style: none;
    padding-left: 0;

    li {
      font-size: 0.875rem;
    }
  }

  .asset-item {
    padding: 5px 0 10px;

    svg {
      display: inline-block;
      margin-top: 5px;
      width: 2rem;
      vertical-align: top;
      color: $border-blue-vivid;
    }

    span {
      display: inline-block;
      font-weight: 300;
      width: calc(100% - 2rem);

      b {
        font-weight: 500;
      }
    }
  }
}
.quote {
  padding: 0;
  max-width: 37.5rem;
  margin: 0 auto;

  blockquote {
    background-color: $black;
    padding: 1.875rem;
    padding-bottom: 0.625rem;
    border-radius: 4px;
    left: 0;
    top: 0;

    p {
      color: $white;

      svg {
        display: inline-block;
        color: lighten($color-primary, 10%);
        font-size: 1.25rem;
        width: 0.8125rem;
      }

      span {
        display: inline-block;
        padding: 5px 0 0 18px;
        margin-top: -25px;
        font-size: 22px;
        line-height: 1.3em;
        font-family: $font-primary;
        font-weight: 700;
        text-align: center;
      }
    }

    cite {
      display: block;
      color: $white;
      text-align: center;
      font-weight: 500;
      padding-bottom: 20px;
    }
  }
}
.courses-row {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  padding: 1rem 0;

  /**
    * Mobile Styles (3n)
    */
  .course {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    padding: 1.5rem;
    flex-basis: 100%;
    margin: 0 0 2rem;
    box-shadow: $box-shadow-md;

    @media all and (min-width: $md-breakpoint-min) {
      flex-basis: calc(50% - 0.5rem);
      margin-right: 1rem;
      margin-left: 0;

      // First of 2 on tablet
      &:nth-child(2n - 1) {
        // Default
      }
      // Second of 2 on tablet
      &:nth-child(2n) {
        margin-right: 0;
      }
    }

    @media all and (min-width: $lg-breakpoint-min) {
      flex-basis: calc(33.33333% - 0.6666666667rem);
      margin-left: 0;
      margin-right: 1rem;

      // First of 3 on desktop
      &:nth-child(3n - 2) {
        margin-left: 0;
        margin-right: 1rem;
      }
      // Second of 3 on desktop
      &:nth-child(3n - 1) {
        margin-left: 0;
        margin-right: 1rem;
      }
      // Third of 3 on desktop
      &:nth-child(3n) {
        margin-right: 0;
        margin-left: 0;
      }
    }

    figure {
      display: inline-block;
      text-align: center;
      height: 80px;
      padding-bottom: 1.5rem;
    }
    img {
      text-align: center;
      max-height: 80px;
      border-radius: 8px;
    }

    h3 {
      margin-top: 0.5rem;
      line-height: 1em;

      a {
        color: $color-primary;
        font-weight: 700;
        font-size: 1.45rem;
        line-height: 1.25em;
        font-family: $font-primary;
        background-image: $rainbow-gradient-med;
        background-size: 100% 2px;
        background-position: center bottom;
        background-repeat: no-repeat;

        &:hover {
          background-image: none;
        }
      }
    }

    .description {
      font-weight: 400;
      margin-top: 0;
      text-align: left;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      margin-bottom: 0.5rem;
    }

    .instructor,
    .company {
      font-family: $font-tertiary;
      font-weight: 400;
    }

    .btn-link {
      display: inline-block;
      line-height: 1.25em;
      font-weight: 400;
      border-bottom: 1px solid $border-med-gray;
      background-image: none;

      &:hover {
        border-bottom: 0;
      }

      svg {
        font-size: 0.875rem;
        color: lighten($color-primary, 20%);
        line-height: inherit;
        vertical-align: top;
      }
    }

    // .certificate {
    // 	display: inline-block;
    // 	margin: 1rem 0 0;
    // 	border: 2px solid $color-primary;
    // 	color: $color-primary;
    // 	text-transform: uppercase;
    // 	padding: 1px 10px;
    // 	border-radius: 5px;
    // 	text-decoration: none;
    // 	font-weight: 600;
    // 	font-size: 14px;
    // 	transition: background-color 0.2s, color 0.2s;
    // 	background-image: none;

    // 	&:hover {
    // 		background-color: $color-primary;
    // 		color: $white;
    // 	}
    // }
  }
}
</style>
