export const GetUserData = () => {
    // mjesto s kojeg ćemo s backenda dohvaćati korisničke podatke
    // ovdje ćemo to spremati u store.
    // ovdje možemo za prvu silu dohvatiti podatke od korisnika iz local storage-a
    const getUserData = async () => {
        try {
            const response = await fetch('http://127.0.0.1:5000/get-user-data');
            const userData = await response.json();
            console.log(userData);
        } catch(error) {
            console.error(error);
        }
    }

    return {
        getUserData
    }
}