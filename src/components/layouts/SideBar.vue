<script>
export default {
  name: "SideBar"
};
</script>
<template>
  <div class="side-bar bg-primary">
    <p class="fz-22 text-white side-bar-title">Post</p>
    <div class="mt3">
      <div class="fz-18 text-white side-bar-option">
        <RouterLink to="/articles">
          All Articles
        </RouterLink>
      </div>
      <div class="fz-18 text-white side-bar-option">
        <RouterLink to="/articles/create">
          New Article
        </RouterLink>
      </div>
    </div>
  </div>
</template>
