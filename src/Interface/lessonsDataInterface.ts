export interface lessonsDataInterface {
    index: number,
    subject_name: string,
    lessons: Array<lessonsInterface>
}

interface lessonsInterface {
    date: string,
    status: "Уважительная" | "Болел" | "Присутствовал" | "Отсутствовал",
    lesson_type: "Лекция" | "Лабораторная" | "Практика",
    id: number
}