import { StoreAccessController } from "@/controllers/store-access/StoreAccessController"
import { GetUserData } from "./GetUserData";

export const SaveUserData = () => {
    const saveUserData = async () => {
        await fetch('http://127.0.0.1:8080/user/save-user-data', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify(StoreAccessController().userStore.getUserInfo),
        })
        .then(response => response.json())
        .then((data) => {
            StoreAccessController().userStore.setUserId(data);
            StoreAccessController().workoutData.
            GetUserData().getUserData();
        })
        .catch(error => console.error("Error: ", error));
    };
    return {
        saveUserData
    }
}