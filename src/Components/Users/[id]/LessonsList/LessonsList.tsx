import React, { useEffect, useState } from "react";
import styles from "./LessonsList.module.css";
import dynamic from "next/dynamic";
import { lessonsInterface } from "@/Interface/generatedStudentsInterface";
import Circle from "@/Components/Common/Circle/Circle";

interface LessonsListProps {
	lessons?: lessonsInterface[];
}

const DynamicUserModal = dynamic(() => import("../../UserModal/UserModal"), {
	ssr: true,
	// loading: () => <p>I am loading</p>,
});

const LessonsList: React.FC<LessonsListProps> = ({
	lessons,
}: LessonsListProps) => {
	interface modalInterface {
		item: string;
		isOpen: boolean;
	}

	const [modal, setModal] = useState<modalInterface>({
		item: "",
		isOpen: false,
	});

	useEffect(() => {
		if (modal.isOpen) {
			document.body.style.height = "100vh";
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.height = "";
			document.body.style.overflow = "";
		}
	}, [modal.isOpen]);

	return (
		<div className={styles.lessons__block}>
			{lessons && lessons.length !== 0 ? (
				<>
				{modal.isOpen && (
					<DynamicUserModal
					subject_name={modal.item}
					isOpen={modal.isOpen}
					onClose={() => {
						setModal(prevModal => ({ ...prevModal, isOpen: false }));
					}}
					/>
				)}
				{lessons.map(lesson => (
					<div
					onClick={() => {
						setModal(() => ({ isOpen: true, item: lesson.name }));
					}}
					className={styles.lesson}
					key={lesson.name}
					>
					<p className={styles.information__text}>
						<b>Предмет:</b> {lesson.name}
					</p>
					<div className={styles.progress__block}>
						<p className={styles.progress__text}>
						<b>Посещение:</b>
						</p>
						<Circle progress={lesson.attendance} />
					</div>
				</div>
			))}
			</>
		) : (
			<h1 className='header__text'>Предметы отсутствуют</h1>
		)}
		</div>
	);	  
};

export default LessonsList;
