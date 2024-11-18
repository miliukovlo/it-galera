import { loginInterface } from "@/Interface/loginInterface";
import axios from "axios";

export const GetLogin = async (login: string, passwordLogin: string): Promise<loginInterface> => {
    try {
        const response = await axios.post('http://localhost:5007/api/account', {
            email: login,
            password: passwordLogin
        });
        if (response.data) {
            return response.data; 
        } else {
            throw new Error("Не удалось получить данные");
        }
    } catch (e) {
        console.error(e);
        throw e;
    }
};
