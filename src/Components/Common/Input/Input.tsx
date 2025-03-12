import React, { FC, memo } from "react";
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
	size: "m" | "l" | "full";
	error?: boolean;
	label?: string;
}

const sizeMap: Record<string, string> = {
	["m"]: `${styles.input} ${styles.size_m}`,
	["l"]: `${styles.input} ${styles.size_l}`,
	["full"]: `${styles.input} ${styles.size_full}`,
};

const Input: FC<InputProps> = memo(
	({
		type,
		value,
		placeholder,
		size,
		name,
		error,
		label,
		register,
	}: InputProps) => {
		return (
			<>
				{label && <label className={styles.input_label}>{label}</label>}
				<input
					type={type}
					placeholder={placeholder}
					value={value}
					className={`${sizeMap[size as keyof typeof sizeMap]} ${error ? styles.error : ""}`}
					{...(register ? register(name as "email" | "password") : {})}
				/>
			</>
		);
	},
);

Input.displayName = "Input";

export default Input;
