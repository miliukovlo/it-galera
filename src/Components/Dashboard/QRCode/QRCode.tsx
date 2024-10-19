"use client"

import React, { useEffect, useState } from 'react';
import styles from "./QRCode.module.css"
import Button from '@/Components/Common/Button/Button';
import { lifetimeInterface } from '@/Interface/lifetimeInterface';
import { lifetime } from '@/data/lifetime';
import QrCode from "../../../../public/assets/qr.png"
import Image from 'next/image';

const QRCode = () => {

    const [getQr, setGetQr] = useState<boolean>(false)
    const [lifeTime, setLifeTime] = useState<number>(300000)

    useEffect(() => {
        if (getQr) {
            const timeout = setTimeout(() => {
                setGetQr(false);
            }, lifeTime);
    
            return () => {
                clearTimeout(timeout);
            };
        }
    }, [getQr, lifeTime]);
    

    const handleGetQr = (): void => {
        setGetQr(true)
    }

    const handleChangeLifeTime = (e: React.ChangeEvent<HTMLSelectElement>) : void => {
        setLifeTime(Number(e.target.value))
    }

    return (
        <aside className={styles.qr_block}>
            <h2 className={styles.qr_header}>Укажите время действия QR-кода</h2>
            <select className={styles.qr_select} disabled={getQr} onChange={handleChangeLifeTime}>
                {lifetime.map((element: lifetimeInterface) => {
                    return (
                        <option 
                            value={element.time} 
                            key={element.id}
                        >
                            {element.text}
                        </option>
                    )
                })}
            </select>
                {getQr ?
                <Image
                    src={QrCode}
                    alt='QR-Code'
                    width={200}
                    height={200}
                />
                :
                <Button
                    size="m"
                    onClick={() => {handleGetQr()}}
                    text="Получить QR-код"
                />    
            }
        </aside>
    );
}

export default QRCode;
