import React from 'react';
import styles from "./TeacherInfo.module.css"
import { RootState } from '@/store/store';
import { useSelector } from 'react-redux';

interface TeacherInfoProps {
    title: string,
    group: string
}

const TeacherInfo: React.FC<TeacherInfoProps> = ({
    title,
    group
}) => {
    const user = useSelector((state: RootState) => state.user.user);
    return (
        <div className={styles.about__lesson}>
            <p className={styles.teacher__info}><b>Имя преподавателя:</b> {user?.fio}</p>
            <p className={styles.teacher__info}><b>Предмет:</b> {title}</p>
            <p className={styles.teacher__info}><b>Группа:</b> {group}</p>
        </div>
    );
}

export default TeacherInfo;
