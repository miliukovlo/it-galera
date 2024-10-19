import React from 'react';
import styles from "./schedule.module.css";
import { schedule } from '@/data/coupleData';
import { coupleInterface } from '@/Interface/coupleInterface';
import Lesson from '@/Components/Schedule/Lesson';

const Schedule = () => {
    return (
        <article className={styles.content}>
            {
                schedule.map((lesson: coupleInterface) => {
                    return (
                        <Lesson
                            key={lesson.id}
                            id={lesson.id}
                            title={lesson.title}
                            type={lesson.type}
                            time={lesson.time}
                            cabinet={lesson.cabinet}
                            group={lesson.group}
                            number={lesson.number}
                        />
                    )
                })
            }
        </article>
    );
}

export default Schedule;
