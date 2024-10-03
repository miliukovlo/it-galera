"use client"

import React from 'react';
import styles from "./not-found.module.css"
import image from "../../public/assets/404.png"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Button from '@/Components/Common/Button/Button';

const NotFound = () => {

    const {replace} = useRouter()

    const handleReplace = () => {
        replace('/')
    }

    return (
        <main className={`main ${styles.content}`}>
            <Image
            height={100}
            width={100}
            src={image}
            alt='Страница не найдена'
            />
            <Button
                text='Вернуться на главную страницу'
                size='l'
                onClick={handleReplace}
            />
        </main>
    );
}

export default NotFound;
