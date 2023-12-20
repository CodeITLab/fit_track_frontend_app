import { defineStore } from "pinia";

export const useWorkoutDataStore = defineStore('workout', {
    state: () => {
        return {
            isSaved: false
        }
    },
    getters: {
        
    },
    actions: {
        createWorkout(isWorkoutSaved:boolean) {
            this.isSaved = isWorkoutSaved
            console.log(this.isSaved)
        }
    }
})