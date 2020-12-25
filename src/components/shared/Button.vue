<template>
  <button :type="type" :class="[extraClass, 'btn']">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    type: {
      type: String,
      default: "button"
    },
    class: {
      type: String,
      default: ""
    },
    text: {
      type: String,
      default: ""
    }
  }
};
</script>
