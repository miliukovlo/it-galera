'use client'

import React, { useState } from 'react';
import styles from "./Create.module.css"
import { generatedStudents } from '@/data/GeneratedStudents';
import Button from '@/Components/Common/Button/Button';
import Input from '@/Components/Common/Input/Input';
import { generatedStudentsInterface } from '@/Interface/generatedStudentsInterface';

const Create = () => {
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [fio, setFio] = useState<string>('');
    const [teachers, setTeachers] = useState<generatedStudentsInterface[]>(generatedStudents.filter(user => user.role === 'teacher'));

    const handleSetLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLogin(e.target.value);
    }
    const handleSetPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    }
    const handleSetFio = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFio(e.target.value);
    }

    const handleDelete = (id: string) => {
        setTeachers(prevTeachers => prevTeachers.filter(teacher => teacher._id !== id));
    }

    const handleAddTeacher = () => {
        if (login && password && fio) {
            const newTeacher = {
                _id: Date.now().toString(), // Генерируем уникальный ID
                name: fio,
                role: 'teacher',
                login: login,
                password: password,
            };
            setTeachers(prevTeachers => [...prevTeachers, newTeacher]);
            setLogin('');
            setPassword('');
            setFio('');
        } else {
            alert("Пожалуйста, заполните все поля");
        }
    }

    return (
        <article className={styles.content}>
            <h1 className={styles.header__text}>Создать пользователя</h1>
            <Input
                placeholder='Введите ФИО'
                value={fio}
                onChange={handleSetFio}
                type='text'
                size='m'
            />
            <Input
                placeholder='Введите логин'
                value={login}
                onChange={handleSetLogin}
                type='text'
                size='m'
            />
            <Input
                placeholder='Введите пароль'
                value={password}
                onChange={handleSetPassword}
                type='text'
                size='m'
            />
            <Button
                text="Добавить преподавателя"
                size="m"
                onClick={handleAddTeacher}
            />
            <h1 className={styles.header__text}>Список преподавателей</h1>
            <ul className={styles.list}>
                {teachers.map(teacher => (
                    <li className={styles.list__element} key={teacher._id}>
                        <div className={styles.teacher__block}>
                            <p>ФИО: {teacher.name}</p>
                            <Button
                                text="Удалить"
                                size="s"
                                onClick={() => {handleDelete(teacher._id)}}
                            />
                        </div>
                    </li> 
                ))}
            </ul>
        </article>
    );
}

export default Create;
