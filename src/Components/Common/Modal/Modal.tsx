"use client";

import { FC, ReactNode, useEffect } from "react";
import styles from "./Modal.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ModalConfig {
	backdrop?: boolean;
	width?: string;
	height?: string;
}

interface ModalProps {
	open: boolean;
	config?: ModalConfig;
	children: ReactNode;
}

const Modal: FC<ModalProps> = ({ open, children, config }) => {
	const path = usePathname();

	useEffect(() => {
		if (open) {
			document.documentElement.style.overflow = "hidden"; // Отключаем скролл
			document.body.style.paddingRight = `${window.innerWidth - document.documentElement.clientWidth}px`; // Фикс для смещения из-за исчезновения скролла
		} else {
			document.documentElement.style.overflow = "";
			document.body.style.paddingRight = "";
		}

		return () => {
			document.documentElement.style.overflow = "";
			document.body.style.paddingRight = "";
		};
	}, [open]);

	return (
		<>
			{open && (
				<>
					{config?.backdrop && (
						<Link
							href={{
								pathname: path,
								query: {},
							}}
							className={styles.modal_shadow}
						/>
					)}
					<dialog className={styles.modal}>
						<div className={styles.modal_container}>{children}</div>
					</dialog>
				</>
			)}
		</>
	);
};

export default Modal;
