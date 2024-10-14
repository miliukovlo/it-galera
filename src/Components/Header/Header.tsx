"use client";

import React from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import logo from "../../../public/assets/LogoTiu.jpg";
import LogoutButton from "./Components/LogoutButton";
import { useRouter } from "next/navigation";
import { headerNavInterface } from "@/Interface/headerNavInterface";
import Link from "next/link";

const links: headerNavInterface[] = [
  { id: "1", text: "Главная", href: "/dashboard" },
  { id: "2", text: "Пользователи", href: "/users" },
];

interface HeaderProps {
  type: "auth" | "other";
}

const Header: React.FC<HeaderProps> = ({ type }) => {
  const router = useRouter();

  const handleExit = () => {
    router.push("/auth");
  };

  return (
    <header className={styles.header}>
      <Image
        width={80}
        height={80}
        className={styles.image}
        src={logo}
        alt='Логотип ВШЦТ'
        priority={true}
      />

      <nav className={styles.navContainer}>
        {links.map((link) => (
          <Link key={link.id} href={link.href}>
            <p className={styles.hoverAnimation}>{link.text}</p>
          </Link>
        ))}
        {type === "auth" ? <></> : <LogoutButton routerFunc={handleExit} />}
      </nav>
    </header>
  );
};

export default Header;
