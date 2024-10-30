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

  export const selectSubjectData:selectDataInterface[]= [
    {
      id: 1,
      options: [
        { text: "% Посещения", value: 0},
        { text: ">10%" , value: 10},
        { text: ">20%" , value: 20},
        { text: ">30%" , value: 30},
        { text: ">40%" , value: 40},
        { text: ">50%" , value: 50},
        { text: ">60%" , value: 60},
        { text: ">70%" , value: 70},
        { text: ">80%" , value: 80},
        { text: ">90%" , value: 90},
        { text: "100%" , value: 100},
      ],
      selectName: "attendance"
    },
  ];