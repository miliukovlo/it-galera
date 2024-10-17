import React from "react";
import styles from "./Select.module.css";
import { optionsInterface } from "@/Interface/optionsInterface";

interface SelectProps {
  defaultText: string;
  options: Array<optionsInterface>;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Select: React.FC<SelectProps> = ({
  defaultText,
  options,
  onChange,
}: SelectProps) => {
  return (
    <div className={styles.filterSelect}>
      <select onChange={onChange} defaultValue={""}>
        <option value={""} color='gray' disabled hidden>
          {defaultText}
        </option>
        {options.map((option) => (
          <option key={option.text} value={defaultText}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
};
