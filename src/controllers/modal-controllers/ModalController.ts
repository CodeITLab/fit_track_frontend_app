import { StoreAccessController } from "../store-access/StoreAccessController";

export const ModalController = () => {

    const setModalValue = (modalData: boolean): void => {
        StoreAccessController().modalStore.workoutDetailsModal = modalData;
      };

    return {
        setModalValue
    }
}