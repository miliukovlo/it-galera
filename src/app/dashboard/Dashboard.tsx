"use client"

import React from 'react';
import styles from "./Dashboard.module.css"
import StudentsList from '@/Components/Dashboard/StudentsList/StudentsList';
import QRCode from '@/Components/Dashboard/QRCode/QRCode';

const Dashboard = () => {

    return (
        <main className={`main ${styles.content}`}>
            <StudentsList/>
            <QRCode/>
        </main>
    );
}

export default Dashboard;
