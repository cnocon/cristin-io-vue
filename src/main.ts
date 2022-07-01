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
import { faConciergeBell } from "@fortawesome/pro-solid-svg-icons";
import { faFolders, faGraduationCap } from "@fortawesome/pro-regular-svg-icons";
import {
  faRss,
  faHandshake,
  faFileUser,
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
  faGem,
  faChartNetwork,
} from "@fortawesome/pro-light-svg-icons";
import {
  faEnvelope,
  faUserAstronaut,
  faHashtag,
  faPencil,
  faCode,
} from "@fortawesome/pro-light-svg-icons";

/* add icons to the library */
library.add(
  faEnvelope,
  faCode,
  faHashtag,
  faUserAstronaut,
  faHandshake,
  faJsSquare,
  faSass,
  faReact,
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
  faFileUser
);

/* add font awesome icon component */
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
