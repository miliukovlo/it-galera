import styles from "./Accordion.module.css";
import AccordionBody from "./AccordionComponents/AccordionBody/AccordionBody";
import AccrodionHeader from "./AccordionComponents/AccordionHeader/AccrodionHeader";

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
	return (
		<li className={styles.accordion_container}>
			<AccrodionHeader group_name={group_name} onClick={onClick} />
			<AccordionBody subjects={subjects} isOpen={isOpen} />
		</li>
	);
};

export default Accordion;
