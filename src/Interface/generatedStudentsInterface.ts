export interface generatedStudentsInterface {
    _id: string,
    index?: number,
    role: string,
    picture?: string,
    name: string,
    email?: string,
    password?: string,
    lessons?: lessonsInterface[]
    group?: string
}

export interface lessonsInterface {
    name: string,
    attendance: number
}

