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
            return this.isGoogleLoginModalActive;
        }
    },
    actions: {
        setGoogleLoginModalValue(modalValue: boolean) {
            this.isGoogleLoginModalActive = modalValue
        },
    },
})