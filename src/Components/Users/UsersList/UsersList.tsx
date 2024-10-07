"use client"

import Input from '@/Components/Common/Input/Input';
import React, { useEffect, useState } from 'react';
import styles from './UsersList.module.css';
import { generatedStudentsInterface } from '@/Interface/generatedStudentsInterface';
import { generatedStudents } from '@/data/GeneratedStudents';
import UserElement from '../UserElement/UserElement';

const users : generatedStudentsInterface[] = generatedStudents

const UsersList = () => {
    const [filterValue, setFilterValue] = useState<string>("")
    const [filteredList, setFilteredList] = useState<generatedStudentsInterface[]>([])

    const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilterValue(e.target.value)
    }

    useEffect(() => {
        setFilteredList(users.filter(user => user.name.includes(filterValue)))
    }, [filterValue])

    return (
        <article className={styles.content}>
            <Input
                type='text'
                size='l'
                value={filterValue}
                onChange={handleFilter}
                placeholder='Поиск...'
            />
            <ul className={styles.users__list}>
                {filteredList.map((user) => {
                    return (
                        <UserElement
                            id={user._id}
                            name={user.name}
                            group={user.group}
                            role={user.role}
                            key={user._id}
                        />
                    )
                })}
            </ul>
        </article>
    );
}

export default UsersList;
