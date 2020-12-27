<script>
export default {
  name: "BaseButton",
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

<template>
  <button :type="type" :class="[extraClass, 'btn']">
    {{ text }}
  </button>
</template>
