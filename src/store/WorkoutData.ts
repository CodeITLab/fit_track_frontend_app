import { IWorkoutModel } from "@/models/IWorkoutModel";
import { defineStore } from "pinia";

export const useWorkoutDataStore = defineStore('workout', {
    state: () => {
        return {
            workouts: [] as IWorkoutModel[],
            selectedWorkouts: {}as IWorkoutModel
        }
    },
    getters: {
        getWorkouts(state){
            return state.workouts
        },
        getSelectedWorkout(state){
            return state.workouts
        }
    },
    actions: {
        createWorkout(workoutData:IWorkoutModel) {
            this.workouts.push(workoutData);
        },
        createSelectedWorkout(workoutData:IWorkoutModel){
            this.selectedWorkouts = workoutData 
        }
    }
})