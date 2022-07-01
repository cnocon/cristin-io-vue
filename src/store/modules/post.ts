/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
const VUE_APP_BUTTERCMS_API_TOKEN = process.env.VUE_APP_BUTTERCMS_API_TOKEN;
// const butter = require("buttercms")(VUE_APP_BUTTERCMS_API_TOKEN);
import Butter from "buttercms";
const butter = Butter(VUE_APP_BUTTERCMS_API_TOKEN);

// import PostService from "@/services/PostService";
import { Action } from "vuex";

export const namespaced = true;

export const state = {
  posts: [],
  totalPosts: 0,
  post: {},
};

export const mutations = {
  SET_POSTS(state: { posts: any }, posts: any) {
    state.posts = posts;
  },
  SET_POST(state: { post: any }, post: any) {
    state.post = post;
  },
  SET_TOTAL_POSTS(state: { totalPosts: number }, totalPosts: number) {
    state.totalPosts = totalPosts;
  },
};

export const actions = {
  fetchPosts(
    { commit }: { commit: any },
    {
      page,
      perPage,
      excludeBody,
    }: { page: number; perPage: number; excludeBody: boolean }
  ) {
    const allPosts = butter.post.list({ page, perPage, excludeBody });
    allPosts
      .then((response: { data?: { data?: any; meta: { count: any } } }) => {
        commit("SET_POSTS", response?.data?.data);
        commit("SET_TOTAL_POSTS", response?.data?.meta.count);
      })
      .catch((error: any) => {
        console.log(error);
      });
  },
  getPost({ commit }: any, payload: any) {
    butter.post
      .retrieve(payload)
      .then((response: { data?: { data?: any } }) => {
        commit("SET_POST", response?.data?.data);
      });
  },
};

export const getters = {};
