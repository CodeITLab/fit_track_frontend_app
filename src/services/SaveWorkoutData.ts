import {StoreAccessController} from "../controllers/store-access/StoreAccessController"
import { GetUserData } from "./GetUserData";

export const SaveWorkoutData = () => {
    const saveWorkoutData = async () => {
        await fetch('http://127.0.0.1:8080/user/save-user-data', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify(StoreAccessController().workoutStore.getWorkouts)
        })
        .then(response => response.json())
        .then((data) => {
            console.log(data)
        })
        .catch(error => console.error("Error: ", error));
    };
    return {
        saveWorkoutData
    }
}