import $http from "@/services/http";

const LOGIN_ENDPOINT = "/articles";
const REGISTRATION_ENDPOINT = "/articles";

export default {
  loginUser(body) {
    return $http.post(LOGIN_ENDPOINT, body);
  },
  registerUser(body) {
    return $http.post(REGISTRATION_ENDPOINT, body);
  }
};
