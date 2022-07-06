import Vue from "vue"
import VueRouter, { RouteConfig } from "vue-router"
import HomeNew from "../views/HomeNew.vue"
import Portfolio from "@/views/Portfolio.vue"
import BlogPost from "@/views/BlogPost.vue"
import Blog from "@/views/Blog.vue"
import Resume from "@/views/Resume.vue"
import NotFound from "@/views/NotFound.vue"
import Documentation from "@/views/Documentation.vue"

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: HomeNew,
  },{
    path: "/documentation",
    name: "documentation",
    component: Documentation,
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
    path: "/blog",
    name: "blog",
    component: Blog,
  },
  {
    path: "/blog/:slug",
    name: "blogPost",
    component: BlogPost,
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
