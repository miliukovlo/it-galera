"use client";

import React from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import logo from "../../../public/assets/LogoTiu.jpg";
import LogoutButton from "./Components/LogoutButton";
import { usePathname, useRouter } from "next/navigation";
import { headerNavInterface } from "@/Interface/headerNavInterface";
import Link from "next/link";
import { useDispatch } from "react-redux";

const linksTeacher: headerNavInterface[] = [
  { text: "Расписание", href: "/schedule" },
  { text: "Статистика", href: "/users" },
];

const linksAdmin: headerNavInterface[] = [
  { text: "Создать пользователя", href: "/create" },
  { text: "Статистика", href: "/users" },
];

interface HeaderProps {
  type: "auth" | "other";
  role?: string | null;
}

const Header: React.FC<HeaderProps> = ({ type, role }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const path = usePathname()

  const handleExit = () => {
    router.push("/auth");
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Image
          width={80}
          height={80}
          className={styles.image}
          src={logo}
          alt='Логотип ВШЦТ'
          priority={true}
        />
        {type === "auth" ? null : 
          <nav className={styles.navContainer}>
            {role && role === "teacher" ? 
              linksTeacher.map((link) => {
                const isActive = path.startsWith(link.href)
                return (
                  <Link key={link.href} href={link.href} className={styles.navLink}>
                    <p className={isActive ? `${styles.navText} ${styles.navTextActive}` : `${styles.navText}`}>{link.text}</p>
                  </Link>
                )
              })
              :
              linksAdmin.map((link) => {
                const isActive = path.startsWith(link.href)
                return (
                  <Link key={link.href} href={link.href} className={styles.navLink}>
                    <p className={isActive ? `${styles.navText} ${styles.navTextActive}` : `${styles.navText}`}>{link.text}</p>
                  </Link>
                )  
              })
            }
            <LogoutButton routerFunc={handleExit} dispatch={dispatch}/>
          </nav>
        }
      </div>
    </header>
  );
};

export default Header;
