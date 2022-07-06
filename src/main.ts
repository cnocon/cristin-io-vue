import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import "@/config/theme/icons.ts"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

Vue.component("font-awesome-icon", FontAwesomeIcon)

Vue.config.productionTip = false

// ORDER OF IMPORTS MATTERS
import "@/assets/scss/theme/index.scss"

// new Vue({
//   router,
//   store,
//   render: (h) => h(App),
// }).$mount("#app")

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app")
