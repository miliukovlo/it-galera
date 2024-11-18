import { coupleInterface } from "@/Interface/coupleInterface"
import axios from "axios"

export const GetSchedule = async () : Promise<coupleInterface[]> => {
    try {
        const response = await axios.get("http://localhost:5007/api/couple")
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