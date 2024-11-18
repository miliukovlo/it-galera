import { coupleInterface } from "@/Interface/coupleInterface";
import axios from "axios"

export const GetLesson = async (id: string) : Promise<coupleInterface> => {
    try {
        const response = await axios.post("http://localhost:5007/api/couple", {
            id: Number(id)
        })
        if (response.data) {
            return response.data; 
        } else {
            throw new Error("Не удалось получить данные");
        }
    } catch (e) {
        console.log(e)
        throw e
    }
}