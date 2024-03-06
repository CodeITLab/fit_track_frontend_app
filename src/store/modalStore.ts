import { defineStore } from "pinia";

export const useModalStore = defineStore('modals', {
    state: () => {
        return {
            isGoogleLoginModalActive: false,
            isUserTypeModalActive: false,
            isLogoutModalActive: false,
            isCreateWorkoutModalActive: true,
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
        setCreateWorkoutModalValue(modalValue: boolean) {
            this.isCreateWorkoutModalActive = modalValue
        }
    },
})