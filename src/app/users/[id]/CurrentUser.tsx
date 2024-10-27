"use client";

import { GetCurrentUser } from "@/Hooks/GetCurrentUser";
import { notFound, useParams } from "next/navigation";
import React from "react";
import styles from "./CurrentUser.module.css";
import Name from "@/Components/Users/[id]/Name/Name";
import ProgressBlock from "@/Components/Users/[id]/ProgressBlock/ProgressBlock";
import LessonsList from "@/Components/Users/[id]/LessonsList/LessonsList";

const CurrentUser: React.FC = () => {
	const { id } = useParams();
	const userId = Array.isArray(id) ? id[0] : id;
	if (!userId) {
		notFound();
	}
	const GetUser = GetCurrentUser(userId);
	if (!GetUser) {
		notFound();
	}

	return (
		<article className={styles.content}>
			<Name
				name={GetUser.name}
				group={GetUser.group}
				role={GetUser.role}
			/>
			<ProgressBlock/>
			<LessonsList
				lessons={GetUser.lessons}
			/>
		</article>
	);
};

export default CurrentUser;
