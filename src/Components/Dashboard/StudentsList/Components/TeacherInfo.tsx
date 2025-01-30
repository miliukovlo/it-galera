import React from "react";
import styles from "./TeacherInfo.module.css";

interface TeacherInfoProps {
	title: string;
	group: string;
	teacher__info: string;
}

const TeacherInfo: React.FC<TeacherInfoProps> = ({
	title,
	group,
	teacher__info,
}) => {
	return (
		<div className={styles.about__lesson}>
			<p className={styles.teacher__info}>
				<b>Имя преподавателя:</b> {teacher__info}
			</p>
			<p className={styles.teacher__info}>
				<b>Предмет:</b> {title}
			</p>
			<p className={styles.teacher__info}>
				<b>Группа:</b> {group}
			</p>
		</div>
	);
};

export default TeacherInfo;
