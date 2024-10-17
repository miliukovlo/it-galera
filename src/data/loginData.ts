interface loginInterface {
    email: string,
    password: string,
    role: 'teacher' | "admin",
    fio: string
}

export const loginData : loginInterface[] = [
    {
        email: "teacher@mail.ru",
        password: "password",
        role: "teacher",
        fio: "Иванов Иван Иванович"
    },
    {
        email: "admin@mail.ru",
        password: "password",
        role: "admin",
        fio: "Иванов Иван Иванович"
    },
]