"use client";

import Input from "@/Components/Common/Input/Input";
import React, { useEffect, useState } from "react";
import styles from "./UsersList.module.css";
import { useInView } from "react-intersection-observer";
import { generatedStudentsInterface } from "@/Interface/generatedStudentsInterface";
import { generatedStudents } from "@/data/GeneratedStudents";
import UserElement from "../UserElement/UserElement";

const users: generatedStudentsInterface[] = generatedStudents;

const UsersList = () => {
  const [filterValue, setFilterValue] = useState<string>("");
  const [limit, setLimit] = useState<number>(10);
  const [filteredList, setFilteredList] = useState<generatedStudentsInterface[]>([]);
  
  const [ref, inView] = useInView({ threshold: 1 });

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(e.target.value);
  };

  useEffect(() => {
    const filteredUsers = users.filter((user) => 
      user.name.toLowerCase().includes(filterValue.toLowerCase())
    );
    setFilteredList(filteredUsers.slice(0, limit));
  }, [filterValue, limit]);

  useEffect(() => {
    if (inView) {
      setLimit((prevLimit) => prevLimit + 10); 
    }
  }, [inView]);

  return (
    <article className={styles.content}>
      <Input
        type='text'
        size='l'
        value={filterValue}
        onChange={handleFilter}
        placeholder='Поиск...'
      />
      <ul className={styles.users__list}>
        {filteredList.map((user) => (
          <UserElement
            id={user._id}
            name={user.name}
            group={user.group}
            role={user.role}
            key={user._id}
          />
        ))}
      </ul>
      <div ref={ref} className={styles.observer}></div>
    </article>
  );
};

export default UsersList;
