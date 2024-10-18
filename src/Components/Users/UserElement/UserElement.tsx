import React from 'react';
import styles from './UserElement.module.css'
import Link from 'next/link';

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
            <Link href={`/users/${id}`} className={styles.link}>
                <div className={styles.user__block}>
                    <p className={`${styles.user__information}`}><b>ФИО:</b> {name}</p>
                    <p className={`${styles.user__information}`}><b>Группа:</b> {group}</p>
                    <p className={`${styles.user__information}`}><b>Роль:</b> {role === "student" ? "Студент" : "Преподаватель"}</p>
                </div>
            </Link>
        </li>
    );
}

export default UserElement;
