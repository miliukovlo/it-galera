"use client"

import { studentInterface } from '@/Interface/StudentInterface';
import React, { useState } from 'react';
import styles from "./StudentsList.module.css"
import Student from '../Student/Student';
import TeacherInfo from './Components/TeacherInfo';

interface studentListInterface {
    getStudents: studentInterface[],
    group: string,
    title: string
}

const StudentsList: React.FC<studentListInterface> = ({
    getStudents,
    group,
    title
}: studentListInterface) => {

    const [students, setStudents] = useState<studentInterface[]>(getStudents);

    const handleAddStudent = (id: number): void => {
        setStudents(prevStudents =>
            prevStudents.map(student =>
                student.id === id ? { ...student, isHere: !student.isHere } : student
            )
        );
    };

    return (
        <article className={styles.information__block}>
            <TeacherInfo
                group={group}
                title={title}
            />
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
