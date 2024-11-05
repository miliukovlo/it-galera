import CrossIcon from "@/Components/Common/Svg/Icons/CrossIcon/CrossIcon";
import styles from "./AccordionHeader.module.css";

interface AccordionHeaderInterface {
	group_name: string;
	onClick: () => void;
}

const AccrodionHeader = ({ group_name, onClick }: AccordionHeaderInterface) => {
	return (
		<div className={styles.headerContainer}>
			<p>{group_name}</p>
			<div className={styles.openSubjectsBlock} onClick={onClick}>
				<p>Предметы</p>
				<button className={styles.openSubjectsBlockButton}>
					<CrossIcon />
				</button>
			</div>
		</div>
	);
};

export default AccrodionHeader;
