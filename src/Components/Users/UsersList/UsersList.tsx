"use client"

import React, { useState, useEffect, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import styles from "./UsersList.module.css";
import Filter from "./../../Common/Filter/Filter";
import UserElement from "./../UserElement/UserElement";
import { generatedStudentsInterface } from "@/Interface/generatedStudentsInterface";
import { filterInterface } from "@/Interface/filterInterface";
import { selectData, selectTeacherData } from "@/data/selectData";
import { setFilterChange } from "@/Hooks/setFilterChange";
import Accordion from "./Accordion/Accordion";
import { GetUsersList } from "@/Hooks/server/GetUsersList";

interface UsersListProps {
	role: string,
	group: Array<string>
}

const UsersList: React.FC<UsersListProps> = ({
	role,
	group
}) => {
	const [limit, setLimit] = useState<number>(10);
	const [filteredList, setFilteredList] = useState<generatedStudentsInterface[]>([]);
	const [openId, setId] = useState<number>(-1);
	const [filter, setFilter] = useState<filterInterface>({
		name: "",
		campus: "",
		group_name: "",
		role: "",
		department: "",
	});
	
	const fetchStudents = async (type: "limit" | "searchAll") => {
		try {
			const students: generatedStudentsInterface[] = await GetUsersList(type, limit);
			return students;
		} catch (error) {
			console.error("Error fetching students:", error);
			return [];
		}
	};
	
	
	const handleResetFilter = () => {
		setLimit(10);
		setFilter({
			name: "",
			campus: "",
			group_name: "",
			role: "",
			department: "",
		});
	};
	
	const handleFilterChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
			setFilterChange(e, setFilter);
		},
		[]
	);
	
	const handleFindStudent = async () => {
		setLimit(10)
		const students = await fetchStudents("searchAll");
		
		const filteredUsers = students.filter((student: generatedStudentsInterface) =>
			student.name.toLowerCase().includes(filter.name.toLowerCase()) &&
			student.role.includes(filter.role) &&
			student.group?.includes(filter.group_name)
		);
		
		setFilteredList(filteredUsers.slice(0, limit));
	};
	
	const [ref, inView] = useInView({ threshold: 1 });
	
	useEffect(() => {
		if (inView) {
			setLimit(prevLimit => prevLimit + 10);
		}
	}, [inView]);
	
	useEffect(() => {
		const applyFilters = async () => {
			const students = await fetchStudents("searchAll");
			
			const filteredUsers = students.filter(user =>
				user.name.toLowerCase().includes(filter.name.toLowerCase()) &&
				user.role.includes(filter.role) &&
				user.group?.includes(filter.group_name)
			);
			
			setFilteredList(filteredUsers.slice(0, limit));
		};
	
		applyFilters();
	}, [limit]); 
	

	return (
		<article className={styles.content}>
			<Filter
				filter={filter}
				onFilterChange={handleFilterChange}
				onResetFilter={handleResetFilter}
				selectData={(role == "teacher"
					? selectTeacherData
					: selectData
				).map(select =>
					select.id === 3 && role === "teacher"
						? {
								...select,
								options: select.options.filter(option =>
									group?.includes(option.text)
								),
						  	}
						: select
				)}
				handleFind={handleFindStudent}
				component="users"
			/>

			<ul className={styles.users__list}>
				{role && role === "admin" ? (
					filteredList.length === 0 ? (
						<h1 className={styles.usersNotFound}>Пользователи не найдены!</h1>
					) : (
						filteredList.map(user => (
							<UserElement
								id={user._id}
								name={user.name}
								group={user.group}
								role={user.role}
								key={user._id}
							/>
						))
					)
				) : (
					group &&
					group!.map((group: string, id: number) => (
						<ul className={styles.group_list} key={id}>
							<Accordion
								onClick={() => (id === openId ? setId(-1) : setId(id))}
								isOpen={id === openId}
								group_name={group}
							/>
						</ul>
					))
				)}
			</ul>
			<div ref={ref} className={styles.observer}></div>
		</article>
	);
};

export default UsersList;