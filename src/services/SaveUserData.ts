import { StoreAccessController } from "@/controllers/store-access/StoreAccessController"

export const SaveUserData = () => {

    console.log("User info: " + JSON.stringify(StoreAccessController().userStore.getUserInfo))

    const saveUserData = async () => {
        try {
            const request = await fetch('http://127.0.0.1:5000/save-user-data', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(StoreAccessController().userStore.getUserInfo),
            });
            const result = await request.json();
            console.log(result);
        } catch(error) {
            console.error("Error:", error);
        }
    }

    return {
        saveUserData
    }
}