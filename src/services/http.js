import axios from "axios";

/* set VUE_APP_CUSTOM_PROXY for using custom proxy */
const baseUrl = process.env.VUE_APP_CUSTOM_PROXY;

export default class Http {
  constructor() {
    this.$http = axios.create({
      baseUrl
    });
  }

  normalizeOptions(options) {
    return {
      ...options,
      headers: {
        Authorization: undefined
      }
    };
  }

  get(endpoint, options = {}) {
    return this.$http.get(endpoint, this.normalizeOptions(options));
  }

  post(endpoint, body, options = {}) {
    return this.$http.post(endpoint, body, this.normalizeOptions(options));
  }

  put(endpoint, body, options = {}) {
    return this.$http.put(endpoint, body, this.normalizeOptions(options));
  }

  delete(endpoint, body, options = {}) {
    return this.$http.delete(endpoint, body, this.normalizeOptions(options));
  }
}
