import styles from "./AccordionHeader.module.css";
import DownArrowIcon from "@/Components/Common/Svg/Icons/DownArrowIcon/DownArrowIcon";

interface AccordionHeaderInterface {
	group_name: string;
	isOpen: boolean;
	onClick: () => void;
}

const AccrodionHeader = ({
	group_name,
	isOpen,
	onClick,
}: AccordionHeaderInterface) => {
	return (
		<div className={styles.headerContainer}>
			<p className={styles.groupNameText}>{group_name}</p>
			<div className={styles.openSubjectsBlock} onClick={onClick}>
				<p>Предметы</p>
				<button className={styles.openSubjectsBlockButton}>
					<DownArrowIcon
						height={"3em"}
						width={"3em"}
						className={isOpen ? styles.iconActive : ""}
					/>
				</button>
			</div>
		</div>
	);
};

export default AccrodionHeader;
