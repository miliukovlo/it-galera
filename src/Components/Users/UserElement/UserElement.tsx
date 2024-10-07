import React from 'react';
import styles from './UserElement.module.css'

interface UserElementProps {
    id: string,
    name: string,
    group?: string,
    role: string
}

const UserElement: React.FC<UserElementProps> = ({
    id,
    name,
    group,
    role
}: UserElementProps) => {
    return (
        <li className={styles.list__element} key={id}>
        <div className={styles.user__block}>
            <p className={`${styles.user__information}`}><b>ФИО:</b> {name}</p>
            <p className={`${styles.user__information}`}><b>Группа:</b> {group}</p>
            <p className={`${styles.user__information}`}><b>Роль:</b> {role === "student" ? "Студент" : "Преподаватель"}</p>
        </div>
    </li>
    );
}

export default UserElement;
