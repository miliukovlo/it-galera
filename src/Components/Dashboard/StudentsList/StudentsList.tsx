"use client"

import { initialStudents } from '@/data/students';
import { studentInterface } from '@/Interface/StudentInterface';
import React, { useState } from 'react';
import styles from "./StudentsList.module.css"
import Student from '../Student/Student';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

const StudentsList: React.FC = () => {

    const [students, setStudents] = useState<studentInterface[]>(initialStudents);
    const user = useSelector((state: RootState) => state.user.user);

    const handleAddStudent = (id: number): void => {
        setStudents(prevStudents =>
            prevStudents.map(student =>
                student.id === id ? { ...student, isHere: !student.isHere } : student
            )
        );
    };

    return (
        <article className={styles.information_block}>
            <p className={styles.teacher__name}><b>Имя преподавателя:</b> {user?.fio}</p>
            <ul className={styles.group__list}>
                {students.map((stud) => {
                    return (
                        <Student
                            id={stud.id}
                            fio={stud.fio}
                            group={stud.group}
                            isHere={stud.isHere}
                            handleAddStudent={handleAddStudent}
                            key={stud.id}
                        />
                    )
                })}
            </ul>
        </article>
    );
}

export default StudentsList;
