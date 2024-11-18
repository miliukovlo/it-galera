import { studentInterface } from "@/Interface/StudentInterface";
import axios from "axios"

export const GetStudents = async (group: string) : Promise<studentInterface[]> => {
    try {
        const response = await axios.post("http://localhost:5007/api/students", {
            group: group
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