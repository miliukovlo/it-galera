import styles from "./SubjectItem.module.css";

interface SubjectItemInterface {
	name: string;
}

const SubjectItem = ({ name }: SubjectItemInterface) => {
	return <li className={styles.subjectItemContainer}>{name}</li>;
};

export default SubjectItem;
