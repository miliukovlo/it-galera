"use client"

import React from 'react';
import styles from "./Dashboard.module.css"
import StudentsList from '@/Components/Dashboard/StudentsList/StudentsList';
import QRCode from '@/Components/Dashboard/QRCode/QRCode';
import { useSelector } from 'react-redux';

const Dashboard : React.FC = () => {

    const user = useSelector((state: any) => state.user.user);
    console.log(user)
    return (
        <main className={`main ${styles.content}`}>
            <StudentsList/>
            <QRCode/>
        </main>
    );
}

export default Dashboard;
