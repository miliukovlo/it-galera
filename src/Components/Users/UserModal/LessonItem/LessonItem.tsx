import React from "react";
import styles from "./LessonItem.module.css";

interface LessonItemInterface {
  date: string;
  lesson_type: string;
  status: string;
}

type Status = "Присутствовал" | "Отсутствовал" | "Уважительная" | "Болел";

const statusColors = {
  Присутствовал: { backgroundColor: "rgb(171, 210, 181)" },
  Отсутствовал: { backgroundColor: "rgb(217, 161, 165)" },
  Уважительная: { backgroundColor: "rgb(144, 146, 206)" },
  Болел: { backgroundColor: "rgb(217, 204, 161)" },
};

const LessonItem = ({ date, lesson_type, status }: LessonItemInterface) => {
  return (
    <div
      style={statusColors[status as Status]}
      className={styles.lessonTableItem}>
      <p>{date}</p>
      <p>{lesson_type}</p>
      <p>{status}</p>
    </div>
  );
};

export default LessonItem;
