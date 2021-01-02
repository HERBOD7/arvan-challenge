<script>
export default {
  name: "Posts",
  beforeRouteEnter(to, from, next) {
    next(data => {
      data.prevRoute = from;
    });
  },
  data() {
    return {
      prevRoute: null
    };
  },
  computed: {
    articles() {
      return this.$store.state?.article;
    }
  },
  created() {
    this.featchArticlesList();
    this.showNewArticleNotif();
  },
  methods: {
    showNewArticleNotif() {
      if (this.prevRoute?.path === "/articles/create") {
        this.$notify({
          group: "new-article",
          type: "error",
          position: "top right",
          text: "Well done! Article created successfuly",
          duration: 1000,
          speed: 100
        });
      }
    },
    featchArticlesList() {
      this.$api.posts.fetchPosts().then(result => {
        this.$store.commit("SET_ARTICLE", result.articles);
      });
    }
  }
};
</script>

<template>
  <div class="content-container">
    <div class="d-flex justify-content-between">
      <p class="fz-40">
        All Posts
      </p>
      <notifications group="new-article" />
    </div>
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
                <b-dropdown
                  :id="index"
                  right
                  text="..."
                  variant="info"
                  class="m-2"
                >
                  <b-dropdown-item>
                    <RouterLink :to="{ path: '/articles/' + article.slug }">
                      Edit
                    </RouterLink>
                  </b-dropdown-item>
                  <b-dropdown-item>Delete</b-dropdown-item>
                </b-dropdown>
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
