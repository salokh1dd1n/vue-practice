import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home";
import About from "../views/About";
import Lesson1 from "../views/Lesson1";
import Lesson2 from "../views/Lesson2";
import Lesson3 from "../views/Lesson3";
import Lesson4 from "../views/Lesson4";
import Lesson5 from "../views/Lesson5";
import Lesson6 from "../views/Lesson6";
import Lesson7 from "../views/Lesson7";
import Lesson8 from "../views/Lesson8";

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
  {
    path: "/lesson2",
    name: "Lesson2",
    component: Lesson2,
  },
  {
    path: "/lesson3",
    name: "Lesson3",
    component: Lesson3,
  },
  {
    path: "/lesson4",
    name: "Lesson4",
    component: Lesson4,
  },
  {
    path: "/lesson5",
    name: "Lesson5",
    component: Lesson5,
  },
  {
    path: "/lesson6",
    name: "Lesson6",
    component: Lesson6,
  },
  {
    path: "/lesson7",
    name: "Lesson7",
    component: Lesson7,
  },
  {
    path: "/lesson8",
    name: "Lesson8",
    component: Lesson8,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
