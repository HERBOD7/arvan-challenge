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
    value: {
      type: String,
      default: ""
    }
  }
};
</script>

<template>
  <div>
    <label :for="id">{{ title }}</label>
    <textarea
      :id="id"
      class="form-control"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>
