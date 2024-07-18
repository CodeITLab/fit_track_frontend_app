import { defineStore } from "pinia";
import { IModals } from "@/models/IModals";

export const useModalStore = defineStore("modals", {
  state: () => {
    return {
      modals: [
        {
          name: "inboxModal",
          isActive: false
        },
        {
          name: "googleLoginModal",
          isActive: false,
        },
        {
          name: "userTypeModal",
          isActive: false,
        },
        {
          name: "logoutModal",
          isActive: false,
        },
        {
          name: "planYourWorkoutModal",
          isActive: true,
        },
        {
          name: "createWorkoutModal",
          isActive: false,
        },
        {
          name: "updateWorkoutModal",
          isActive: false,
        },
      ],
    };
  },
  getters: {
    getCurrentModalValue(state) {
      return state.modals;
    },
  },
  actions: {
    setModalValue(updatedModal: IModals[]) {
      this.modals = updatedModal;
    },
  },
});
