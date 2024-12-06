import "react-loading-skeleton/dist/skeleton.css";
import styles from "./LessonLoading.module.css";
import Placeholder from "rsuite/Placeholder";
import "rsuite/Placeholder/styles/index.css";
import PlaceholderGrid from "rsuite/esm/Placeholder/PlaceholderGrid";

// import { Placeholder } from "rsuite";

const LessonLoading = () => {
	return (
		<div className={styles.schedule_loading__element}>
			<div className={styles.element__left_container}>
				<Placeholder active rows={3} rowHeight={20} rowSpacing={5} />
			</div>
			<div className={styles.element__right_container}>
				<PlaceholderGrid
					rowHeight={20}
					className={styles.element__right}
					rows={1}
					columns={3}
					active
				/>
			</div>
		</div>
	);
};

export default LessonLoading;
