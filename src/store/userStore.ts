import { IUser } from "@/models/IUser";
import { defineStore } from "pinia";
import {INotifications} from "@/models/INotifications";

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      defaultUserData: {
        name: "",
        lastName: "",
        email: "",
        picture: "",
        isAuth: false,
        userType: "",
        password: "",
        notifications: [] as INotifications[] | undefined
      },
    };
  },
  getters: {
    getUserData(state) {
      return state.defaultUserData;
    },
  },
  actions: {
    saveUserData(userData: IUser) {
      if(userData.password) {
        this.defaultUserData.notifications?.push({title: "lalala", body: "okoakoka", flag: "jhahshaha"})
      }
      this.defaultUserData = userData;
      localStorage.setItem("email", userData.email);
    },
    updateUserType(userType: string) {
      this.defaultUserData.userType = userType;
    },
  },
});
