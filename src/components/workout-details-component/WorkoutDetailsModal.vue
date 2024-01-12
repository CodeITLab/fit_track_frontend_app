<script lang="ts" setup >
import WorkoutDetailsModalBody from "../../components/workout-details-component/WorkoutDeailsModalBody.vue";
</script>

<template>
  <div class="modal fade show d-flex justify-content-center align-items-center">
    <div class="modal-dialog"
         role="document">
      <div class="modal-content">
        <WorkoutDetailsModalBody />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/css/components/create-workout-component.css";
</style>