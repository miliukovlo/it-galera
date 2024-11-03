export interface loginInterface {
    email: string,
    password: string,
    role: 'teacher' | "admin",
    fio: string,
    groups?: Array<string>
}