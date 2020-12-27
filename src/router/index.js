import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default [
  {
    path: "/login",
    name: "login",
    component: () => import(/* webpackChunkName: "LogIn" */ "@/views/LogIn"),
    meta: {
      layout: () => import(/* webpackChunkName: "Auth" */ "@/layouts/Auth"),
      requiresAuth: false
    }
  },
  {
    path: "/register",
    name: "register",
    component: () =>
      import(/* webpackChunkName: "Register" */ "@/views/Register"),
    meta: {
      layout: () => import(/* webpackChunkName: "Auth" */ "@/layouts/Auth"),
      requiresAuth: false
    }
  },
  {
    path: "/article",
    name: "article",
    component: () => import(/* webpackChunkName: "Posts" */ "@/views/Posts"),
    meta: {
      layout: () =>
        import(/* webpackChunkName: "Dashboard" */ "@/layouts/Dashboard"),
      requiresAuth: true
    }
  }
];
