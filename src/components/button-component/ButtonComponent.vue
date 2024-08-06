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
      :class="{ backgroundColor: backgroundColor, borderColor: borderColor }"
      type="button"
    >
      {{ btnText }}
    </button>
  </div>
</template>
<style lang="css">
@import "../../assets/css/components/button-component/button-component.css";
</style>
