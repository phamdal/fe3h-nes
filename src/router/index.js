import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/character", 
    name: "character", 
    component: () => 
      import("../views/Character.vue"), 
    props: true
  }, 
  {
    path: "/lostItems", 
    name: "lost-items", 
    component: () => 
      import("../views/LostItems.vue")
  },
  {
    path: "/lecture", 
    name: "lecture-questions", 
    component: () => 
      import("../views/Lecture.vue")
  }, 
  {
    path: "/confessionals", 
    name: "confessionals", 
    component: () => 
      import("../views/Confessionals.vue")
  }, 
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
