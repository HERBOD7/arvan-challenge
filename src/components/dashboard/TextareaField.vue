<script>
export default {
  name: "TextareaField",
  props: {
    title: {
      type: String,
      default: ""
    },
    id: {
      type: String,
      default: ""
    },
    for: {
      type: String,
      default: ""
    },
    class: {
      type: String,
      default: ""
    }
  }
};
</script>

<template>
  <div :class="extraClass">
    <label :for="id">{{ title }}</label>
    <textarea :id="id" class="form-control" />
  </div>
</template>
