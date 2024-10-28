import React from 'react';
import styles from './Button.module.css'

interface ButtonProps {
    text: string,
    onClick: () => void,
    size: 'm' | 'l' | 's' | "xl",
    disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({
    text,
    onClick,
    size,
    disabled
}: ButtonProps) => {
    return (
        <button
            disabled={disabled}
            className={
                size === "m" ?
                    `${styles.button} ${styles.size_m}` : 
                size === "l" ?
                    `${styles.button} ${styles.size_l}` : 
                size === 's' ? 
                    `${styles.button} ${styles.size_s}` :
                    `${styles.button} ${styles.size_xl}`}
            onClick={onClick}
        >
            {text}
        </button>
    );
}

export default Button;
