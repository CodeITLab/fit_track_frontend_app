import { defineStore } from "pinia";
import { IWorkoutModel } from "@/models/IWorkoutModel";
import GetWorkoutData from "@/controllers/GetWorkoutDataController";

export const useWorkoutStore = defineStore("workouts", {
  state: () => {
    return {
      workoutData: [] as IWorkoutModel[] | null,
      selectedWorkout: {} as IWorkoutModel | null,
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
    saveSelectedWorkout(workout: IWorkoutModel) {
      this.selectedWorkout = workout;
    },
    /* kreirati metodu za setanje workoutOwnera */
  },
});
