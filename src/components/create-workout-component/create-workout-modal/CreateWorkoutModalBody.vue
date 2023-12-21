<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "CreateWorkoutModalBody",
    data() {
        return {
            numberOfExercises: 0,
            workoutData: {
                workoutName: "",
                exerciseName: "",
                sets: 0,
                reps: 0
            }
        };
    },
    methods: {
        increaseNumberOfExercises(): void {
            this.numberOfExercises += 1;
        },
        decreaseNumberOfExercises(): void {
            if (this.numberOfExercises > 0) {
                this.numberOfExercises -= 1;
            }
        },
        increaseNumberOfReps(): void {
            this.workoutData.reps += 1;
        },
        decreaseNumberOfReps(): void {
            if (this.workoutData.reps > 0) {
                this.workoutData.reps -= 1;
            }
        },
        increaseNumberOfSets(): void {
            this.workoutData.sets += 1;
        },
        decreaseNumberOfSets(): void {
            if (this.workoutData.sets > 0) {
                this.workoutData.sets -= 1;
            }
        }
    },
});
</script>

<template>
    <div class="modal-body d-flex flex-column">
        <div class="d-flex flex-column">
            <label for="Name your Exercise">Name your Workout</label>
            <input v-model="workoutData.workoutName" class="m-1" type="text" placeholder="Push day..." />
        </div>
        <hr />
        <div v-if="numberOfExercises > 0" class="d-flex flex-column justify-content-center align-items-center">

            <div class="exercise-header">
                <p>Exercise Name</p>
                <p>Reps</p>
                <p>Sets</p>
            </div>

            <div v-for="n in numberOfExercises" class="exercise-wrapper">

                <input v-model="workoutData.exerciseName" class="exercise-name-input" type="text"
                    placeholder="Push ups..." />

                <div class="modal-button-group">
                    <button @click="increaseNumberOfReps()"
                        class="counter-button border-0 bg-transparent ms-1 p-0">+</button>
                    <div class="d-flex justify-content-center align-items-center text-center m-2">
                        <p class="m-0 text-center">{{ workoutData.reps }}</p>
                    </div>
                    <button @click="decreaseNumberOfReps()"
                        class="counter-button border-0 bg-transparent me-1 p-0">-</button>
                </div>
                <div class="modal-button-group">
                    <button @click="increaseNumberOfSets()"
                        class="counter-button border-0 bg-transparent ms-1 p-0">+</button>
                    <div class="d-flex justify-content-center align-items-center text-center m-2">
                        <p class="m-0 text-center">{{ workoutData.sets }}</p>
                    </div>
                    <button @click="decreaseNumberOfSets()"
                        class="counter-button border-0 bg-transparent me-1 p-0">-</button>
                </div>
            </div>
        </div>

        <div class="footer-button-wrapper">
            <button @click="increaseNumberOfExercises()" class="btn btn-primary w-40 align-self-center mt-2">
                Add Exercise
            </button>
            <button @click="decreaseNumberOfExercises()" class="btn btn-primary w-40 align-self-center mt-2">
                Remove Exercise
            </button>
        </div>

    </div>
</template>

<style lang="css">
@import "../../../assets/css/components/create-workout-modal/create-workout-modal-body.css";
</style>