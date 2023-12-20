import { IWorkoutModel } from "@/models/IWorkoutModel";
import { defineStore } from "pinia";

export const useUserDataStore = defineStore('workout', {
    state: () => {
        return {
            user: {
                
            } as IWorkoutModel
        }
    },
    getters: {
        
    },
    actions: {
       
    }
})