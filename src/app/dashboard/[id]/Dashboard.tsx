"use client"

import React from 'react';
import styles from "./Dashboard.module.css"
import StudentsList from '@/Components/Dashboard/StudentsList/StudentsList';
import QRCode from '@/Components/Dashboard/QRCode/QRCode';
import { notFound, useParams } from 'next/navigation';
import { schedule } from '@/data/coupleData';

const Dashboard : React.FC = () => {
    const {id} = useParams()
    const lesson = schedule.find((lesson) => lesson.id === Number(id))
    if (!lesson || !id) {
        notFound()
    }
    return (
        <main className={`main ${styles.content}`}>
            <StudentsList 
                group={lesson.group}
                title={lesson.title}
            />
            <QRCode/>
        </main>
    );
}

export default Dashboard;
