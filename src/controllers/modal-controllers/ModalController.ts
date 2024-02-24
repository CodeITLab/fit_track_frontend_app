import { StoreAccessController } from "../store-access/StoreAccessController";

export const ModalController = () => {

    const setCreateWorkoutModalValue = (modalData: boolean): void => {
        StoreAccessController().modalStore.openCloseCreateWorkoutModal(modalData);
    }

    const setWorkoutDetailsModalValue = (modalData: boolean): void => {
        StoreAccessController().modalStore.openCloseWorkoutDetail(modalData);
    };

    const setWorkoutStatusCheckValue = (modalData:boolean): void =>{
        StoreAccessController().modalStore.openCloseWorkoutStatusCheckBanner(modalData)
    };
    const setLoginFormModalValue=(modalData:boolean):void =>{
        StoreAccessController().modalStore.openCloseChoseLoginForm(modalData)
    };
    const setChoseDashboardValue=(modalData: boolean): void =>{
        StoreAccessController().modalStore.openCloseDashboardType(modalData)
    }
    const setChoseTrainerValue=(modalData:boolean):void => {
        StoreAccessController().modalStore.choseTrainerDashboard(modalData)
    };
    const setChosePrivateValue=(modalData:boolean):void => {
        StoreAccessController().modalStore.chosePrivateDashboard(modalData)
    }

    return {
        setCreateWorkoutModalValue,
        setWorkoutDetailsModalValue,
        setWorkoutStatusCheckValue,
        setLoginFormModalValue,
        setChoseDashboardValue,
        setChoseTrainerValue,
        setChosePrivateValue
    }
}