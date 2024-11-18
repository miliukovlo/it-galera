import React from 'react';
import styles from "./Dashboard.module.css"
import StudentsList from '@/Components/Dashboard/StudentsList/StudentsList';
import QRCode from '@/Components/Dashboard/QRCode/QRCode';
import { notFound } from 'next/navigation';
import { GetLesson } from '@/Hooks/client/GetLesson';
import { GetStudents } from '@/Hooks/client/GetStudents';

interface DashboardProps {
    id: string
}

const Dashboard : React.FC<DashboardProps> = async ({
    id
}) => {
    const lesson = await GetLesson(id)
    if (!lesson || !id) {
        notFound()
    }
    const students = await GetStudents(lesson.group)
    return (
        <main className={`main ${styles.content}`}>
            <StudentsList
                getStudents={students}
                group={lesson.group}
                title={lesson.title}
            />
            <QRCode/>
        </main>
    );
}

export default Dashboard;
