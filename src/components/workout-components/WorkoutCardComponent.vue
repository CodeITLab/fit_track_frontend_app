<script lang="ts" setup>
import { useModalStore } from "@/store/modalStore";
import { useWorkoutStore } from "@/store/workoutStore";
</script>

<template>
  <div class="card-wrapper">
    <div v-for="item in useWorkoutStore().getWorkoutData" class="cards">
      <h3 class="font text-white">{{ item.name }}</h3>
    </div>
    <div class="plus">
      <button
        @click="useModalStore().setCreateYourWorkoutModalValue(true)"
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
