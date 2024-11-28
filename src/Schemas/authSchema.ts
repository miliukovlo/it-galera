import { z } from "zod";

export const authSchema = z.object({
	email: z
		.string()
		.min(1, "Поле почты должно быть заполнено")
		.trim()
		.email({ message: "Почта указана не верно" }),
	password: z
		.string({ message: "Поле пароль должно быть заполненно" })
		.trim()
		.min(5, "Пароль должен иметь не менее 5 символов"),
});

export type authType = z.infer<typeof authSchema>;
