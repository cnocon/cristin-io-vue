import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
// import { } from "@fortawesome/pro-thin-svg-icons";
import {
  faConciergeBell,
  faChartBar,
  faQuoteLeft,
} from "@fortawesome/pro-solid-svg-icons";
import {
  faFolders,
  faGraduationCap,
  faExclamationTriangle,
  faGem,
  faCode,
} from "@fortawesome/pro-regular-svg-icons";
import {
  faRss,
  faHandshake,
  faFileUser,
  faBomb,
} from "@fortawesome/pro-duotone-svg-icons";
import {
  faJsSquare,
  faSass,
  faReact,
  faGit,
  faVuejs,
  faNodeJs,
  faCodepen,
  faStackOverflow,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import {
  faBrackets,
  faSubway,
  faPencil,
  faChartNetwork,
  faTrophyAlt,
  faBriefcase,
} from "@fortawesome/pro-light-svg-icons";
import {
  faEnvelope,
  faUserAstronaut,
  faHashtag,
  faHandsHeart,
} from "@fortawesome/pro-light-svg-icons";

/* add icons to the library */
library.add(
  faEnvelope,
  faTrophyAlt,
  faBomb,
  faCode,
  faHashtag,
  faHandsHeart,
  faUserAstronaut,
  faHandshake,
  faJsSquare,
  faSass,
  faQuoteLeft,
  faReact,
  faBriefcase,
  faGit,
  faVuejs,
  faNodeJs,
  faBrackets,
  faSubway,
  faGem,
  faRss,
  faChartNetwork,
  faFolders,
  faConciergeBell,
  faCodepen,
  faStackOverflow,
  faLinkedinIn,
  faGithub,
  faPencil,
  faGraduationCap,
  faFileUser,
  faExclamationTriangle,
  faChartBar
);

/* add font awesome icon component */
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
