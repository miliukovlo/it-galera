"use client";

import { GetCurrentUser } from "@/Hooks/GetCurrentUser";
import { notFound } from "next/navigation";
import React, { useCallback, useState } from "react";
import styles from "./CurrentUser.module.css";
import Name from "@/Components/Users/[id]/Name/Name";
import ProgressBlock from "@/Components/Common/ProgressBlock/ProgressBlock";
import LessonsList from "@/Components/Users/[id]/LessonsList/LessonsList";
import Filter from "@/Components/Common/Filter/Filter";
import { filterSubjectInterface } from "@/Interface/filterInterface";
import { selectSubjectData } from "@/data/selectData";
import { lessonsInterface } from "@/Interface/generatedStudentsInterface";

interface CurrentUserProps {
	id: string
}

const CurrentUser: React.FC<CurrentUserProps> = ({
	id
}) => {
	const userId = Array.isArray(id) ? id[0] : id;
	if (!userId) {
		notFound();
	}
	const GetUser = GetCurrentUser(userId);
	if (!GetUser) {
		notFound();
	}
	const [filter, setFilter] = useState<filterSubjectInterface>({
		name: "",
		attendance: 0
	});

	const [filteredList, setFilteredList] = useState<lessonsInterface[]>(GetUser.lessons!,)

	const handleResetFilter = () => {
		setFilter(() => ({
			name: "",
			attendance: 0
		}));
		setFilteredList(GetUser.lessons!)
	};

	const handleFindSubject = () => {
		if (GetUser.lessons) {
			const filteredSubjects: lessonsInterface[] = GetUser.lessons.filter(
				subject =>
					subject.name.toLowerCase().includes(filter.name.toLowerCase()) &&
					subject.attendance >= filter.attendance
				);
			setFilteredList(filteredSubjects);
		}
	}
	

	const handleFilterChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const { name, value } = e.target;
		setFilter(prevFilter => ({
			...prevFilter,
			[name]: value,
		}));
    },[]);

	return (
		<article className={styles.content}>
			<Name
				name={GetUser.name}
				group={GetUser.group}
				role={GetUser.role}
			/>
			<Filter
				filter={filter}
				onFilterChange={handleFilterChange}
				onResetFilter={handleResetFilter}
				selectData={selectSubjectData}
				handleFind={handleFindSubject}
				component="currentUser"
			/>
			<ProgressBlock/>
			<LessonsList
				lessons={filteredList}
			/>
		</article>
	);
};

export default CurrentUser;
