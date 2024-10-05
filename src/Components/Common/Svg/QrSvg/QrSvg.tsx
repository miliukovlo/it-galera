import React from "react";
import qr404 from "./././qr404.svg";
import Image from "next/image";

const QrSvg = () => {
  return (
    <div>
      <Image height={300} width={300} src={qr404} alt="Страница-не-найдена" />
    </div>
  );
};

export default QrSvg;
