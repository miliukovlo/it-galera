import React from 'react';
import styles from './Button.module.css'

interface ButtonProps {
    text: string,
    onClick: () => void,
    size: 'm' | 'l'
}

const Button: React.FC<ButtonProps> = ({
    text,
    onClick,
    size
}: ButtonProps) => {
    return (
        <button
            className={size === "m" ? `${styles.button} ${styles.size_m}` : `${styles.button} ${styles.size_l}`}
            onClick={onClick}
        >
            {text}
        </button>
    );
}

export default Button;
