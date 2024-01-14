import { IWorkoutModel } from "@/models/IWorkoutModel";
import { defineStore } from "pinia";

export const useWorkoutDataStore = defineStore('workout', {
    state: () => {

        return {
            workouts: [] as IWorkoutModel[],
            selectedWorkouts: {} as IWorkoutModel,
            workoutIndex: 0
        }
    },
    getters: {
        getWorkouts(state) {
            return state.workouts
        },
        getSelectedWorkout(state) {
            return state.selectedWorkouts
        },
        getWorkoutIndex(state) {
            return state.workoutIndex
        }
    },
    actions: {
        createWorkout(workoutData: IWorkoutModel) {
            this.workouts.push(workoutData);
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
        }


    }
})