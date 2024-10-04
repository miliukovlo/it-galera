"use client"

import React, { useState } from 'react';
import styles from "./Dashboard.module.css"
import Button from '@/Components/Common/Button/Button';
import Image from 'next/image';
import QrCode from "../../../public/assets/qr.png"

interface studentInterface {
    id: number,
    group: string,
    fio: string,
    isHere: boolean,
}

const initialStudents: studentInterface[] = [
    { id: 1, group: "A1", fio: "Иванов Иван Иванович", isHere: false },
    { id: 2, group: "A1", fio: "Петров Петр Петрович", isHere: false },
    { id: 3, group: "A1", fio: "Сидоров Сидор Сидорович", isHere: false },
    { id: 4, group: "A2", fio: "Кузнецов Николай Николаевич", isHere: false },
    { id: 5, group: "A2", fio: "Смирнов Алексей Александрович", isHere: false },
    { id: 6, group: "A2", fio: "Попов Сергей Сергеевич", isHere: false },
    { id: 7, group: "B1", fio: "Васильев Андрей Андреевич", isHere: false },
    { id: 8, group: "B1", fio: "Морозов Дмитрий Дмитриевич", isHere: false },
    { id: 9, group: "B1", fio: "Федоров Артем Артемович", isHere: false },
    { id: 10, group: "B2", fio: "Александров Игорь Игоревич", isHere: false },
    { id: 11, group: "B2", fio: "Лебедев Михаил Михайлович", isHere: false },
    { id: 12, group: "B2", fio: "Ковалев Виктор Викторович", isHere: false },
    { id: 13, group: "C1", fio: "Соловьев Евгений Евгеньевич", isHere: false },
    { id: 14, group: "C1", fio: "Баранов Денис Денисович", isHere: false },
    { id: 15, group: "C1", fio: "Григорьев Степан Степанович", isHere: false },
    { id: 16, group: "C2", fio: "Зайцев Владислав Владиславович", isHere: false },
    { id: 17, group: "C2", fio: "Тихонов Роман Романович", isHere: false },
    { id: 18, group: "C2", fio: "Климов Тимур Тимурович", isHere: false },
    { id: 19, group: "D1", fio: "Сергеев Николай Николаевич", isHere: false },
    { id: 20, group: "D1", fio: "Павлов Сергей Сергеевич", isHere: false },
    { id: 21, group: "D1", fio: "Семенов Алексей Алексеевич", isHere: false }
];



const Dashboard = () => {

    const [students, setStudents] = useState<studentInterface[]>(initialStudents);

    const handleAddStudent = (id: number): void => {
        setStudents(prevStudents =>
            prevStudents.map(student =>
                student.id === id ? { ...student, isHere: !student.isHere } : student
            )
        );
    };

    return (
        <main className={`main ${styles.content}`}>
            <div className={styles.information_block}>
                <p className={styles.teacher__name}><b>Имя преподавателя:</b> Фамилия Имя Отчество</p>
                <div className={styles.group__list}>
                    {students.map((stud) => {
                        return (
                            <div 
                            className={
                                stud.id % 2 == 0 ? 
                                `${styles.group__element} ${styles.group__even}` 
                                : `${styles.group__element} ${styles.group__odd}`
                            } 
                            key={stud.id}>
                                <ul className={styles.stud__info_list}>
                                    <li className={styles.stud__group}>Группа: {stud.group}</li>
                                    <li className={styles.stud__fio}>{stud.fio}</li>
                                    <div className={stud.isHere ? `${styles.stud__status} ${styles.stud__here}` : `${styles.stud__status} ${styles.stud__not_here}`}>
                                        {stud.isHere ? "Здесь" : "Отсутствует"}
                                    </div>
                                    <Button
                                        text={!stud.isHere ? "Отметить" : "Отсутствует"}
                                        onClick={() => {handleAddStudent(stud.id)}}
                                        size="m"
                                    />
                                </ul>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className={styles.qr_block}>
            <p className={styles.teacher__name}><b>Имя преподавателя:</b> Фамилия Имя Отчество</p>
                <Image
                    src={QrCode}
                    alt='QR-Code'
                    width={200}
                    height={200}
                />
            </div>
        </main>
    );
}

export default Dashboard;
