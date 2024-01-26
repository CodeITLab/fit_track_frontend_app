import { IUser } from "@/models/IUser";
import { defineStore } from "pinia";

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


            user: {} as IUser,
            users:  []as IUser[]
        }
    },
    getters: {
        getUserInfo(state){
            return state.user;
        },
        getUsersInfo(state){
            return state.users
        }
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