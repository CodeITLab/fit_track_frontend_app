<script lang="ts" setup>

const props = defineProps({
  name: String,
  pictureUrl: String
});

</script>
<template>
  <div class="content-card bg-transparent d-flex flex-column justify-content-between position-fixed top">
    <div class="heading-dashboard d-flex flex-row justify-content-between me-5 ms-5 mt-3">
      <h5 class="text-white">Dashboard</h5>
      <h6 class="text-white">
        {{ props?.name }}
        <img class="border border-2 border-dark rounded-circle ms-1" :src="props?.pictureUrl" height="45" alt="" />
      </h6>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../../assets/css/components/dashboard-top-navbar.css";
</style>