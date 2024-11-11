import Link from "next/link";
import styles from "./AccordionSubjectItem.module.css";
import cyrillicToTranslit from "cyrillic-to-translit-js";

interface AccordionSubjectItemInterface {
	name: string;
	group_name: string;
}

const AccordionSubjectItem = ({
	name,
	group_name,
}: AccordionSubjectItemInterface) => {
	const cyrilicTranslit = cyrillicToTranslit();
	const translitName = cyrilicTranslit.transform(name);
	return (
		<Link
			href={
				name === "General"
					? `group/${cyrilicTranslit.transform(group_name)}`
					: `group/${
							cyrilicTranslit.transform(group_name) + `?lesson=${translitName}`
					  }`
			}>
			<li className={styles.subjectItemContainer}>
				<p className={styles.groupNameText}>
					{name === "General" ? "Общая  посещаемость" : name}
				</p>
			</li>
		</Link>
	);
};

export default AccordionSubjectItem;
