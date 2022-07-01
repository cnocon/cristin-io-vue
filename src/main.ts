import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
// import { faUserAstronaut } from "@fortawesome/pro-solid-svg-icons";
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
  faFolders,
  faUserAstronaut,
  faConciergeBell,
} from "@fortawesome/pro-regular-svg-icons";
import { faRss, faHandshake } from "@fortawesome/pro-duotone-svg-icons";
import { faEnvelope, faHashtag } from "@fortawesome/pro-light-svg-icons";
// import { } from "@fortawesome/pro-thin-svg-icons";

/* add icons to the library */
library.add(
  faEnvelope,
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
  faGithub
);

/* add font awesome icon component */
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
