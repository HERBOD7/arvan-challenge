import axios from "axios";
import storage from "@/utils/storage";

function transformRes(res) {
  return res?.data || {};
}

class Http {
  constructor() {
    this.$http = axios.create({
      baseURL: "https://conduit.productionready.io/api"
    });
  }

  normalizeOptions(options) {
    const hasToken = storage.getItem('user');
    return {
      ...options,
      headers: {
        Authorization: hasToken?.token ? `Token ${hasToken.token}` : undefined
      }
    };
  }

  get(endpoint, options = {}) {
    return this.$http
      .get(endpoint, this.normalizeOptions(options))
      .then(transformRes);
  }

  post(endpoint, body, options = {}) {
    return this.$http
      .post(endpoint, body, this.normalizeOptions(options))
      .then(transformRes);
  }

  put(endpoint, body, options = {}) {
    return this.$http
      .put(endpoint, body, this.normalizeOptions(options))
      .then(transformRes);
  }

  delete(endpoint, body, options = {}) {
    return this.$http
      .delete(endpoint, body, this.normalizeOptions(options))
      .then(transformRes);
  }
}

export default new Http();
