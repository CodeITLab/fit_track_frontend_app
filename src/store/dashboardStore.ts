import { defineStore } from "pinia";

export const useDashboardStore = defineStore("dashboard", {
    state: () => {
        return {
            currentDashboardView: "workouts"
        }
    },
    getters: {
        getCurrentDashboardView(state) {
            return state.currentDashboardView;
        }
    },
    actions: {
        setCurrentDashboardView(currentDashboardView: string) {
            this.currentDashboardView = currentDashboardView;
        }
    }
});