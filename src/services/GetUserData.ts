export const GetUserData = () => {
    const getUserData = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8080/user/get-user-data');
            const userData = await response.json();
            
        } catch(error) {
            console.error(error);
        }
    }

    return {
        getUserData
    }
}