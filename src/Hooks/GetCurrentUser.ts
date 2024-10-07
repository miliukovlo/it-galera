import { generatedStudents } from "@/data/GeneratedStudents"
import { generatedStudentsInterface } from "@/Interface/generatedStudentsInterface"

export const GetCurrentUser = (id: string) : generatedStudentsInterface | undefined => {
    const allStudents : generatedStudentsInterface[] = generatedStudents
    return allStudents.find((user) => user._id === id)

}