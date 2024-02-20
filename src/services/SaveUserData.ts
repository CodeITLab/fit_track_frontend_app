import { StoreAccessController } from "@/controllers/store-access/StoreAccessController"

export const SaveUserData = () => {

    console.log("User info: " + JSON.stringify(StoreAccessController().userStore.getUserInfo))

    const saveUserData = async () => {
        await fetch('http://127.0.0.1:5000/save-user-data', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify(StoreAccessController().userStore.getUserInfo),
        })
        .then(response => response.json())
        .then((data) => {
            console.log(data['token'])
        })
        .catch(error => console.error("Error: ", error));
    };
    return {
        saveUserData
    }
}