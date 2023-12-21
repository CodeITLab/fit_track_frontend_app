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
            console.log(this.numberOfExercises);
            if (this.numberOfExercises > 0) {
                this.numberOfExercises -= 1;
                console.log(this.numberOfExercises);
            }
        },
        increaseNumberOfReps(): void {
            this.workoutData.reps += 1;
        },
        decreaseNumberOfReps(): void {
            this.workoutData.reps -= 1;
        }
    },
});
</script>

<template>
    <div class="modal-body d-flex flex-column">
        <div class="d-flex flex-column">
            <label for="Name your Exercise">Name your Workout</label>
            <input v-model="workoutData.workoutName" class="m-1" type="text" placeholder="Pull day" />
        </div>
        <div v-if="numberOfExercises > 0" class="d-flex flex-column justify-content-center align-items-center">
            <div v-for="n in numberOfExercises" class="d-flex justify-content-center align-items-center">
                <input v-model="workoutData.exerciseName" class="m-1" type="text" />
                <div class="counter d-flex flex-row justify-content-center align-items-center bg-primary rounded">
                    <div class="d-flex flex-row justify-content-center align-items-center">
                        <button @click="increaseNumberOfReps()" class="counter-button border-0 bg-transparent ms-1 p-0">
                            +
                        </button>
                        <div class="d-flex justify-content-center align-items-center text-center m-2">
                            <p class="m-0 text-center">{{ workoutData.reps }}</p>
                        </div>
                        <button @click="decreaseNumberOfReps()" class="counter-button border-0 bg-transparent me-1 p-0">
                            -
                        </button>
                    </div>
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