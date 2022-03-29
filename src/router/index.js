import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/htmlcss",
    name: "htmlcss",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/htmlcss.vue"),
  },
  {
    path: "/javascript",
    name: "javascript",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/javascript.vue"),
  },
  {
    path: "/vue",
    name: "vue",
    component: () => import(/* webpackChunkName: "about" */ "../views/vue.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
