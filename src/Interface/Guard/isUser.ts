import { loginInterface } from "../loginInterface";

export const isUser = (obj: loginInterface): obj is loginInterface => {
    return 'role' in obj &&  typeof obj.role === "string" &&
    'fio' in obj &&  typeof obj.fio === "string" &&
    'email' in obj &&  typeof obj.email === "string" &&
    "password" in obj && typeof obj.password === "string";
}
