import { StoreAccessController } from "@/controllers/store-access/StoreAccessController";

export const GetWorkoutData = () => {

    const getWorkoutData = async () => {
            await fetch('http://127.0.0.1:8080/user/get-users-workouts?id=' + StoreAccessController().userStore.getUserId)
            .then(response => response.json())
            .then((data) => {
                StoreAccessController().workoutStore.createWorkout(data)
            })
            .catch(error => console.error("Error: ", error));
    }

    return {
       getWorkoutData
    }
}