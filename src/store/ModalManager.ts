import { defineStore } from "pinia";

export const useModalManager = defineStore('modal-manager', {
    state: () => {
        return {
            // createWorkoutModal -> isCreateWorkoutModalOpened
            createWorkoutModal: false,
             // workoutDetailsModal -> isWorkoutDetailsModal
            workoutDetailsModal: false,
            // preimenovati u isWorkoutFinished
            workoutStatusCheck: false,
            choseDashboardType:false,
            choseLoginForm:false,
            choseTrainer:false,
            chosePrivate:false
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
        },
        getChoseTrainer(state){
            return state.choseTrainer
        },
        getChosePrivate(state){
            return state.chosePrivate
        },
        getChoseDashboardType(state){
            return state.choseDashboardType
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
        },
        openCloseDashboardType(value:boolean){
            this.choseDashboardType = value
        },
        choseTrainerDashboard(value:boolean){
            this.choseTrainer=value
        },
        chosePrivateDashboard(value:boolean){
            this.chosePrivate=value
        }

    }
})