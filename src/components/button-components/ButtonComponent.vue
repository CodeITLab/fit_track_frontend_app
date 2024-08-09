<script lang="ts" setup>
defineProps({
  backgroundColor: String,
  borderColor: String,
  btnText: String,
});
</script>

<template>
  <div class="container">
    <button
      class="btn text-white border border-dark-3 mt-3"
      type="button"
      :class="{ backgroundColor: backgroundColor, borderColor: borderColor }"
    >
      {{ btnText }}
    </button>
  </div>
</template>
<style lang="css">
@import "../../assets/css/components/button-components/button-component.css";
</style>
