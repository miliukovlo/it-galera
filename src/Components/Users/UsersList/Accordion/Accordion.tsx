import { MutableRefObject, useRef } from "react";

import styles from "./Accordion.module.css";
import SubjectItem from "../SubjectItem/SubjectItem";

interface AccordionInterface {
	group_name: string;
	onClick: () => void;
	isOpen: boolean;
}

const subjects = [
	{ id: "1", name: "Математика" },
	{ id: "2", name: "Мат. Анализ" },
	{ id: "3", name: "Дискрет. Мат." },
	{ id: "4", name: "Начертательная геом." },
	{ id: "5", name: "Что то еще" },
];

const Accordion = ({ group_name, onClick, isOpen }: AccordionInterface) => {
	const itemRef = useRef() as MutableRefObject<HTMLUListElement>;

	return (
		<li className={styles.accordion_container} onClick={onClick}>
			<div className={styles.accordion_header}>
				<p>{group_name}</p>
			</div>
			<div
				className={styles.accordion_collapse}
				style={
					isOpen ? { height: itemRef.current.scrollHeight } : { height: "0px" }
				}>
				<ul className={styles.subjects_list} ref={itemRef}>
					{subjects.map(subject => (
						<SubjectItem key={subject.id} name={subject.name} />
					))}
				</ul>
			</div>
		</li>
	);
};

export default Accordion;
