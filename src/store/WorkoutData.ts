import { IWorkoutModel } from "@/models/IWorkoutModel";
import { defineStore } from "pinia";
import {SaveWorkoutData} from '../services/SaveWorkoutData'

export const useWorkoutDataStore = defineStore('workout', {
    state: () => {

        return {
            defaultWorkoutData: {
                name: "",
                workoutOwner:0,
                exercisesData: [
                    {
                        name: "",
                        sets: 0,
                        reps: 0,
                        isWorkoutFinished: false
                    },
                ],
            },
            workouts: [] as IWorkoutModel[],
            selectedWorkouts: {} as IWorkoutModel,
            workoutIndex: 0
        }
    },
    getters: {
        getWorkouts(state) {
            return state.workouts;
        },
        getDefaultWorkoutData(state) {
            return state.defaultWorkoutData;
        },
        getSelectedWorkout(state) {
            return state.selectedWorkouts;
        },
        getWorkoutIndex(state) {
            return state.workoutIndex;
        }
    },
    actions: {
        createWorkout(workoutData: IWorkoutModel) {
            this.workouts.push(workoutData);
            SaveWorkoutData().saveWorkoutData()
            this.defaultWorkoutData = {
                name: "",
                workoutOwner:0,
                exercisesData: [
                    {
                        name: "",
                        sets: 0,
                        reps: 0,
                        isWorkoutFinished: false
                    },
                ],
            };
        },
        createSelectedWorkout(selectedWorkoutData: IWorkoutModel) {
            this.selectedWorkouts = selectedWorkoutData
        },
        setWorkoutIndex(index: number) {
            this.workoutIndex = index
        },
        updateSelectedWorkout(updatedWorkoutData: IWorkoutModel) {
            this.workouts[this.workoutIndex] = updatedWorkoutData
        },

        deleteSelectedWorkout() {
            this.workouts.splice(this.getWorkoutIndex, 1);
            this.defaultWorkoutData = {
                name: "",
                workoutOwner:0,
                exercisesData: [
                    {
                        name: "",
                        sets: 0,
                        reps: 0,
                        isWorkoutFinished: false
                    },
                ],
            };
            this.workoutIndex = 0;
        }
    }
})