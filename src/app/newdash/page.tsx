import React from "react";
import style from "./NewDashPage.module.css";
import Link from "next/link";
import Modal from "@/Components/Common/Modal/Modal";

const NewDashPage = async ({
	searchParams,
}: {
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
	const { show } = await searchParams;

	return (
		<main className={style.dashboard}>
			<section className={style.dashboard_stats}>
				<h1>В будущем здесь будет личная статистика</h1>
			</section>
			<section className={style.dashboard_templates}>
				<h2>Создать пару</h2>
				<Link
					href={{ query: { show: "true" } }}
					className={style.dashboard_templates__button}>
					+
				</Link>
			</section>
			<Modal open={show === "true"} config={{ backdrop: true }}>
				Modal
			</Modal>
		</main>
	);
};

export default NewDashPage;
