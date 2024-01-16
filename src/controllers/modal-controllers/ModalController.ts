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
    }

    return {
        setCreateWorkoutModalValue,
        setWorkoutDetailsModalValue,
        setWorkoutStatusCheckValue
    }
}