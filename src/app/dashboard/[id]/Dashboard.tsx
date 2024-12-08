import React from "react";
import styles from "./Dashboard.module.css";
import StudentsList from "@/Components/Dashboard/StudentsList/StudentsList";
import QRCode from "@/Components/Dashboard/QRCode/QRCode";
import { notFound } from "next/navigation";
import { GetLesson } from "@/Hooks/client/GetLesson";
import { GetStudents } from "@/Hooks/client/GetStudents";
import { getFio } from "@/authLib";

interface DashboardProps {
	id: string;
}

const Dashboard: React.FC<DashboardProps> = async ({ id }) => {
	await new Promise(res => setTimeout(res, 4000));
	const lesson = await GetLesson(id);
	const fio = (await getFio()) as string;
	console.log(fio);
	if (!lesson || !id) {
		notFound();
	}
	const students = await GetStudents(lesson.group);
	return (
		<main className={`main ${styles.content}`}>
			<StudentsList
				getStudents={students}
				group={lesson.group}
				title={lesson.title}
				teacher__info={fio}
			/>
			<QRCode />
		</main>
	);
};

export default Dashboard;
