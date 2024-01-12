<script lang="ts" setup>
import { useWorkoutDataStore } from '@/store/WorkoutData';
import { OpenCloseWorkoutDetails } from "@/controllers/dashboard-controllers/OpenCloseWorkoutDetails";
import ExerciseCardComponent from './ExerciseCardComponent.vue';
import CreateWorkoutButton from '../create-workout-component/create-workout-button/CreateWorkoutButton.vue';

const workoutStore = useWorkoutDataStore();

</script>

<template>
    <div v-for="(value, index) in workoutStore.getWorkouts"
         :key="index"
         class="card-wrapper d-flex justify-content-center align-items-center">
        <!-- onclick sprema odabranu vrijednost u store -->
        <ExerciseCardComponent @click="OpenCloseWorkoutDetails(value, index)"
                               :title="value.workoutName" />
    </div>
    <div class="card-wrapper d-flex justify-content-center align-items-center">
        <CreateWorkoutButton v-if="workoutStore.getWorkouts.length !== 0" />
    </div>
</template>

<style></style>