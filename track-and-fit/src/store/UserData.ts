import { IUser } from "@/models/IUser";
import { defineStore } from "pinia";

export const useUserDataStore = defineStore('user', {
    state: () => {
        return {
            user: {} as IUser
        }
    },
    getters: {
        init() {
            
        } 
    },
    actions: {
        initData(isAuthenthicated: boolean) {
            this.user.isAuth = isAuthenthicated
        }
    }
})