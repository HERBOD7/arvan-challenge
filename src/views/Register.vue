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
      userName: "",
      emailAddress: "",
      userPassword: ""
    };
  },
  methods: {
    submit() {
      this.$api.auth
        .registerUser(this.userName, this.emailAddress, this.userPassword)
        .then(({ user }) => {
          this.$store.commit("SET_USER", user);
          this.$router.push({ name: "articles" });
        });
    }
  }
};
</script>

<template>
  <form class="bg-light auth-form rounded" @submit.prevent="submit">
    <p class="text-center display-4 text-secondary">Register</p>
    <InputField
      id="user"
      v-model="userName"
      class="mt-48"
      title="User"
      required
    />

    <InputField
      id="email"
      v-model="emailAddress"
      class="mt-25"
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

    <BaseButton type="submit" class="mt-48 w-100 btn-primary" text="Register" />
    <div class="d-flex mt-3">
      <p class="fz-16">Already Registered?</p>
      <RouterLink to="/login" class="font-weight-bold ml-11 fz-16">
        Login
      </RouterLink>
    </div>
  </form>
</template>
