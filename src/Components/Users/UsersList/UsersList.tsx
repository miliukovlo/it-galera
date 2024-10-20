"use client";

import Input from "@/Components/Common/Input/Input";
import React, { useEffect, useState } from "react";
import styles from "./UsersList.module.css";
import { useInView } from "react-intersection-observer";
import { generatedStudentsInterface } from "@/Interface/generatedStudentsInterface";
import { generatedStudents } from "@/data/GeneratedStudents";
import { selectData } from "@/data/selectData";
import { selectDataInterface } from "@/Interface/selectDataInterface";
import { filterInterface } from "@/Interface/filterInterface";
import UserElement from "../UserElement/UserElement";
import { Select } from "@/Components/Common/Select/Select";
import SearchInput from "@/Components/Common/SearchInput/SearchInput";
import Button from "@/Components/Common/Button/Button";

const users: generatedStudentsInterface[] = generatedStudents;

const select: selectDataInterface[] = selectData;

const UsersList = () => {
  const [limit, setLimit] = useState<number>(10);
  const [filteredList, setFilteredList] = useState<
    generatedStudentsInterface[]
  >([]);

  const [filter, setFilter] = useState<filterInterface>({
    name: "",
    campus: "",
    group_name: "",
    role: "",
    department: "",
  });

  const test = () => console.log("Test");

  const [ref, inView] = useInView({ threshold: 1 });

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e) {
      //Проверка на null
      setFilter((prevFilter) => ({ ...prevFilter, name: e.target.value }));
    }
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e) {
      const id = e.target.name;
      if (id === "Группа") {
        setFilter((prevFilter) => ({
          ...prevFilter,
          group_name: e.target.value,
        }));
      }
      if (id === "Роль") {
        setFilter((prevFilter) => ({
          ...prevFilter,
          role:
            e.target.value === "Студент"
              ? "student"
              : e.target.value === "Преподаватель"
              ? "teacher"
              : "admin",
        }));
      }
    }
  };
  useEffect(() => {
    const filteredUsers = users.filter(
      (user) =>
        user.name.toLowerCase().includes(filter.name.toLowerCase()) &&
        user.role.includes(filter.role) &&
        user.group?.includes(filter.group_name)
    );
    setFilteredList(filteredUsers.slice(0, limit));
  }, [limit, filter]);

  useEffect(() => {
    if (inView) {
      setLimit((prevLimit) => prevLimit + 10);
    }
  }, [inView]);

  return (
    <article className={styles.content}>
      <SearchInput
        onChange={handleFilter}
        onFind={test}
        onResetFilter={test}
        value={filter.name}
      />
      <div className={styles.filterContainer}>
        {select.map((select) => (
          <Select
            key={select.defaultText}
            onChange={handleSelect}
            {...select}
          />
        ))}
      </div>

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
