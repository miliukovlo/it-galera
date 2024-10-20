"use client"

import { initialStudents } from '@/data/students';
import { studentInterface } from '@/Interface/StudentInterface';
import React, { useEffect, useState } from 'react';
import styles from "./StudentsList.module.css"
import Student from '../Student/Student';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

interface studentListInterface {
    group: string,
    title: string
}

const StudentsList: React.FC<studentListInterface> = ({
    group,
    title
}: studentListInterface) => {

    const [students, setStudents] = useState<studentInterface[]>([]);
    useEffect(() => {
        const getStudents = initialStudents.filter(student => student.group === group);
        setStudents(getStudents)
    }, [])
    
    const user = useSelector((state: RootState) => state.user.user);

    const handleAddStudent = (id: number): void => {
        setStudents(prevStudents =>
            prevStudents.map(student =>
                student.id === id ? { ...student, isHere: !student.isHere } : student
            )
        );
    };

    return (
        <article className={styles.information__block}>
            <div className={styles.about__lesson}>
                <p className={styles.teacher__name}><b>Имя преподавателя:</b> {user?.fio}</p>
                <p className={styles.teacher__name}><b>Предмет:</b> {title}</p>
                <p className={styles.teacher__name}><b>Группа:</b> {group}</p>
            </div>
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
