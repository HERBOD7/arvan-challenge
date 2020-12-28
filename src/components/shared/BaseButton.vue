<script>
export default {
  name: 'BaseButton',
  props: {
    type: {
      type: String,
      default: 'button'
    },
    extraClass: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    }
  }
};
</script>

<template>
  <button :type="type" :class="[extraClass, 'btn']" v-on="$listeners">
    {{ text }}
  </button>
</template>
