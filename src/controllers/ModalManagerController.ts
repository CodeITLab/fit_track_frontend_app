import { useModalStore } from "@/store/modalStore";

const ModalManager = () => {
  const GetCurrentModalValue = () => {
    return useModalStore().getCurrentModalValue.find((item) => {
      return item.isActive;
    });
  };

  const UpdateCurrentModalValue = (name: string, value: boolean) => {
    let updatedModalValues = useModalStore().getCurrentModalValue.map(
      (item, index) => {
        if (item.name === name) {
          item.isActive = value;
        }
        if (item.name !== name && item.isActive) {
          item.isActive = false;
        }
        return item;
      }
    );

    useModalStore().setModalValue(updatedModalValues);
  };

  return {
    GetCurrentModalValue,
    UpdateCurrentModalValue,
  };
};

export default ModalManager;
