import React from 'react';
import styles from "./not-found.module.css"
import image from "../../public/assets/404.png"
import Image from 'next/image';
import Link from 'next/link';

const NotFound = () => {

    return (
        <main className={`${styles.content}`}>
            <Image
            height={300}
            width={300}
            src={image}
            alt='Страница не найдена'
            />
            <Link href={'/'} className={`${styles.link}`}>Вернуться назад</Link>
        </main>
    );
}

export default NotFound;
