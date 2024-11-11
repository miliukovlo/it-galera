import React from 'react';
import styles from "./Dashboard.module.css"
import StudentsList from '@/Components/Dashboard/StudentsList/StudentsList';
import QRCode from '@/Components/Dashboard/QRCode/QRCode';
import { notFound } from 'next/navigation';
import { schedule } from '@/data/coupleData';

interface DashboardProps {
    id: string
}

const Dashboard : React.FC<DashboardProps> = ({
    id
}) => {
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
