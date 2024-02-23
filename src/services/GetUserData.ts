
export const GetUserData = () => {
    const getUserData = async () => {
            await fetch('http://127.0.0.1:8080/user/get-user-data')
            .then(response => response.json())
            .then((data) => {
                console.log(data);
            })
            .catch(error => console.error("Error: ", error));
    }

    return {
        getUserData
    }
}