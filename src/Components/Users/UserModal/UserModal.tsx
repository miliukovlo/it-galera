import styles from "./UserModal.module.css";
import { GetCurrentSubject } from "@/Hooks/GetCurrentSubject";
import LessonItem from "./LessonItem/LessonItem";
import CrossIcon from "@/Components/Common/Svg/Icons/CrossIcon/CrossIcon";

interface userModalInterface {
	isOpen: boolean;
	onClose: () => void;
	subject_name: string;
}

const UserModal = ({ isOpen, onClose, subject_name }: userModalInterface) => {
	const GetSubject = GetCurrentSubject(subject_name);

	return (
		<div className={isOpen ? styles.userModalContainer : styles.hideModal}>
			<div className={styles.userModalWrapper}>
				<div className={styles.useModalContent}>
					<button onClick={onClose} className={styles.closeModalButton}>
						<CrossIcon width="5em" height="5em" />
					</button>
					<div className={styles.infoBlock}>{subject_name}</div>
					<div className={styles.lessonsTableContainer}>
						{GetSubject?.lessons.map(lesson => (
							<LessonItem 
								key={lesson.id}
								date={lesson.date}
								status={lesson.status}
								lesson_type={lesson.lesson_type}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default UserModal;
