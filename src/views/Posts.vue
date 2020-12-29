<script>
export default {
  name: "Posts",
  computed: {
    articles() {
      return this.$store.state?.article;
    }
  },
  created() {
    this.fetchArticlesList();
  },
  methods: {
    fetchArticlesList() {
      this.$api.posts.fetchPosts().then(result => {
        this.$store.commit("SET_ARTICLE", result.articles);
      });
    }
  }
};
</script>

<template>
  <div class="content-container">
    <p class="fz-40">
      All Posts
    </p>
    <div class="mt-27">
      <table class="table table-sm m-0">
        <thead class="thead-light">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Title</th>
            <th scope="col">Author</th>
            <th scope="col">Tags</th>
            <th scope="col">Excerpt</th>
            <th scope="col">Created</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(article, index) in articles" :key="index">
            <th scope="row">{{ index }}</th>
            <td>{{ article.title }}</td>
            <td>{{ article.author["username"] }}</td>
            <td>
              <p v-for="tag of article.tagList" :key="tag">
                {{ tag }}
              </p>
            </td>
            <td>{{ article.body.slice(0, 20) }}</td>
            <td class="d-flex alig-items flex-row-reverse align-items-center">
              <div class="dropdown btn-group ml-30">
                <button
                  type="button"
                  class="btn btn-info dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  ...
                </button>
                <div class="dropdown-menu dropdown-menu-right">
                  <button class="dropdown-item" type="button">Edit</button>
                  <button class="dropdown-item" type="button">Delete</button>
                </div>
              </div>
              {{ article.createdAt }}
            </td>
          </tr>
        </tbody>
      </table>
      <ul class="pagination d-flex justify-content-center mt-60">
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
            <span class="sr-only">Previous</span>
          </a>
        </li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
            <span class="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
