import { defineStore } from "pinia";

export const useMenuStore = defineStore("menu", {
    state: () => {
        return {
            isMobileMenuOpened: false
        };
    },
    getters: {
        getMobileMenuValue(state) {
            return state.isMobileMenuOpened;
        }
    },
    actions: {
        updateMobileMenuState(mobileMenuState: boolean) {
            console.log("menu is opened");
            this.isMobileMenuOpened = mobileMenuState;
        }
    },
});
