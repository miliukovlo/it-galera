import React from "react";
import styles from "./Footer.module.css";
import Image from "next/image";
import logo from "../../../public/assets/LogoTiu.jpg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Image
          width={80}
          height={80}
          className={styles.image}
          src={logo}
          alt="Логотип ВШЦТ"
          priority={true}
        />
        <h1 className={styles.text__header}>Отметка</h1>
      </div>
    </footer>
  );
};

export default Footer;
