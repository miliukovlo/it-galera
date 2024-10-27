import React from 'react';
import styles from './Name.module.css'

interface NameProps {
    name: string,
    group?: string,
    role: string
}

const Name : React.FC<NameProps> = ({
    name,
    group,
    role
}: NameProps) => {
    return (
            <div className={styles.information__block}>
				<p className={styles.information__text}>
					<b>ФИО:</b> {name}
				</p>
				<p className={styles.information__text}>
					<b>Группа:</b> {group}
				</p>
				<p className={styles.information__text}>
					<b>Роль:</b>
					{role === "student" ? " Студент" : " Преподаватель"}
				</p>
			</div>
    );
}

export default Name;
