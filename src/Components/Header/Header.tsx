"use client";

import React from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import logo from "../../../public/assets/LogoTiu.jpg";
import DarkThemeIcon from "../Common/Svg/Icons/DarkThemeIcon/DarkThemeIcon";
import LogoutButton from "./Components/LogoutButton";
import { useRouter } from "next/navigation";

interface HeaderProps {
  type: "auth" | "other"
}

const Header : React.FC<HeaderProps> = ({
  type
}) => {

  const router = useRouter()

  const handleExit = () => {
    router.push('/auth')
  }

  return (
    <header className={styles.header}>
      <Image
        width={80}
        height={80}
        className={styles.image}
        src={logo}
        alt="Логотип ВШЦТ"
        priority={true}
      />

      <nav className={styles.navContainer}>
        {type === "auth" ? (
          <></>
        ) : (
          <LogoutButton routerFunc={handleExit}/>
        )}

        <DarkThemeIcon fill="white" />
      </nav>
    </header>
  );
};

export default Header;
