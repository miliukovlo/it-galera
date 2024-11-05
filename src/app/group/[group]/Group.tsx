'use client'

import React, { useEffect, useState } from 'react';
import styles from './Group.module.css'
import UserElement from '@/Components/Users/UserElement/UserElement';
import { notFound } from 'next/navigation';
import { GetStudentsOfGroup } from '@/Hooks/GetStudentsOfGroup';
import { generatedStudentsInterface } from '@/Interface/generatedStudentsInterface';
import ProgressBlock from '@/Components/Common/ProgressBlock/ProgressBlock';
import cyrillicToTranslit from 'cyrillic-to-translit-js';

interface groupProps {
    group: string
}

const Group : React.FC<groupProps> = ({
    group
}) => {
    const [students, setStudents] = useState<generatedStudentsInterface[]>([]);
    const cyrilicTranslit = cyrillicToTranslit();
    const [groupName, setGroupName] = useState<string>('')

    useEffect(() => {
        const fetchStudents = () => {
            if (Array.isArray(group)) {
                const studentData = GetStudentsOfGroup(group.join(''));
                const group__name = cyrilicTranslit.reverse(group.join(''))
                setGroupName(group__name)
                if (!studentData || studentData.length === 0 || studentData === undefined) {
                    notFound()
                }
                setStudents(studentData);
            } else {
                const studentData = GetStudentsOfGroup(group);
                const group__name = cyrilicTranslit.reverse(group)
                setGroupName(group__name)
                if (!studentData || studentData.length === 0 || studentData === undefined) {
                    notFound()
                }
                setStudents(studentData);
            }
        };

        fetchStudents();
    }, [group]);

    console.log(groupName)
    return (
        <div className={styles.wrapper}>
        <h1 className="header__text">Группа: {groupName}</h1>
        <ProgressBlock/>
        <ul className={styles.group__list}>
            {students.map(student => {
                return (
                    <UserElement
                        key={student._id}
                        name={student.name}
                        role={student.role}
                        id={student._id}
                        group={student.group}
                        forWho='teacher'
                        page="group"
                    />
                )
            })}
        </ul>
    </div>
    );
}

export default Group;
