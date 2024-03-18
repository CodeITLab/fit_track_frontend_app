import { defineStore } from "pinia";
import { IWorkoutModel } from "@/models/IWorkoutModel";
import GetWorkoutData from "@/controllers/WorkoutController";

export const useWorkoutStore = defineStore("workouts", {
  state: () => {
    return {
      workoutData: [] as IWorkoutModel[] | null,
      selectedWorkout: {} as IWorkoutModel,
    };
  },
  getters: {
    getWorkoutData(state) {
      return state.workoutData;
    },
    getSelectedWorkout(state) {
      return state.selectedWorkout;
    },
  },
  actions: {
    saveWorkoutData(data: IWorkoutModel[] | null) {
      this.workoutData = data;
    },
  },
});
