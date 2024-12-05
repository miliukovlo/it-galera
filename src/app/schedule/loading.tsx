import Loading from "@/Components/Common/Loading/Loading";
import styles from "@/Components/Schedule/Lesson.module.css";
import LessonLoading from "@/Components/Schedule/LessonLoading";

const loading = () => {
	const fakeLessons = new Array(6).fill(0);
	return (
		<div className={styles.schedule_loading__container}>
			<p className={styles.header__text}>
				<b>Расписание</b>
			</p>
			{fakeLessons.map((value, index) => (
				<LessonLoading key={index} />
			))}
			<Loading />
		</div>
	);
};

export default loading;
