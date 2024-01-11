<script lang="ts" setup >
import { defineComponent, ref } from "vue";
import { useModalManager } from "../../store/ModalManager";
import WorkoutDetailsModalBody from "../../components/workout-details-component/WorkoutDeailsModalBody.vue";
import { useWorkoutDataStore } from "../../store/WorkoutData";
const store = useWorkoutDataStore();
console.log(store.getSelectedWorkout);
</script>

<template>
  <div class="modal fade show d-flex justify-content-center align-items-center">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <WorkoutDetailsModalBody />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../assets/css/components/create-workout-component.css";
</style>