"use client";

import Input from "@/Components/Common/Input/Input";
import React, { useEffect, useState } from "react";
import styles from "./UsersList.module.css";
import { InView, useInView } from "react-intersection-observer";
import { generatedStudentsInterface } from "@/Interface/generatedStudentsInterface";
import { generatedStudents } from "@/data/GeneratedStudents";
import UserElement from "../UserElement/UserElement";

const users: generatedStudentsInterface[] = generatedStudents;

const UsersList = () => {
  const [filterValue, setFilterValue] = useState<string>("");
  // const [filteredList, setFilteredList] = useState<
  //   generatedStudentsInterface[]
  // >([]);
  const [limit, setLimit] = useState<number>(10);
  const [limitedList, setLimitedList] = useState<generatedStudentsInterface[]>(
    []
  );

  const [ref, inView, entry] = useInView({});

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(e.target.value);
  };

  useEffect(() => {
    setLimitedList(users.filter((user) => user.name.includes(filterValue)));
  }, [filterValue]);

  useEffect(() => setLimit(limit + 10), [inView]);

  useEffect(() => setLimitedList(users.slice(0, limit)), [limit]);

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
        {limitedList.map((user) => {
          return (
            <UserElement
              id={user._id}
              name={user.name}
              group={user.group}
              role={user.role}
              key={user._id}
            />
          );
        })}
      </ul>
      <div ref={ref} className={styles.observer}></div>
    </article>
  );
};

export default UsersList;
