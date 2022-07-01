/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import PostService from "../../../services/PostService";

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
  SET_POST(state: { post: any }, post: never) {
    state.post = post;
  },
  SET_TOTAL_POSTS(state: { totalPosts: any }, totalPosts: any) {
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
    }: { page: number; perPage: number; excludeBody?: boolean }
  ): () => void {
    return PostService.getPosts({ page, perPage, excludeBody })
      .then((response: { data: { data: any; meta: { count: any } } }) => {
        commit("SET_POSTS", response.data.data);
        commit("SET_TOTAL_POSTS", response.data.meta.count);
      })
      .catch((error: any) => {
        console.log(error);
      });
  },
  getPost({ commit }: any, postSlug: never) {
    PostService.getPost(postSlug).then((response: { data: { data: any } }) => {
      commit("SET_POST", response.data.data);
    });
  },
};

export const getters = {};
