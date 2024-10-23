import { lessonsData } from "@/data/lessonsData";
import { lessonsDataInterface } from "@/Interface/lessonsDataInterface";

export const GetCurrentSubject = (_subject_name: string) : lessonsDataInterface | undefined => {
    const allLessons : lessonsDataInterface[] = lessonsData;
    return allLessons.find(lesson => lesson.subject_name === _subject_name);
}