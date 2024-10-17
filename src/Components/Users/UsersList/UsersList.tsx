"use client";

import Input from "@/Components/Common/Input/Input";
import React, { useEffect, useState } from "react";
import styles from "./UsersList.module.css";
import { useInView } from "react-intersection-observer";
import { generatedStudentsInterface } from "@/Interface/generatedStudentsInterface";
import { generatedStudents } from "@/data/GeneratedStudents";
import { optionsInterface } from "@/Interface/optionsInterface";
import UserElement from "../UserElement/UserElement";
import { Select } from "@/Components/Common/Select/Select";

const users: generatedStudentsInterface[] = generatedStudents;

const test = [
  {
    options: [
      { id: "1", text: "ВШЦТ" },
      { id: "2", text: "ИГИН" },
      { id: "3", text: "СТРОИН" },
    ],
    defaultText: "Институт",
  },
  {
    options: [
      { id: "1", text: "Математики" },
      { id: "2", text: "Истории" },
      { id: "3", text: "Ин. языков" },
    ],
    defaultText: "Кафедра",
  },
  {
    options: [
      { id: "1", text: "СМАРТб-22-1" },
      { id: "2", text: "ИИПб-23-1" },
      { id: "3", text: "ИИПб-24-1" },
    ],
    defaultText: "Группа",
  },
  {
    options: [
      { id: "1", text: "Студент" },
      { id: "2", text: "Преподаватель" },
      { id: "3", text: "Администратор" },
    ],
    defaultText: "Роль",
  },
];

const UsersList = () => {
  const [filterValue, setFilterValue] = useState<string>("");
  const [limit, setLimit] = useState<number>(10);
  const [filteredList, setFilteredList] = useState<
    generatedStudentsInterface[]
  >([]);

  const [filter, setFilter] = useState<string>("");

  const [ref, inView] = useInView({ threshold: 1 });

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e) {
      //Проверка на null
      setFilterValue(e.target.value);
    }
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e) {
      setFilter(e.target.value);
    }
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
      <div className={styles.filterContainer}>
        {/* <Select
          defaultText='Институт'
          options={optionsInst}
          onChange={() => console.log("")}
          value={"1"}
        />
        <Select
          defaultText='Кафедра'
          options={optionsCaf}
          onChange={() => console.log("")}
          value={"2"}
        /> */}
        {/* <Select
          defaultText='Предмет'
          options={optionsRoles}
          onChange={() => console.log("")}
          value={"3"}
        />
        <Select
          defaultText='Группа'
          options={optionsGroup}
          onChange={() => console.log("")}
          value={"4"}
        /> */}
        {test.map((select) => (
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
