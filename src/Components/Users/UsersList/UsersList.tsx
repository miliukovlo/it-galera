"use client";

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
import useSWRInfinite from "swr/infinite";
import axios from "axios";

const PAGE_SIZE = 6;

const fetcher = (url: string) => axios.get(url).then(response => response.data);

interface UsersListProps {
	role: string;
	group: Array<string>;
}

const UsersList: React.FC<UsersListProps> = ({ role, group }) => {
	const [openId, setId] = useState<number>(-1);
	const [filter, setFilter] = useState<filterInterface>({
		name: "",
		campus: "",
		group_name: "",
		role: "",
		department: "",
	});

	const [test, setTest] = useState<string>(""); // Здесь пришлось так сделать.. да, костыль) как будет готовый бэк поменяем

	const getKey = (index: number) =>
		`http://localhost:5007/api/generate/students/page=${index}/limit=${PAGE_SIZE}${
			test ? "?name=" + filter.name : ""
		}`;

	const { data, size, setSize } = useSWRInfinite(getKey, fetcher);

	const users: generatedStudentsInterface[] = data ? [].concat(...data) : []; // Так как data из себя представляет отдельные объекты каждой страницы, мы объединяем ее в один список

	const handleResetFilter = () => {
		setSize(2); // size 1 это 0 страница, которой нет
		setTest("");
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
		setSize(2); // Аналогично с 66 стр
		setTest(filter.name);
	};

	const [ref, inView] = useInView({ threshold: 1 });

	useEffect(() => {
		if (inView) {
			setSize(size + 1);
		}
	}, [inView]);

	return (
		<article className={styles.content}>
			<Filter
				filter={filter}
				onFilterChange={handleFilterChange}
				onResetFilter={handleResetFilter}
				selectData={(role == "teacher" ? selectTeacherData : selectData).map(
					select =>
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
					users.length === 0 ? (
						<h1 className={styles.usersNotFound}>Пользователи не найдены!</h1>
					) : (
						users.map((user, index) => (
							<UserElement
								id={user._id}
								name={user.name}
								group={user.group}
								role={user.role}
								key={index}
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
