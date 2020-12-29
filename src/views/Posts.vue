<script>
export default {
  name: 'Posts',
  created() {
    this.featchArticlesList();
  },
  methods: {
    featchArticlesList() {
      this.$api.posts.featchArticle().then(({ result }) => {
        console.log(result);
        this.$store.commit('SET_ARTICLE', result);
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
          <tr>
            <th scope="row">1</th>
            <td>Article title</td>
            <td>@author_username</td>
            <td>list of tags</td>
            <td>First 20 words of article body</td>
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
              June 11 ,2019
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
