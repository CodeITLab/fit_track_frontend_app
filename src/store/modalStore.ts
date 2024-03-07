import { defineStore } from "pinia";

export const useModalStore = defineStore('modals', {
    state: () => {
        return {
            isGoogleLoginModalActive: false,
            isUserTypeModalActive: false,
            isLogoutModalActive: false,
            isPlanYourWorkoutModalActive: true,
            isCreateWorkoutModalActive: false
        }
    },
    getters: {
        getGoogleLoginModalValue(state) {
            return state.isGoogleLoginModalActive
        },
        getUserTypeModalValue(state) {
            return state.isUserTypeModalActive
        },
        getLogoutModalValue(state) {
            return state.isLogoutModalActive
        },
        getIsPlanYourWorkoutModalActive(state) {
            return state.isPlanYourWorkoutModalActive
        },
        getCreateWorkoutModalValue(state) {
            return state.isCreateWorkoutModalActive
        }
    },
    actions: {
        setGoogleLoginModalValue(modalValue: boolean) {
            this.isGoogleLoginModalActive = modalValue;
        },
        setUserTypeModalValue(modalValue: boolean) {
            this.isUserTypeModalActive = modalValue;
        },
        setLogoutmodalValue(modalValue: boolean) {
            this.isLogoutModalActive = modalValue;
        },
        setIsPlanYourWorkoutModalActive(modalValue: boolean) {
            this.isPlanYourWorkoutModalActive = modalValue
        },
        setCreateYourWorkoutModalValue(modalValue: boolean) {
            this.isCreateWorkoutModalActive = modalValue;
            this.isPlanYourWorkoutModalActive = false; 
        }
    },
})