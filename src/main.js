import Vue from "vue";
import App from "./App";
import { BootstrapVue } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "@/styles/app.css";
import router from "./router";
import "@/api";
import store from "./store";
import Notifications from "vue-notification";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(Notifications);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
