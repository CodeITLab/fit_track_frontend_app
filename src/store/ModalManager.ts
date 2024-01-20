import { defineStore } from "pinia";

export const useModalManager = defineStore('modal-manager', {
    state: () => {
        return {
            createWorkoutModal: false,
            workoutDetailsModal: false,
            workoutStatusCheck: false,
            choseLoginForm:false,
        }
    },
    getters: {
        getWorkoutDetailsModalState(state) {
            return state.workoutDetailsModal
        },
        getWrkourStatusCheck(state){
            return state.workoutStatusCheck
        },
        getChoseLoginForm(state){
            return state.choseLoginForm
        }
    },
    actions: {
        openCloseCreateWorkoutModal(value: boolean) {
            this.createWorkoutModal = value
        },
        openCloseWorkoutDetail(value: boolean) {
            this.workoutDetailsModal = value
        },
        openCloseWorkoutStatusCheckBanner(value: boolean) {
            this.workoutStatusCheck = value
        },
        openCloseChoseLoginForm(value:boolean){
            this.choseLoginForm = value
        }
    }
})