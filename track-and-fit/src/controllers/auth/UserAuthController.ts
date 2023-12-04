import { useUserDataStore } from "@/store/UserData";

export const UserAuthController = () => {

    // ovdje ćemo raditi pozive prema backendu i raditi login preko googlea
    
    // moramo dohvatiti store vrijednosti da možemo raditi nad user objektom
    const userData = useUserDataStore();

    // ako sve prođe dobro i dobijemo token od backenda, onda ćemo postaviti sve user podatke u store-u
    // zasad samo za potrebe testa protected route-a, postavljamo auth varijablu na false
    userData.initData(false);
}