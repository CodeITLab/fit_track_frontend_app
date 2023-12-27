import { IWorkoutModel } from "@/models/IWorkoutModel";
import { defineStore } from "pinia";

export const useWorkoutDataStore = defineStore('workout', {
    state: () => {
        return {
            workouts: [] as IWorkoutModel[]
        }
    },
    getters: {
        
    },
    actions: {
        createWorkout(workoutData:IWorkoutModel) {
            this.workouts.push(workoutData);
            console.log(this.workouts)
        }
        
    }
})