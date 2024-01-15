<script lang="ts" setup>

import { StoreAccessController } from "@/controllers/store-access/StoreAccessController";

import CreateWorkoutModalTitle from "../create-workout-modal/CreateWorkoutModalTitle.vue";
import CreateWorkoutModalBody from "../create-workout-modal/CreateWorkoutModalBody.vue";

const isModalOpened = (): boolean => {
  if (StoreAccessController().modalStore.createWorkoutModal) {
    return true;
  } else {
    return false;
  }
}

</script>

<template>
  <div v-if="isModalOpened()"
       class="modal fade show d-flex justify-content-center align-items-center">
    <div class="modal-dialog"
         role="document">
      <div class="modal-content">
        <CreateWorkoutModalTitle />
        <CreateWorkoutModalBody />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../../../assets/css/components/create-workout-component.css";
</style>