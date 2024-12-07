import { generatedStudentsInterface } from "@/Interface/generatedStudentsInterface";
import axios from "axios";

export const GetUsersList = async (type: "limit" | "searchAll",limit?: number): Promise<generatedStudentsInterface[]> => {
    try {
        if (type === "limit") {
            const response = await axios.get(`http://localhost:5007/api/generate/limit/${limit}`);
            return response.data
        }
        else if (type === "searchAll") {
            const response = await axios.get(`http://localhost:5007/api/generate`);
            return response.data
        } else {
            const response = await axios.get(`http://localhost:5007/api/generate`);
            return response.data
        }
    } catch (error) {
        console.error("Error fetching users:", error);
        throw error;
    }
};
