import { useRef, MutableRefObject } from "react";
import styles from "./AccordionBody.module.css";
import AccordionSubjectItem from "../AccordionSubjectItem/AccordionSubjectItem";

interface subjectsInterface {
	id: string;
	name: string;
}

interface AccordionBodyInterface {
	subjects: subjectsInterface[];
	isOpen: boolean;
}

const AccordionBody = ({ subjects, isOpen }: AccordionBodyInterface) => {
	const itemRef = useRef() as MutableRefObject<HTMLUListElement>;
	return (
		<div
			className={styles.accordion_collapse}
			style={
				isOpen ? { height: itemRef.current.scrollHeight } : { height: "0px" }
			}>
			<ul className={styles.subjects_list} ref={itemRef}>
				{subjects.map(subject => (
					<AccordionSubjectItem key={subject.id} name={subject.name} />
				))}
			</ul>
		</div>
	);
};

export default AccordionBody;
