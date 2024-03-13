import { getData } from "@/api/useFetch";
import { IWorkoutModel } from "@/models/IWorkoutModel";
import { useWorkoutStore } from "@/store/workoutStore";

const GetWorkoutData = async (): Promise<void> => {
  const email = localStorage.getItem("email") || "";

  const { data, hasError } = await getData<IWorkoutModel[]>(
    "http://127.0.0.1:8080/workouts/get-users-workouts?email=" + email
  );

  useWorkoutStore().saveWorkoutData(data.value);
};

export default GetWorkoutData;
