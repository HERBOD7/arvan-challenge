import $http from '@/services/http';

const FETCH_POSTS_ENDPOINT = '/articles';
const ADD_POST_ENDPOINT = '/articles';
const EDIT_POST_ENDPOINT = (id) => `/articles/${id}`;
const DELETE_POSTS_ENDPOINT = (id) => `/posts/${id}`;

export default {
  fetchPosts() {
    return $http.get(FETCH_POSTS_ENDPOINT);
  },
  addPost(body) {
    return $http.post(ADD_POST_ENDPOINT, body);
  },
  editPost(id, body) {
    return $http.put(EDIT_POST_ENDPOINT(id), body);
  },
  deletePost(id) {
    return $http.delete(DELETE_POSTS_ENDPOINT(id));
  }
};
