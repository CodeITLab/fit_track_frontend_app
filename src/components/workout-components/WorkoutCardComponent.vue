<script lang="ts" setup>
import SetSelectedWorkout from "@/controllers/SelectedWorkoutController";
import { useModalStore } from "@/store/modalStore";
import { useWorkoutStore } from "@/store/workoutStore";
import ModalManager from "@/controllers/ModalManagerController";

const selectedWorkout = (id: number) => {
  SetSelectedWorkout(id);
  ModalManager().UpdateCurrentModalValue("updateWorkoutModal", true);
};
</script>

<template>
  <div class="card-wrapper" v-if="!!useWorkoutStore().getWorkoutData?.length">
    <div
      class="cards"
      v-for="(item, index) in useWorkoutStore().getWorkoutData"
      @click="selectedWorkout(index)"
    >
      <h3 key="index" class="text-white">
        {{ item.name }}
      </h3>
    </div>
    <div class="plus mt-3">
      <button
        @click="
          ModalManager().UpdateCurrentModalValue('createWorkoutModal', true)
        "
        type="button"
        class="plus-btn"
      >
        <img
          src="../../assets/img/logos/add-icon.png"
          height="40"
          alt="add-button"
        />
      </button>
    </div>
  </div>
</template>

<style lang="css" scoped>
@import "../../assets/css/components/workout-components/workout-card-component.css";
</style>
