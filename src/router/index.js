import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home";
import About from "../views/About";
import Lesson1 from "../views/Lesson1";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/lesson1",
    name: "Lesson1",
    component: Lesson1,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
