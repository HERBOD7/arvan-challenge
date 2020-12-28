import Vue from 'vue';

import postsModule from './modules/posts.js';
import authModule from './modules/auth.js';

Vue.prototype.$api = {
  posts: postsModule,
  auth: authModule
};
