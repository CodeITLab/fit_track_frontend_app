import { IWorkoutModel } from "@/models/IWorkoutModel";
import { defineStore } from "pinia";

export const useWorkoutDataStore = defineStore('workout', {
    state: () => {
        return {
            workouts: [] as IWorkoutModel[]
        }
    },
    getters: {
        getWorkouts(state){
            return state.workouts
        }
    },
    actions: {
        createWorkout(workoutData:IWorkoutModel) {
            this.workouts.push(workoutData);
        }
        
    }
})