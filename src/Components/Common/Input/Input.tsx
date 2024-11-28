import React from "react";
import styles from "./Input.module.css";
import { UseFormRegister } from "react-hook-form";
import { authType } from "@/Schemas/authSchema";

interface InputProps {
	type: string;
	value?: string;
	onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
	placeholder: string;
	name: string | undefined;
	register: UseFormRegister<authType>;
	size: "m" | "l";
}

const Input: React.FC<InputProps> = React.memo(
	({
		type,
		value,
		// onChange,
		placeholder,
		size,
		name,
		register,
	}: InputProps) => {
		return (
			<input
				type={type}
				placeholder={placeholder}
				value={value}
				// onChange={onChange}
				className={
					size === "m"
						? `${styles.input} ${styles.size_m}`
						: `${styles.input} ${styles.size_m}`
				}
				{...(register ? register(name as "email" | "password") : {})}
			/>
		);
	}
);

Input.displayName = "Input";

export default Input;
