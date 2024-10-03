import React from 'react';
import styles from './Header.module.css'
import Image from 'next/image';
import logo from "../../../public/assets/LogoTiu.jpg"

const Header = () => {
    return (
        <div className={styles.header}>
            <Image
                width={80}
                height={80}
                className={styles.image}
                src={logo}
                alt="Логотип ВШЦТ"
            />
            <h1 className={styles.text__header}>Отметка</h1>
        </div>
    );
}

export default Header;
