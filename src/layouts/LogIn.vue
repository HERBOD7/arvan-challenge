<script>
import InputField from "@/components/auth/InputField";
import BaseButton from "@/components/shared/BaseButton";
export default {
  name: "LogIn",
  components: {
    InputField,
    BaseButton
  }
};
</script>

<template>
  <form class="bg-light auth-form rounded" @submit.stop.prevent>
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
      <a href="/register" class="font-weight-bold ml-11 fz-16">
        Register Now
      </a>
    </div>
  </form>
</template>
