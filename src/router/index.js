import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default [
  {
    path: "/login",
    name: "login",
    component: () => import(/* webpackChunkName: "Login"*/ "@/views/"),
  }
];
