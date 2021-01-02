<script>
import BaseButton from "@/components/shared/BaseButton";
export default {
  name: "HeaderMain",
  components: {
    BaseButton
  },
  props: {
    name: {
      type: String,
      default: ""
    }
  },
  computed: {
    userName() {
      return this.$store.state?.user?.username;
    }
  },
  methods: {
    logout() {
      this.$store.commit("LOGOUT");
      this.$router.push({ name: "login" });
    }
  }
};
</script>
<template>
  <header class="header bg-dark d-flex justify-content-between">
    <div class="d-flex align-items-center">
      <p class="fz-22 text-white">
        Arvan Challenge
      </p>
      <p class="ml-20 fz-16 text-white">Welcome {{ userName }}</p>
    </div>
    <BaseButton class="btn-outline-info" text="Logout" @click="logout" />
  </header>
</template>
