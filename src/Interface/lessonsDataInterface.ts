export interface lessonsDataInterface {
    index: number,
    subject_name: string,
    lessons: Array<lessonsInterface>
}

interface lessonsInterface {
    date: string,
    status: string,
    lesson_type: string,
}