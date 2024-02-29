<script lang="ts" setup>
import ExerciseCardComponent from './ExerciseCardComponent.vue';
import CreateWorkoutButton from '../workout-components/create-workout-component/create-workout-button/CreateWorkoutButton.vue';
import { StoreAccessController } from '@/controllers/store-access/StoreAccessController';
import { GetWorkoutData } from "@/services/GetWorkoutData";

// const userWorkouts = onome što backend vrati na 'http://127.0.0.1:8080/workouts/get-users-workouts?id=' + userID

GetWorkoutData().getWorkoutData();
const workouts = StoreAccessController().workoutStore.getWorkouts[0];

</script>

<template>
    <div v-for="(value, index) in workouts" 
         :key="index"
         class="card-wrapper d-flex justify-content-center align-items-center">
        <!-- onclick sprema odabranu vrijednost u store -->
        <ExerciseCardComponent :title="value" />
    </div>
    <div class="card-wrapper d-flex justify-content-center align-items-center">
        <CreateWorkoutButton v-if="StoreAccessController().workoutStore.getWorkouts.length > 0" />
    </div>
</template>

<style></style>