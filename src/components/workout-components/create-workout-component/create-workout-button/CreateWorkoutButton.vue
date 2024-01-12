<script lang="ts" setup>
import { StoreAccessController } from "@/controllers/store-access/StoreAccessController";

const workoutData = StoreAccessController().workoutStore.getWorkouts;

const setModalValue = (modalValue: boolean) => {
  StoreAccessController().modalStore.openCloseCreateWorkoutModal(modalValue);
}

</script>

<template>
  <div class="d-flex justify-content-center align-items-center workout-modal">
    <div v-if="workoutData.length === 0">
      <h5 class="text-white ps-2 pe-1">Plan Your Exercise</h5>
    </div>
    <button @click="setModalValue(true)"
            type="button"
            class="plus-btn"
            data-toggle="modal"
            data-target="#exampleModal">
      <img src="../../../../assets/img/logos/add-icon.png"
           height="40"
           alt="add-button" />
    </button>
  </div>
</template>

<style lang="scss" scoped>
@import "../../../../assets/css/components/create-workout-button.css";
</style>