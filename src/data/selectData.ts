import { selectDataInterface } from '@/Interface/selectDataInterface';



export const selectData:selectDataInterface[]= [
    {
      id: 1,
      options: [
        { text: "Институт"},
        { text: "ВШЦТ" },
        { text: "ИГИН" },
        { text: "СТРОИН" },
      ],
      selectName: "Институт"
    },
    {
      id: 2,
      options: [
        { text: "Кафедра"},
        { text: "Математики" },
        { text: "Истории" },
        { text: "Ин. языков" },
      ],
      selectName: "Кафедра"
    },
    {
      id: 3,
      options: [
        { text: "Группа"},
        { text: "СМАРТб-22-1" },
        { text: "ИИПб-23-1" },
        { text: "ИИПб-24-1" },
      ],
      selectName: "Группа"
    },
    {
      id: 4,
      options: [
        { text: "Роль"},
        { text: "Студент" },
        { text: "Преподаватель" },
      ],
      selectName: "Роль"
    },
  ];