import React from "react";
import styles from "./LessonItem.module.css";

interface LessonItemInterface {
  date: string;
  lesson_type: string;
  status: string;
}

const LessonItem = ({ date, lesson_type, status }: LessonItemInterface) => {
  return (
    <div
      className={
        status === "Присутствовал"
          ? `${styles.lessonTableItem} ${styles.attend}`
          : `${styles.lessonTableItem} ${styles.absent}`
      }>
      <p>{date}</p>
      <p>{lesson_type}</p>
      <p>{status}</p>
    </div>
  );
};

export default LessonItem;
