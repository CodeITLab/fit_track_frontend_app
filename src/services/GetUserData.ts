import { StoreAccessController } from "@/controllers/store-access/StoreAccessController";

export const GetUserData = () => {

    const getUserData = async () => {
            await fetch('http://127.0.0.1:8080/user/get-user-data?id=' + StoreAccessController().userStore.getUserId)
            .then(response => response.json())
            .then((data) => {
                StoreAccessController().userStore.updateUserInfo(data);
            })
            .catch(error => console.error("Error: ", error));
    }

    return {
        getUserData
    }
}