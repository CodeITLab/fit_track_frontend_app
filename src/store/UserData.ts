import { IUser } from "@/models/IUser";
import { defineStore } from "pinia";

export const useUserDataStore = defineStore('user', {
    state: () => {
        return {
            defaultUserData: {
                name: "",
                lastName: "",
                email: "",
                picture:"",
                isAuth: false,
                userType: ""
            }
        }
        
    },
    getters: {
        getUserInfo(state){
            return state.defaultUserData;
        },
    },
    actions: {
        updateUserType(userType: string) {
            this.defaultUserData.userType = userType
        },
        updateUserInfo(userData: IUser){
            this.defaultUserData = userData
        },
        initData(isAuthenthicated: boolean) {
            this.defaultUserData.isAuth = isAuthenthicated
        }
    }
})
