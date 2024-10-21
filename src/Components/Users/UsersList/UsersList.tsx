import { useState, useEffect, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './UsersList.module.css'; 
import SearchInput from '@/Components/Common/SearchInput/SearchInput';
import { Select } from '@/Components/Common/Select/Select';
import UserElement from '../UserElement/UserElement';
import { generatedStudents } from '@/data/GeneratedStudents';
import { generatedStudentsInterface } from '@/Interface/generatedStudentsInterface';
import { filterInterface } from '@/Interface/filterInterface';
import { selectData } from '@/data/selectData';

const UsersList = () => {
  const [limit, setLimit] = useState<number>(10);
  const [filteredList, setFilteredList] = useState<generatedStudentsInterface[]>([]);
  const [filter, setFilter] = useState<filterInterface>({
    name: "",
    campus: "",
    group_name: "",
    role: "",
    department: "",
  });
  const handleResetFilter = () => {
    setFilter(() => ({
      name: "",
      campus: "",
      group_name: "",
      role: "",
      department: "", 
    }));
  };
  

  const [ref, inView] = useInView({ threshold: 1 });

  const handleFilterChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilter((prevFilter) => ({
      ...prevFilter,
      [name]: value,
    }));
  },[]);

  useEffect(() => {
    const filteredUsers = generatedStudents.filter(
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
        onChange={handleFilterChange}
        value={filter.name}
        name={"name"}
        onResetFilter={handleResetFilter}
      />
      <div className={styles.filterContainer}>
        {selectData.map((select) => (
          <Select
            key={select.id}
            onChange={handleFilterChange}
            selectName={select.selectName}
            options={select.options}
            value={select.selectName === 'campus' ? filter.campus :
                  select.selectName === 'group_name' ? filter.group_name : 
                  filter.role} 
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

export default UsersList