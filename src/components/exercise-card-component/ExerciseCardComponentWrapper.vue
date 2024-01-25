<script lang="ts" setup>
import { OpenCloseWorkoutDetails } from "@/controllers/dashboard-controllers/OpenCloseWorkoutDetails";
import ExerciseCardComponent from './ExerciseCardComponent.vue';
import CreateWorkoutButton from '../workout-components/create-workout-component/create-workout-button/CreateWorkoutButton.vue';
import { StoreAccessController } from '@/controllers/store-access/StoreAccessController';

console.log(StoreAccessController().workoutStore.getWorkouts)

</script>

<template>
    <div v-for="(value, index) in StoreAccessController().workoutStore.getWorkouts"
         :key="index"
         class="card-wrapper d-flex justify-content-center align-items-center">
        <!-- onclick sprema odabranu vrijednost u store -->
        <ExerciseCardComponent @click="OpenCloseWorkoutDetails(value, index)"
                               :title="value.workoutName" />
    </div>
    <div class="card-wrapper d-flex justify-content-center align-items-center">
        <CreateWorkoutButton v-if="StoreAccessController().workoutStore.getWorkouts.length > 0" />
    </div>
</template>

<style></style>