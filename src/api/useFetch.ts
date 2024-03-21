import { IUser } from "@/models/IUser";
import { reactive, toRefs } from "vue";
import { IWorkoutModel } from "@/models/IWorkoutModel";
import GetWorkoutData from "@/controllers/GetWorkoutDataController";
import { useWorkoutStore } from "@/store/workoutStore";

interface State<T> {
  isLoading: boolean;
  hasError: boolean;
  errorMessage: string;
  data: T | null;
}

export const getData = async <T>(
  url: string,
  options?: Record<string, unknown>
) => {
  const state = reactive<State<T>>({
    isLoading: true,
    hasError: false,
    errorMessage: "",
    data: null,
  });

  const fetchData = async () => {
    state.isLoading = true;
    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(response.statusText);
      }
      state.data = await response.json();
    } catch (error: unknown) {
      const typedError = error as Error;
      state.hasError = true;
      state.errorMessage = typedError.message;
    } finally {
      state.isLoading = false;
    }
  };

  await fetchData();

  return {
    ...toRefs(state),
  };
};

export const saveUserData = (userData: IUser) => {
  const saveUserData = async () => {
    await fetch("http://127.0.0.1:8080/user/save-user-data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {})
      .catch((error) => console.error("Error: ", error));
  };
  return {
    saveUserData,
  };
};

export const saveWorkoutData = (workoutData: IWorkoutModel) => {
  const saveWorkoutData = async () => {
    await fetch("http://127.0.0.1:8080/workouts/save-workout-data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(workoutData),
    })
      .then((response) => response.json())
      .then((data) => {})
      .finally(() => {
        GetWorkoutData();
      })
      .catch((error) => console.error("Error: ", error));
  };
  return {
    saveWorkoutData,
  };
};

export const updateCurrentWorkout = () => {};
