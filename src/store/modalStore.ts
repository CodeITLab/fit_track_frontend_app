import { defineStore } from "pinia";

export const useModalStore = defineStore('modals', {
    state: () => {
        return {
            isGoogleLoginModalActive: false,
            isUserTypeModalActive: false
        }
    },
    getters: {
        getGoogleLoginModalValue(state) {
            return state.isGoogleLoginModalActive
        },
        getUserTypeModalValue(state) {
            return state.isUserTypeModalActive
        }
    },
    actions: {
        setGoogleLoginModalValue(modalValue: boolean) {
            this.isGoogleLoginModalActive = modalValue;
        },
        setUserTypeModalValue(modalValue: boolean) {
            this.isUserTypeModalActive = modalValue;
        }
    },
})