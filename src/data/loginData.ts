import { loginInterface } from "@/Interface/loginInterface";

export const loginData : loginInterface[] = [
    {
        email: "teacher@mail.ru",
        password: "password",
        role: "teacher",
        fio: "Иванов Иван Иванович",
        groups: ["ИИПб-24-1", "ИИПб-23-1", "РППб-24-1", "СМАРТб-24-1"]
    },
    {
        email: "admin@mail.ru",
        password: "password",
        role: "admin",
        fio: "Иванов Иван Иванович"
    },
]