import React from 'react';
import styles from './Footer.module.css'
import Image from 'next/image';
import logo from "../../../public/assets/LogoTiu.jpg"

const Footer = () => {
    return (
        <div className={styles.footer}>
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

export default Footer;
