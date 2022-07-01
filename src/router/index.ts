import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Portfolio from "@/views/Portfolio.vue";
import Post from "@/views/Post.vue";
import Posts from "@/views/Posts.vue";
import Resume from "@/views/Resume.vue";
import NotFound from "@/views/NotFound.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/portfolio",
    name: "portfolio",
    component: Portfolio,
  },
  {
    path: "/resume",
    name: "resume",
    component: Resume,
  },
  {
    path: "/posts",
    name: "posts",
    component: Posts,
  },
  {
    path: "/posts/:slug",
    name: "post",
    component: Post,
    props: true,
  },
  {
    path: "/:pathMatch(.*)",
    name: "404",
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
