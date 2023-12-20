<script lang="ts">

import { defineComponent } from "vue";
import { useModalManager } from "../../../store/ModalManager"
export default defineComponent({
    name: "CreateWorkoutComponent",
    components: {

    },
    data() {
        return {
            exerciseInput: 0,
            workoutData: {
                workoutName: "",
                exerciseName: "",
                sets: 0,
                reps: 0
            }
        };
    },
    methods: {
        increaseNumberOfExerciseInputs(): void {
            this.exerciseInput += 1;
        },
        isModalOpened(): boolean {
            const store = useModalManager()
            if (store.isOpened) {
                return true;
            } else {
                return false;
            }
        },
        setModalValue(modalData: boolean): void {
            const store = useModalManager()
            store.isOpened = modalData
        },
        saveWorkoutData(): void {

        }
    },
});
</script>

<template>
    <div v-if="isModalOpened()" class="modal fade show d-flex justify-content-center align-items-center">
        <!-- //---modal------------------------------------------------------------------------------------------ -->
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header d-flex justify-content-center">
                    <h5 class="modal-title" id="exampleModalLabel">Start Your Planing</h5>
                </div>
                <div class="modal-body d-flex flex-column">
                    <div class="d-flex flex-column">
                        <label for="Name your Ex">Name your Exercise</label>
                        <input v-model="workoutData.workoutName" class="m-1" type="text" placeholder="" />
                    </div>
                    <!-- //--------------------------input fields------------------------------------------------------------ -->
                    <div v-if="exerciseInput > 0" class="d-flex flex-column justify-content-center align-items-center">
                        <div v-for="n in exerciseInput" class="d-flex justify-content-center align-items-center">
                            <input v-model="workoutData.exerciseName" class="m-1" type="text" />
                            <div
                                class="counter d-flex flex-row justify-content-center align-items-center bg-primary rounded">
                                <div class="d-flex flex-row justify-content-center align-items-center">
                                    <button class="counter-button border-0 bg-transparent ms-1 p-0">
                                        +
                                    </button>
                                    <div class="d-flex justify-content-center align-items-center text-center m-2">
                                        <p class="m-0 text-center">{{ workoutData.sets }}</p>
                                    </div>
                                    <button class="counter-button border-0 bg-transparent me-1 p-0">
                                        -
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button @click="increaseNumberOfExerciseInputs()" class="btn btn-primary w-40 align-self-center mt-2">
                        Add Exercise
                    </button>
                </div>
                <div class="modal-footer d-flex justify-content-center align-items-center">
                    <button @click="setModalValue(false)" type="button" class="btn btn-secondary" data-dismiss="modal">
                        Close
                    </button>
                    <button type="button" class="btn btn-primary" @click="saveWorkoutData()">
                        Save changes
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "../../../assets/css/components/create-workout-component.css";
</style>