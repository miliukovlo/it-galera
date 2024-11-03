'use client'

import React, { useEffect, useState } from 'react';
import styles from './Group.module.css'
import UserElement from '@/Components/Users/UserElement/UserElement';
import { notFound, useParams } from 'next/navigation';
import { GetStudentsOfGroup } from '@/Hooks/GetStudentsOfGroup';
import { generatedStudentsInterface } from '@/Interface/generatedStudentsInterface';

const Group = () => {
    const { group } = useParams();
    const [students, setStudents] = useState<generatedStudentsInterface[]>([]);


    useEffect(() => {
        const fetchStudents = () => {
            if (Array.isArray(group)) {
                const studentData = GetStudentsOfGroup(group.join(''));
                if (!studentData || studentData.length === 0 || studentData === undefined) {
                    notFound()
                }
                setStudents(studentData);
            } else {
                const studentData = GetStudentsOfGroup(group);
                if (!studentData || studentData.length === 0 || studentData === undefined) {
                    notFound()
                }
                setStudents(studentData);
            }
        };

        fetchStudents();
    }, [group]);
    return (
        <div className={styles.wrapper}>
        <h1 className={styles.header__text}>Общая успеваемость: 86%</h1>
        <ul className={styles.group__list}>
            {students.map(student => {
                return (
                    <UserElement
                        key={student._id}
                        name={student.name}
                        role={student.role}
                        id={student._id}
                        group={student.group}
                    />
                )
            })}
        </ul>
    </div>
    );
}

export default Group;
