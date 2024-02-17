
import { useUserDataStore } from "../../store/UserData"

export const UserDataControler = () => {

    // umjesto .user bi trebala ići get metoda getUserInfo
    const dataStore = useUserDataStore().defaultUserData;

    // na tebi je ako hoćeš ovdje napraviti dodatnu metodu za spremanje u local storage ili to hoćeš direktno iz servisa

    return {
        dataStore,
    }
}

