"use client";

import React, { useEffect } from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import logo from "../../../public/assets/LogoTiu.jpg";
import LogoutButton from "./Components/LogoutButton";
import { useRouter } from "next/navigation";
import { headerNavInterface } from "@/Interface/headerNavInterface";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { loginData } from "@/data/loginData";
import { setUser } from "@/store/userData/userStore";

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
  role?: Promise<string | null>;
}

const Header: React.FC<HeaderProps> = ({ type, role }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector((state: RootState) => state.user.user);

  useEffect(() => {
    const fetchRole = async () => {
      if (role) {
        const userRole = await role;
        const userData = loginData.find(user => user.role === userRole);
        
        if (userData) {
          dispatch(setUser(userData));
        }
      }
    };

    fetchRole();
  }, [role, dispatch]);

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
      {type === "auth" ? null : 
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
