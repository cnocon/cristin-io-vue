import Vue from "vue";
import Vuex from "vuex";
import * as post from "@/store/modules/post";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    post,
  },
});
