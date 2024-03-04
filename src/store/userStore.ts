import { saveUserData } from '@/api/useFetch';
import { IUser } from '@/models/IUser';
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => {
        return {
            defaultUserData: {
                name: "",
                lastName: "",
                email: "",
                picture: "",
                isAuth: false,
                userType: ""
            }
        }
    },
    getters: {
        getUserData(state) {
            return state.defaultUserData;
        }
    },
    actions: {
        saveUserData(userData: IUser) {
            this.defaultUserData = userData;
            localStorage.setItem('email', userData.email);
        },
        updateUserType(userType: string) {
            this.defaultUserData.userType = userType;
        }
    },
})