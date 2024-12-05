import React from "react";
import styles from "./schedule.module.css";
import { coupleInterface } from "@/Interface/coupleInterface";
import Lesson from "@/Components/Schedule/Lesson";
import { GetSchedule } from "@/Hooks/client/GetSchedule";

const Schedule = async () => {
	await new Promise(resolve => setTimeout(resolve, 4000));
	const schedule = await GetSchedule();
	return (
		<article className={styles.content}>
			<h1 className={styles.header__text}>Расписание</h1>
			{schedule.map((lesson: coupleInterface) => {
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
				);
			})}
		</article>
	);
};

export default Schedule;
