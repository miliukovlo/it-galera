"use client"

import React, { useEffect } from 'react';
import styles from "./Dashboard.module.css"
import StudentsList from '@/Components/Dashboard/StudentsList/StudentsList';
import QRCode from '@/Components/Dashboard/QRCode/QRCode';
import { loginPropsInterface } from '@/Interface/loginPropsInterface';
import { useRouter } from 'next/navigation';

const Dashboard : React.FC<loginPropsInterface> = ({
    isLogin
}) => {

    const {replace} = useRouter()
    useEffect(() => {
        const checkReplace = async () => {
            if (!isLogin) {
                replace('/auth')
            }
        }
        checkReplace()
    },[isLogin])

    return (
        <main className={`main ${styles.content}`}>
            <StudentsList/>
            <QRCode/>
        </main>
    );
}

export default Dashboard;
