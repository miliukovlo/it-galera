import React from "react";
import styles from "./not-found.module.css";
import image from "../../public/assets/404.png";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <main className={`${styles.content}`}>
      {/* <Image height={300} width={300} src={image} alt="Страница не найдена" /> */}
      <div className={`${styles.svgContainer}`}>
        <div>
          <svg
            width="300"
            height="300"
            viewBox="0 0 300 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="200" width="100" height="300" fill="black" />
            <path d="M0 100H200V200H0V100Z" fill="black" />
            <path d="M0 0H100V100H0V0Z" fill="black" />
          </svg>
        </div>
        <div>
          <svg
            width="300"
            height="300"
            viewBox="0 0 300 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0H300V300H0V0Z" fill="black" />
          </svg>
        </div>
        <div>
          <svg
            width="300"
            height="300"
            viewBox="0 0 300 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="200" width="100" height="300" fill="black" />
            <path d="M0 100H200V200H0V100Z" fill="black" />
            <path d="M0 0H100V100H0V0Z" fill="black" />
          </svg>
        </div>
      </div>
      <Link href={"/"} className={`${styles.link}`}>
        Вернуться назад
      </Link>
    </main>
  );
};

export default NotFound;
