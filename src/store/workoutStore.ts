import { defineStore } from "pinia";
import { IWorkoutModel } from "@/models/IWorkoutModel";

export const useWorkoutStore = defineStore("workouts", {
  state: () => {
    return {
      workoutData: [] as IWorkoutModel[] | null,
    };
  },
  getters: {
    getWorkoutData(state) {
      return state.workoutData;
    },
  },
  actions: {
    saveWorkoutData(data: IWorkoutModel[] | null) {
      this.workoutData = data;
    },
  },
});
