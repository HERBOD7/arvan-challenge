<script>
import HeaderMain from "@/components/layouts/HeaderMain";
import SideBar from "@/components/layouts/SideBar";
export default {
  name: "Dashboard",
  components: {
    HeaderMain,
    SideBar
  }
};
</script>

<template>
  <div>
    <HeaderMain name="name" />
    <div class="d-flex">
      <SideBar />
      <RouterView />
    </div>
  </div>
</template>
