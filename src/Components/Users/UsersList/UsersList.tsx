import React, { useState, useEffect, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './UsersList.module.css';
import Filter from './../../Common/Filter/Filter';
import UserElement from './../UserElement/UserElement';
import { generatedStudentsInterface } from '@/Interface/generatedStudentsInterface';
import { filterInterface } from '@/Interface/filterInterface';
import { generatedStudents } from '@/data/GeneratedStudents';
import { selectData } from '@/data/selectData';

const UsersList = () => {
	const [limit, setLimit] = useState<number>(10);
	const [filteredList, setFilteredList] = useState<generatedStudentsInterface[]>(generatedStudents);
	const [filter, setFilter] = useState<filterInterface>({
		name: "",
		campus: "",
		group_name: "",
		role: "",
		department: "",
	});

const handleResetFilter = () => {
	setLimit(10)
    setFilter(() => ({
		name: "",
		campus: "",
		group_name: "",
		role: "",
		department: "",
    }));
};

const [ref, inView] = useInView({ threshold: 1 });

const handleFilterChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const { name, value } = e.target;
		setFilter(prevFilter => ({
			...prevFilter,
			[name]: value,
		}));
    },[]);

const handleFindStudent = () => {
	setLimit(10)
	const filteredUsers = generatedStudents.filter(
    	user =>
			user.name.toLowerCase().includes(filter.name.toLowerCase()) &&
			user.role.includes(filter.role) &&
			user.group?.includes(filter.group_name)
		);
    setFilteredList(filteredUsers.slice(0, limit));
}

useEffect(() => {
    if (inView) {
		setLimit(prevLimit => prevLimit + 10);
    }
}, [inView]);

useEffect(() => {
	const filteredUsers = generatedStudents.filter(
    	user =>
			user.name.toLowerCase().includes(filter.name.toLowerCase()) &&
			user.role.includes(filter.role) &&
			user.group?.includes(filter.group_name)
		);
	setFilteredList(filteredUsers.slice(0, limit))
},[limit])

return (
    <article className={styles.content}>
		<Filter
			filter={filter}
			onFilterChange={handleFilterChange}
			onResetFilter={handleResetFilter}
			selectData={selectData}
			handleFind={handleFindStudent} 
		/>

		<ul className={styles.users__list}>
			{filteredList.length === 0 ? 
				<h1 className={styles.usersNotFound}>Пользователи не найдены!</h1>
				:
				filteredList.map(user => (
					<UserElement
						id={user._id}
						name={user.name}
						group={user.group}
						role={user.role}
						key={user._id}
					/>
					))
			}
		</ul>
		<div ref={ref} className={styles.observer}></div>
    </article>
);
};

export default UsersList;
