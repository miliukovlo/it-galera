import React from "react";
import styles from "./Select.module.css";
import { optionsInterface } from "@/Interface/selectDataInterface";

interface SelectProps {
	options: Array<optionsInterface>;
	onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
	selectName: string;
	value: string;
	hidden?: boolean
}

export const Select: React.FC<SelectProps> = ({
	selectName,
	options,
	onChange,
	value,
	hidden
}: SelectProps) => {
	return (
		<div className={hidden ? `${styles.filterSelectContainer} ${styles.hidden}` : styles.filterSelectContainer}>
			<select
				className={styles.filterSelect}
				name={selectName}
				onChange={onChange}
				value={value}>
				{options.map(option => (
					<option key={option.text} value={option.value}>
						{option.text}
					</option>
				))}
			</select>
		</div>
	);
};
