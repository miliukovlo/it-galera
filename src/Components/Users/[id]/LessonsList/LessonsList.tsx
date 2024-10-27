import React, { useState } from 'react';
import styles from './LessonsList.module.css'
import UserModal from '../../UserModal/UserModal';
import { lessonsInterface } from '@/Interface/generatedStudentsInterface';
import Circle from '@/Components/Common/Circle/Circle';

interface LessonsListProps {
    lessons?: lessonsInterface[]
}

const LessonsList : React.FC<LessonsListProps> = ({
    lessons
}: LessonsListProps) => {

    interface modalInterface {
		item: string;
		isOpen: boolean;
	}

	const [modal, setModal] = useState<modalInterface>({
		item: "",
		isOpen: false,
	});

    return (
        <div className={styles.lessons__block}>
				<UserModal
					subject_name={modal.item}
					isOpen={modal.isOpen}
					onClose={() => {
						setModal(prevModal => ({ ...prevModal, isOpen: false }));
					}}
				/>
				{lessons?.map(lesson => {
					return (
						<div
							onClick={() => {
								setModal(() => ({ isOpen: true, item: lesson.name }));
							}}
							className={styles.lesson}
							key={lesson.name}>
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
					);
				})}
			</div>
    );
}

export default LessonsList;
