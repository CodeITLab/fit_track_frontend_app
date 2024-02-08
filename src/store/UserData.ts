import { IUser } from "@/models/IUser";
import { defineStore } from "pinia";
import {useLocalStorage} from "@vueuse/core"

export const useUserDataStore = defineStore('user', {
    state: () => {
        return {
            defaultUserData:{
                name: "",
                lastName: "",
                email: "",
                picture:"",
                isAuth: false,
                userType:""
            },


            user: useLocalStorage("vueUseUser",{} as IUser),
        }
        
    },
    getters: {
        getUserInfo(state){
            return state.user;
        },
    },
    actions: {
       updateUserInfo(userData: IUser){
            this.user = userData
            
        },
        initData(isAuthenthicated: boolean) {
            this.user.isAuth = isAuthenthicated
        }
    }
})
