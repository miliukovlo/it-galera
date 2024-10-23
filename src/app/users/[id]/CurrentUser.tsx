"use client";

import { GetCurrentUser } from "@/Hooks/GetCurrentUser";
import { notFound, useParams } from "next/navigation";
import React from "react";
import styles from "./CurrentUser.module.css";
import Circle from "@/Components/Common/Circle/Circle";
import UserModal from "@/Components/Users/UserModal/UserModal";

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

  interface modalInterface {
    item: string;
    isOpen: boolean;
  }

  const [modal, setModal] = React.useState<modalInterface>({
    item: "",
    isOpen: false,
  });

  return (
    <article className={styles.content}>
      <div className={styles.information__block}>
        <p className={styles.information__text}>
          <b>ФИО:</b> {GetUser.name}
        </p>
        <p className={styles.information__text}>
          <b>Группа:</b> {GetUser.group}
        </p>
        <p className={styles.information__text}>
          <b>Роль:</b>
          {GetUser.role === "student" ? " Студент" : " Преподаватель"}
        </p>
      </div>
      <div className={styles.lessons__block}>
        <UserModal
          subject_name={modal.item}
          isOpen={modal.isOpen}
          onClose={() => {
            setModal((prevModal) => ({ ...prevModal, isOpen: false }));
          }}
        />
        {GetUser.lessons?.map((lesson) => {
          return (
            <div
              onClick={() => {
                setModal(() => ({ isOpen: true, item: lesson.name }));
              }}
              className={styles.lesson}
              key={lesson.name}>
              <p className={styles.information__text}>
                <b>Предмет:</b> {lesson.name}
              </p>
              <div className={styles.progress__block}>
                <p className={styles.progress__text}>
                  <b>Посещение:</b>
                </p>
                <Circle progress={lesson.attendance} />
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
};

export default CurrentUser;
