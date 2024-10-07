"use client";

import React from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import Image from "next/image";
import logo from "../../../public/assets/LogoTiu.jpg";
import LogoutIcon from "../Common/Svg/Icons/LogoutIcon/LogoutIcon";
import DarkThemeIcon from "../Common/Svg/Icons/DarkThemeIcon/DarkThemeIcon";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
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
        {pathname === "/auth" ? (
          <></>
        ) : (
          <Link href={"/auth"}>
            <LogoutIcon fill="white" />
          </Link>
        )}

        <DarkThemeIcon fill="white" />
      </nav>
    </header>
  );
};

export default Header;
