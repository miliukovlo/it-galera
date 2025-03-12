import Link from "next/link";
import styles from "./DashboardNewClassModal.module.css";
import Input from "../Common/Input/Input";

const DashboardNewClassModal = () => {
	return (
		<div className={styles.modal}>
			<div className={styles.modal_container}>
				<form className={styles.modal_form}>
					<Input size="full" type="text" label="label" />
					<Input size="full" type="text" label="label" />
					<Input size="full" type="text" label="label" />
					<Input size="full" type="text" label="label" />
					<Input size="full" type="text" label="label" />
				</form>
				<div className={styles.modal_button}>
					<Link href="/">{"-->"}</Link>
				</div>
			</div>
		</div>
	);
};

export default DashboardNewClassModal;
