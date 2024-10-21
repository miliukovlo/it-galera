import { selectDataInterface } from '@/Interface/selectDataInterface';



export const selectData:selectDataInterface[]= [
    {
      id: 1,
      options: [
        { text: "Институт", value: ''},
        { text: "ВШЦТ" , value: "ВШЦТ"},
        { text: "ИГИН", value: "ИГИН" },
        { text: "СТРОИН", value: "СТРОИН" },
      ],
      selectName: "campus"
    },
    {
      id: 2,
      options: [
        { text: "Кафедра", value: ''},
        { text: "Математики", value: "Математики" },
        { text: "Истории", value: "Истории" },
        { text: "Ин. языков", value: "Ин. языков" },
      ],
      selectName: "department"
    },
    {
      id: 3,
      options: [
        { text: "Группа", value: ''},
        { text: "СМАРТб-22-1", value: "СМАРТб-22-1" },
        { text: "ИИПб-23-1", value: "ИИПб-23-1" },
        { text: "ИИПб-24-1", value: "ИИПб-24-1" },
      ],
      selectName: "group_name"
    },
    {
      id: 4,
      options: [
        { text: "Роль", value: ''},
        { text: "Студент", value: "student" },
        { text: "Преподаватель", value: "teacher" },
      ],
      selectName: "role"
    },
  ];