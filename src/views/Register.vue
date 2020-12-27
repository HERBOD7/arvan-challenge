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
    <p class="text-center display-4 text-secondary">Register</p>
    <InputField
      id="user"
      v-model="userName"
      class="mt-48"
      title="User"
      required="true"
    />

    <InputField
      id="email"
      v-model="emailAddress"
      class="mt-25"
      title="Email"
      required="true"
    />

    <InputField
      id="password"
      v-model="password"
      class="mt-25"
      title="Password"
      required="true"
    />

    <BaseButton type="submit" class="mt-48 w-100 btn-primary" text="Register" />
    <div class="d-flex mt-3">
      <p class="fz-16">Already Registered?</p>
      <a href="/login" class="font-weight-bold ml-11 fz-16">Login</a>
    </div>
  </form>
</template>
