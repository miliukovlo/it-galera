import Loading from "@/Components/Common/Loading/Loading";
import styles from "./Dashboard.module.css";
import FakeStudent from "@/Components/Dashboard/Student/FakeStudent";

const loading = () => {
	return (
		<>
			<Loading></Loading>
			<article className={styles.information__block}>
				<main className={`main ${styles.content}`}>
					<div className={styles.fakeGroup__list}>
						<FakeStudent />
					</div>
				</main>
			</article>
		</>
	);
};

export default loading;
