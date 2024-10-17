"use client";

import React from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import logo from "../../../public/assets/LogoTiu.jpg";
import LogoutButton from "./Components/LogoutButton";
import { useRouter } from "next/navigation";
import { headerNavInterface } from "@/Interface/headerNavInterface";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";

const linksTeacher: headerNavInterface[] = [
  { id: "1", text: "Расписание", href: "/schedule" },
  { id: "2", text: "Студенты", href: "/users" },
];
const linksAdmin: headerNavInterface[] = [
  { id: "1", text: "Создать пользователя", href: "/create" },
  { id: "2", text: "Пользователи", href: "/users" },
];

interface HeaderProps {
  type: "auth" | "other";
}

const Header: React.FC<HeaderProps> = ({ type }) => {
  const router = useRouter();
  const dispatch = useDispatch()
  const handleExit = () => {
    router.push("/auth");
  };
  const user = useSelector((state: RootState) => state.user.user);

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
      {type === "auth" ? <></> : 
        <nav className={styles.navContainer}>
          {user?.role === "teacher" ? 
            linksTeacher.map((link) => (
              <Link key={link.id} href={link.href} className={styles.navLink}>
                <p className={styles.navText}>{link.text}</p>
              </Link>
            ))
            :
            linksAdmin.map((link) => (
              <Link key={link.id} href={link.href} className={styles.navLink}>
                <p className={styles.navText}>{link.text}</p>
              </Link>
            ))
          }
          <LogoutButton routerFunc={handleExit} dispatch={dispatch}/>
        </nav>
      }
      </header>
  );
};

export default Header;
