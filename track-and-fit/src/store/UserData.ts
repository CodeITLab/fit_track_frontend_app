import { defineStore } from "pinia";

export const useUserDataStore = defineStore({
    id: 'userData',
    state: () => ({
        name: "Saša",
        lastName: "Zelen",
        role: "admin",
        isAuth: false
    }),
    getters: {

    },
    actions: {
        
    }
})