import React from 'react';
import styles from './Student.module.css'
import Button from '@/Components/Common/Button/Button';

interface StudentProps {
    id: number,
    group: string,
    fio: string,
    isHere: boolean,
    handleAddStudent: (id: number) => void
}

const Student : React.FC<StudentProps> = ({
    id,
    group,
    fio,
    isHere,
    handleAddStudent
}: StudentProps) => {
    return (
        <li key={id} className={styles.list__element}>
            <div 
            className={
                id % 2 == 0 ? 
                `${styles.group__element} ${styles.group__even}` 
                : `${styles.group__element} ${styles.group__odd}`
            } 
            >
                <ul className={styles.stud__info_list}>
                    <li className={styles.stud__group}>Группа: {group}</li>
                    <li className={styles.stud__fio}>{fio}</li>
                    <div className={isHere ? `${styles.stud__status} ${styles.stud__here}` : `${styles.stud__status} ${styles.stud__not_here}`}>
                        {isHere ? "Здесь" : "Отсутствует"}
                    </div>
                    <Button
                        text={!isHere ? "Отметить" : "Отсутствует"}
                        onClick={() => {handleAddStudent(id)}}
                        size="m"
                    />
                </ul>
            </div>
        </li>
    );
}

export default Student;
