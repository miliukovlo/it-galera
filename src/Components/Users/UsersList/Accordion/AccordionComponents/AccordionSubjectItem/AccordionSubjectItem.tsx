import styles from "./AccordionSubjectItem.module.css";

interface AccordionSubjectItemInterface {
	name: string;
}

const AccordionSubjectItem = ({ name }: AccordionSubjectItemInterface) => {
	return <li className={styles.subjectItemContainer}>{name}</li>;
};

export default AccordionSubjectItem;
