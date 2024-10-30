import styles from "./UserModal.module.css";
import { GetCurrentSubject } from "@/Hooks/GetCurrentSubject";
import LessonItem from "./LessonItem/LessonItem";
import CrossIcon from "@/Components/Common/Svg/Icons/CrossIcon/CrossIcon";
import React from "react";

interface userModalInterface {
	isOpen: boolean;
	onClose: () => void;
	subject_name: string;
}

const UserModal = ({ isOpen, onClose, subject_name }: userModalInterface) => {
	const GetSubject = GetCurrentSubject(subject_name);

	const handleContentClick = (
		e: React.MouseEvent<HTMLDivElement, MouseEvent>
	) => {
		e.stopPropagation();
	};

	return (
		<dialog
			className={isOpen ? styles.userModalContainer : styles.hideModal}
			onClick={onClose}>
			<div className={styles.userModalWrapper} onClick={handleContentClick}>
				<div className={styles.userModalContent}>
					<button onClick={onClose} className={styles.closeModalButton}>
						<CrossIcon width="4em" height="4em" />
					</button>
					<div className={styles.infoBlock}>
						<p className={styles.infoHeaderText}>{subject_name}</p>
					</div>
					<div
						className={
							GetSubject && GetSubject.lessons.length > 0
								? styles.lessonsTableContainer
								: styles.noLessonsTableContainer
						}>
						{GetSubject && GetSubject.lessons.length > 0 ? (
							GetSubject?.lessons.map(lesson => (
								<LessonItem
									key={lesson.id}
									date={lesson.date}
									status={lesson.status}
									lesson_type={lesson.lesson_type}
								/>
							))
						) : (
							<div className={styles.noLessonsContent}>
								<h1 className={styles.infoHeaderText}>Занятий ещё не было!</h1>
							</div>
						)}
					</div>
				</div>
			</div>
		</dialog>
	);
};

export default UserModal;
