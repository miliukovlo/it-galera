import styles from "./AccordionBody.module.css";
import AccordionSubjectItem from "../AccordionSubjectItem/AccordionSubjectItem";

interface subjectsInterface {
	id: string;
	name: string;
}

interface AccordionBodyInterface {
	subjects: subjectsInterface[];
	isOpen: boolean;
	group_name: string;
}

const AccordionBody = ({
	subjects,
	isOpen,
	group_name,
}: AccordionBodyInterface) => {
	return (
		<div
			className={styles.accordion_collapse}
			style={
				isOpen ? { height: 50 * subjects.length + 60 } : { height: "0px" }
			}>
			{/* (40px - one item + 10px - gap) and 60px - General item + padding in the end */}
			<ul className={styles.subjects_list}>
				{subjects.map(subject => (
					<AccordionSubjectItem
						key={subject.id}
						name={subject.name}
						group_name={group_name}
					/>
				))}
				<AccordionSubjectItem name="General" group_name={group_name} />
			</ul>
		</div>
	);
};

export default AccordionBody;
