import { IWorkoutModel } from "@/models/IWorkoutModel";
import { useWorkoutStore } from "@/store/workoutStore";
import apiService from "@/api/apiService";

const GetWorkoutData = async (): Promise<void> => {

  const email = localStorage.getItem("email") || "";

  try {
    const data = await apiService.get<IWorkoutModel[]>("workouts/get-users-workouts?email=" + email);
    useWorkoutStore().saveWorkoutData(data);
  } catch (error) {
    console.error(error)
  }
};

export default GetWorkoutData;
