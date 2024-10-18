import React from "react";
import styles from "./Select.module.css";
import { optionsInterface } from "@/Interface/selectDataInterface";

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
      <select name={defaultText} onChange={onChange} defaultValue={""}>
        <option value={""} color='gray' disabled hidden>
          {defaultText}
        </option>
        {options.map((option) => (
          <option key={option.text} value={option.text}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
};
