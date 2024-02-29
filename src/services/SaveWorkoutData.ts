import {StoreAccessController} from "../controllers/store-access/StoreAccessController"

export const SaveWorkoutData = () => {
    const saveWorkoutData = async () => {
        await fetch('http://127.0.0.1:8080/workouts/save-workout-data', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify(StoreAccessController().workoutStore.getWorkouts[0])
        });
    };
    return {
        saveWorkoutData
    }
}