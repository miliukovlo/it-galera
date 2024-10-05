import React from "react";
import styles from "./not-found.module.css";
import Letter4 from "@/Components/Common/Svg/Letter4";
import Square from "@/Components/Common/Svg/Square";
import QrSvg from "@/Components/Common/Svg/QrSvg/QrSvg";
import Link from "next/link";

const NotFound = () => {
  return (
    <main className={`${styles.content}`}>
      <div className={`${styles.svgContainer}`}>
        <Letter4 />
        <Square />
        <Letter4 />
        <div className={`${styles.qrSvgContainer}`}>
          <QrSvg />
        </div>
      </div>

      <Link href={"/"} className={`${styles.link}`}>
        Вернуться назад
      </Link>
    </main>
  );
};

export default NotFound;
