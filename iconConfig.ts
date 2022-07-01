/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
/* import font awesome icon component */

/* add some free styles */
// import { faTwitter } from '@fortawesome/free-brands-svg-icons'
// import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
// /* add some pro styles */
import { faUserAstronaut } from "@fortawesome/pro-light-svg-icons";
// import {  } from '@fortawesome/pro-thin-svg-icons'
import { faBomb, faFileUser } from "@fortawesome/pro-duotone-svg-icons";
/* import specific icons */
import {
  faHandshake,
  faRss,
  faPencil,
  faBriefcase,
  faConciergeBell,
} from "@fortawesome/pro-regular-svg-icons";

/* add icons to the library */
library.add(
  faBomb,
  faBriefcase,
  faConciergeBell,
  faFileUser,
  faHandshake,
  faPencil,
  faRss,
  faUserAstronaut
);
