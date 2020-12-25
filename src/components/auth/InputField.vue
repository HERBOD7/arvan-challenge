<template>
  <div :class="[extraClass, 'w-100']">
    <label :for="id">{{ title }}</label>
    <b-form-input
      :id="id"
      :v-model="model"
      :type="type"
      :required="required"
      :placeholder="placeholder"
    ></b-form-input>
  </div>
</template>

<script>
export default {
  name: "InputField",
  props: {
    class: {
      type: String,
      default: ""
    },
    id: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    model: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "text"
    },
    required: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ""
    }
  }
};
</script>
