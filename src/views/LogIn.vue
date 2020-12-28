<script>
import InputField from "@/components/auth/InputField";
import BaseButton from "@/components/shared/BaseButton";
export default {
  name: "LogIn",
  components: {
    InputField,
    BaseButton
  },
  data() {
    return {
      emailAddress: "",
      userPassword: ""
    };
  },
  methods: {
    submit() {
      this.$api.auth
        .loginUser(this.emailAddress, this.userPassword)
        .then(({ user }) => {
          this.$store.commit("SET_USER", user);
          this.$router.push({ name: "articles" });
        })
        .catch(console.log);
    }
  }
};
</script>

<template>
  <form class="bg-light auth-form rounded" @submit.prevent="submit">
    <p class="text-center display-4 text-secondary">LOGIN</p>
    <InputField
      id="email"
      v-model="emailAddress"
      class="mt-27"
      title="Email"
      required
    />

    <InputField
      id="password"
      v-model="userPassword"
      class="mt-25"
      title="Password"
      required
    />

    <BaseButton type="submit" class="mt-48 w-100 btn-primary" text="Login" />
    <div class="d-flex mt-3">
      <p class="fz-16">Don’t have account?</p>
      <RouterLink to="/register" class="font-weight-bold ml-11 fz-16">
        Register Now
      </RouterLink>
    </div>
  </form>
</template>
