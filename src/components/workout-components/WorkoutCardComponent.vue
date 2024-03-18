<script lang="ts" setup>
import SetSelectedWorkout from "@/controllers/SelectedWorkoutController";
import { useModalStore } from "@/store/modalStore";
import { useWorkoutStore } from "@/store/workoutStore";

const selectedWorkout = (id: number) => {
  SetSelectedWorkout(id);
};
</script>

<template>
  <div class="card-wrapper" v-if="!!useWorkoutStore().getWorkoutData?.length">
    <div class="cards" v-for="(item, index) in useWorkoutStore().getWorkoutData">
      <h3 @click="selectedWorkout(index)" key="index" class="font text-white">
        {{ item.name }}
      </h3>
    </div>
    <div class="plus">
      <button @click="useModalStore().setCreateYourWorkoutModalValue(true)" type="button" class="plus-btn">
        <img src="../../assets/img/logos/add-icon.png" height="40" alt="add-button" />
      </button>
    </div>
  </div>
</template>

<style lang="css" scoped>
@import "../../assets/css/components/workout-components/workout-card-component.css";
</style>
