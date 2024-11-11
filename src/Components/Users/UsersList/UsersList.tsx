import React, { useState, useEffect, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './UsersList.module.css';
import Filter from './../../Common/Filter/Filter';
import UserElement from './../UserElement/UserElement';
import { generatedStudentsInterface } from '@/Interface/generatedStudentsInterface';
import { filterInterface } from '@/Interface/filterInterface';
import { generatedStudents } from '@/data/GeneratedStudents';
import { selectData, selectTeacherData } from '@/data/selectData';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { setFilterChange } from '@/Hooks/setFilterChange';
import Link from 'next/link';
import cyrillicToTranslit from 'cyrillic-to-translit-js';

const UsersList = () => {
	const [limit, setLimit] = useState<number>(10);
    const user = useSelector((state: RootState) => state.user.user);
	const cyrilicTranslit = cyrillicToTranslit();
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
	setFilteredList(generatedStudents)
};

const [ref, inView] = useInView({ threshold: 1 });

const handleFilterChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {setFilterChange(e,setFilter)},[]);

const handleFindStudent = () => {
	setLimit(10)
	const filteredUsers = generatedStudents.filter(
    	student =>
			student.name.toLowerCase().includes(filter.name.toLowerCase()) &&
			student.role.includes(filter.role) &&
			student.group?.includes(filter.group_name)
		);
    setFilteredList(filteredUsers.slice(0, limit));
}

const setStudentsForList = () => {
	if (user && user.role === "admin") {
		const students = generatedStudents;
		setFilteredList(students);
  	} 
}

useEffect(() => {
    if (inView) {
		setLimit(prevLimit => prevLimit + 10);
    }
}, [inView]);


useEffect(() => {
	setStudentsForList()
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
			selectData={(user?.role == "teacher" ? selectTeacherData : selectData).map(select => 
				select.id === 3 && user?.role === "teacher" 
				? {
					...select,
					options: select.options.filter(option => user.groups?.includes(option.text)) 
					} 
				: select 
			)}
			handleFind={handleFindStudent} 
			component='users'
		/>


		<ul className={styles.users__list}>
			{user && user.role === 'admin' ?
			filteredList.length === 0 ? 
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
				:
				user && user.groups!.map(group => (
					<Link key={group} className={styles.group__href} href={`group/${cyrilicTranslit.transform(group)}`}>
						<div className={styles.group__element}>
							<p className={styles.group__text}><b>Группа:</b> {group}</p>
							<p className={styles.group__text}><b>Студентов:</b> 10</p>
						</div>
					</Link>
				))
			}
		</ul>
		<div ref={ref} className={styles.observer}></div>
    </article>
);
};

export default UsersList;