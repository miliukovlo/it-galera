import React from 'react';
import styles from "./schedule.module.css";
import { schedule } from '@/data/coupleData';
import { coupleInterface } from '@/Interface/coupleInterface';

const Schedule = () => {
    return (
        <div className={styles.content}>
            {
                schedule.map((lesson: coupleInterface) => {
                    return (
                        <div className={styles.lesson_element} key={lesson.id}>
                            <h3>{lesson.title}</h3>
                            <p>{lesson.number}</p>
                            <p>{lesson.time}</p>
                            <p>{lesson.group}</p>
                            <p>{lesson.type}</p>
                            <p>{lesson.cabinet}</p>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Schedule;
