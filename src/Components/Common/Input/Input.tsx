import React from "react";
import styles from "./Input.module.css";
import { UseFormRegister } from "react-hook-form";
import { authType } from "@/Schemas/authSchema";

interface InputProps {
	type: string;
	value?: string;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	placeholder?: string;
	name?: string | undefined;
	register?: UseFormRegister<authType>;
	size: "m" | "l";
	error?: boolean;
}

const Input: React.FC<InputProps> = React.memo(
	({
		type,
		value,
		// onChange,
		placeholder,
		size,
		name,
		error,
		register,
	}: InputProps) => {
		return (
			<input
				type={type}
				placeholder={placeholder}
				value={value}
				// onChange={onChange}
				className={
					size === "m" && !error
						? `${styles.input} ${styles.size_m}`
						: size === "m" && error
						? `${styles.input} ${styles.size_m} ${styles.error}`
						: size === "l" && error
						? `${styles.input} ${styles.size_l} ${styles.error}`
						: `${styles.input} ${styles.size_l}`
				}
				{...(register ? register(name as "email" | "password") : {})}
			/>
		);
	}
);

Input.displayName = "Input";

export default Input;
