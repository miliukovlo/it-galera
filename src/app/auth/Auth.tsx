"use client";

import React, { useActionState } from "react";
import styles from "./auth.module.css";
import Input from "@/Components/Common/Input/Input";
import Button from "@/Components/Common/Button/Button";
import { useHandleLogin } from "@/Hooks/client/useHandleLogin";
import Form from "next/form";

const Auth: React.FC = () => {
	const [error, action, isPending] = useActionState(useHandleLogin, null);
	return (
		<main className={`main ${styles.auth__content}`}>
			<h1 className={styles.auth__head_text}>Вход</h1>
			<Form className={styles.auth__form} action={action}>
				<Input
					name={"login"}
					type="text"
					placeholder="Введите корп. почту"
					size="m"
				/>
				<Input
					name="password"
					type="password"
					placeholder="Введите пароль"
					size="m"
				/>
				<Button disabled={isPending} text="Войти" size="s" />
			</Form>

			<p className={error ? "error__text" : "error__text_hidden"}>
				{error === "404"
					? "Такой учетной записи нет!"
					: error === "401"
					? "Вы неправильно ввели логин/пароль!"
					: error === "500"
					? "Сервер не работает, повторите попытку позже!"
					: ""}
			</p>
		</main>
	);
};

export default Auth;
