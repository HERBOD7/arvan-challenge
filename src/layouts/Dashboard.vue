<script>
import HeaderMain from "@/components/layouts/HeaderMain";
import SideBar from "@/components/layouts/SideBar";
// import Posts from "@/views/Posts";
// import NewArticle from "@/views/NewArticle";
import EditArticle from "@/views/EditArticle";
export default {
  name: "Dashboard",
  components: {
    HeaderMain,
    SideBar,
    EditArticle
    // Posts,
    // NewArticle
  }
};
</script>

<template>
  <div>
    <HeaderMain name="name" />
    <div class="d-flex">
      <SideBar />
      <!-- <Posts /> -->
      <!-- <NewArticle /> -->
      <EditArticle />
    </div>
  </div>
</template>
