import { generatedStudents } from "@/data/GeneratedStudents";
import { generatedStudentsInterface } from "@/Interface/generatedStudentsInterface";
import cyrillicToTranslit from "cyrillic-to-translit-js";

export const GetStudentsOfGroup = (group__name: string) : generatedStudentsInterface[] | undefined => {
    try {
        const cyrilicTranslit = cyrillicToTranslit();
        if (group__name) {
            const group = cyrilicTranslit.reverse(group__name)
            console.log(group)
            return generatedStudents.filter(student => student.group === group)
        }
    } catch (e: unknown) {
        if (e instanceof Error) {
            throw new Error(e.message);
        } else {
            throw new Error("Неизвестная ошибка");
        }
    }
    
}