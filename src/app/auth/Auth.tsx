"use client";

import React, { useActionState, useRef, useTransition } from "react";
import styles from "./auth.module.css";
import Input from "@/Components/Common/Input/Input";
import Button from "@/Components/Common/Button/Button";
import { useHandleLogin } from "@/Hooks/server/useHandleLogin";
import Form from "next/form";
import { useForm } from "react-hook-form";
import { authSchema, authType } from "@/Schemas/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";

const Auth: React.FC = () => {
	const [error, formAction] = useActionState(useHandleLogin, null);
	const [isPending, startTransition] = useTransition();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<authType>({
		resolver: zodResolver(authSchema),
		defaultValues: { email: "", password: "" },
		mode: "onTouched",
	});

	const formRef = useRef<HTMLFormElement>(null);

	return (
		<main className={`main ${styles.auth__content}`}>
			<h1 className={styles.auth__head_text}>Вход</h1>
			<Form
				className={styles.auth__form}
				ref={formRef}
				action={formAction}
				onSubmit={e => {
					e.preventDefault();
					handleSubmit(() => {
						startTransition(() => {
							formAction(new FormData(formRef.current!));
						});
					})(e);
				}}>
				<Input
					type="text"
					placeholder={errors.email ? errors.email.message : "Введите почту"}
					error={errors.email ? true : false}
					size="m"
					name="email"
					register={register}
					aria-invalid={errors.email ? "true" : "false"}
				/>
				<Input
					type="password"
					placeholder={errors.password ? errors.password.message : "Введите пароль"}
					error={errors.password ? true : false}
					size="m"
					name="password"
					register={register}
					aria-invalid={errors.password ? "true" : "false"}
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
