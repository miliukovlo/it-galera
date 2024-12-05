"use server";

import { GetLogin } from "../client/GetLogin";
import { getRole, login } from "@/authLib";
import axios from "axios";
import { redirect } from "next/navigation";
import cyrillicToTranslit from "cyrillic-to-translit-js";
import { loginInterface } from "@/Interface/loginInterface";
import { isUser } from "@/Interface/Guard/isUser";

export type state = "404" | "401" | "500" | null | undefined;

export const useHandleLogin = async (
	previousState: state,
	formData: FormData
): Promise<state> => {
	const loginValue = formData.get("email") as string;
	const password = formData.get("password") as string;
	if (loginValue === "" || password === "") {
		return "401";
	}
	try {
		const user: loginInterface = await GetLogin(loginValue, password);
		if (!isUser(user)) {
			return "500";
		}
		if (user) {
			const cyrilic = cyrillicToTranslit();
			await login(loginValue, user.role, cyrilic.transform(user.fio));
		}
	} catch (e) {
		if (axios.isAxiosError(e)) {
			const errorResponse = e.response;
			if (errorResponse) {
				if (errorResponse.status === 401) {
					return "401";
				} else if (errorResponse.status === 404) {
					return "404";
				} else if (errorResponse.status === 500) {
					return "500";
				}
			} else {
				console.error("Ошибка без ответа от сервера", e.message);
				return "500";
			}
		} else {
			console.error("Произошла ошибка:", e);
			return "500";
		}
	} finally {
		const role = await getRole();
		if (role) {
			redirect(role === "teacher" ? "/schedule" : "/users");
		}
	}
};
