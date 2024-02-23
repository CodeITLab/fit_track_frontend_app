import { StoreAccessController } from "@/controllers/store-access/StoreAccessController"

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
            console.log(data);
        })
        .catch(error => console.error("Error: ", error));
    };
    return {
        saveUserData
    }
}