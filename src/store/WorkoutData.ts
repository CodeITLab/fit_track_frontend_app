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
            return state.selectedWorkouts
        },
        getSelectedWorkoutIndex(){
            
        }
    },
    actions: {
        createWorkout(workoutData:IWorkoutModel) {
            this.workouts.push(workoutData);
        },
        createSelectedWorkout(selectedWorkoutData:IWorkoutModel){
            this.selectedWorkouts = selectedWorkoutData
            console.log("uspjeh", this.selectedWorkouts)
        }
    }
})