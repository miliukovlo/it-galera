import React from "react";
import styles from "./Lesson.module.css";
import { coupleInterface } from "@/Interface/coupleInterface";
import Link from "next/link";

const Lesson: React.FC<coupleInterface> = ({
	id,
	title,
	number,
	time,
	group,
	type,
	cabinet,
}: coupleInterface) => {
	return (
		<Link href={`/dashboard/${id}`} className={styles.lesson__link} key={id}>
			<div className={styles.lesson_element}>
				<div className={styles.main__info}>
					<p className={styles.lesson__header}>
						<b className={styles.name__info}>Предмет:</b> {title}
					</p>

					<p className={`${styles.lesson__info} ${styles.main__info_text}`}>
						<b className={styles.name__info}>Пара:</b> {number}
					</p>
					<p className={`${styles.lesson__info} ${styles.main__info_text}`}>
						<b className={styles.name__info}>Время:</b> {time}
					</p>
				</div>
				<p className={styles.lesson__info}>
					<b className={styles.name__info}>Группа:</b> {group}
				</p>
				<p className={styles.lesson__info}>
					<b className={styles.name__info}>Тип:</b> {type}
				</p>
				<p className={styles.lesson__info}>
					<b className={styles.name__info}>Кабинет:</b> {cabinet}
				</p>
			</div>
		</Link>
	);
};

export default Lesson;
