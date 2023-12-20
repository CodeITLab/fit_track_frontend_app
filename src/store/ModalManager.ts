import { defineStore } from "pinia";

export const useModalManager = defineStore('modal-manager', {
    state: () => {
        return {
            isOpened: false
        }
    },
    actions: {
        openCloseModal(value: boolean) {
            this.isOpened = value
        }
    }
})