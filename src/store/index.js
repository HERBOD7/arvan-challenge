import Vue from "vue";
import Vuex from "vuex";
import storage from "@/utils/storage";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;

      storage.setItem("user", user);
    },
    LOGOUT(state) {
      state.user = null;
      storage.removeItem("user");
    }
  },
  actions: {}
});
