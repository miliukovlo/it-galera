import { selectDataInterface } from '@/Interface/selectDataInterface';



export const selectData:selectDataInterface[]= [
    {
      options: [
        { text: "ВШЦТ" },
        { text: "ИГИН" },
        { text: "СТРОИН" },
      ],
      defaultText: "Институт",
    },
    {
      options: [
        { text: "Математики" },
        { text: "Истории" },
        { text: "Ин. языков" },
      ],
      defaultText: "Кафедра",
    },
    {
      options: [
        { text: "СМАРТб-22-1" },
        { text: "ИИПб-23-1" },
        { text: "ИИПб-24-1" },
      ],
      defaultText: "Группа",
    },
    {
      options: [
        { text: "Студент" },
        { text: "Преподаватель" },
        { text: "Администратор" },
      ],
      defaultText: "Роль",
    },
  ];