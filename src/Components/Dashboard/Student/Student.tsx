import React, { useEffect, useRef, useState } from 'react';
import styles from './Student.module.css'
import Button from '@/Components/Common/Button/Button';

interface StudentProps {
    id: number,
    group: string,
    fio: string,
    isHere: boolean,
    handleAddStudent: (id: number) => void,
}

const Student : React.FC<StudentProps> = ({
    id,
    group,
    fio,
    isHere,
    handleAddStudent,
}: StudentProps) => {

    const [disabled, setDisabled] = useState<boolean>(false);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const changeStatusStudent = (id: number): void => {
        handleAddStudent(id)
        setDisabled(true);
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
        timerRef.current = setTimeout(() => {
            setDisabled(false);
        }, 3000);
    };
    useEffect(() => {
        return () => {
            if (timerRef.current) {
                clearTimeout(timerRef.current);
            }
        };
    }, []);
    return (
        <li key={id} className={styles.list__element}>
            <div 
            className={styles.group__element} 
            >
                <ul className={styles.stud__info_list}>
                    <li className={styles.stud__group}>Группа: {group}</li>
                    <li className={styles.stud__fio}>{fio}</li>
                    <div className={isHere ? `${styles.stud__status} ${styles.stud__here}` : `${styles.stud__status} ${styles.stud__not_here}`}>
                        {isHere ? "Присутствует" : "Отсутствует"}
                    </div>
                    <Button
                        text={!isHere ? "Отметить" : "Отсутствует"}
                        onClick={() => {changeStatusStudent(id)}}
                        size="s"
                        disabled={disabled}
                    />
                </ul>
            </div>
        </li>
    );
}

export default Student;
