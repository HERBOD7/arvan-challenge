<script>
export default {
  name: "InputField",
  props: {
    value: {
      type: String,
      default: ""
    },
    extraClass: {
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

<template>
  <div :class="[extraClass, 'w-100 form-group']">
    <label :for="id">{{ title }}</label>
    <input
      :id="id"
      :type="type"
      :required="required"
      :placeholder="placeholder"
      class="form-control"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>
