import React from 'react';
import styles from "./Input.module.css"

interface InputProps {
    type: string,
    value: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    placeholder: string,
    size: 'm' | 'l'
}

const Input : React.FC<InputProps> = React.memo(({
    type,
    value,
    onChange,
    placeholder,
    size
}: InputProps) => {
    return (
        <input 
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={size === "m" ? `${styles.input} ${styles.size_m}` : `${styles.input} ${styles.size_m}`}
        />
    );
})

Input.displayName = "Input"

export default Input;
