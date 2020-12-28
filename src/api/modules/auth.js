import $http from '@/services/http';

const LOGIN_ENDPOINT = '/users/login';
const REGISTRATION_ENDPOINT = '/users';

export default {
  loginUser(email, password) {
    return $http.post(LOGIN_ENDPOINT, {
      user: {
        email,
        password
      }
    });
  },
  registerUser(username, email, password) {
    return $http.post(REGISTRATION_ENDPOINT, {
      user: {
        username,
        email,
        password
      }
    });
  }
};
