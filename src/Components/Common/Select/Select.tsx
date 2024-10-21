import React from "react";
import styles from "./Select.module.css";
import { optionsInterface } from "@/Interface/selectDataInterface";

interface SelectProps {
  options: Array<optionsInterface>;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  selectName: string,
}

export const Select: React.FC<SelectProps> = ({
  selectName,
  options,
  onChange,
}: SelectProps) => {
  return (
    <div className={styles.filterSelect}>
      <select name={selectName} onChange={onChange}>
        {options.map((option) => (
          <option key={option.text} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
};
