import React from 'react';
import styles from './Filter.module.css';
import SearchInput from './../SearchInput/SearchInput';
import { Select } from './../Select/Select';
import { filterInterface, filterSubjectInterface } from '@/Interface/filterInterface';
import { selectDataInterface, valueMapInterface, valueSubjectInterface } from '@/Interface/selectDataInterface';

interface FilterProps {
    filter: filterInterface | filterSubjectInterface;
    onFilterChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    onResetFilter: () => void;
    selectData: selectDataInterface[];
    handleFind: () => void;
    component: 'users' | "currentUser";
}

const Filter: React.FC<FilterProps> = ({ 
    filter, 
    onFilterChange, 
    onResetFilter, 
    selectData, 
    handleFind,
    component
}) => {
    let valueMap: valueMapInterface | valueSubjectInterface;

    if (component === 'users') {
        const userFilter = filter as filterInterface;

        valueMap = {
            campus: userFilter.campus,
            group_name: userFilter.group_name,
            role: userFilter.role,
            department: userFilter.department,
        } as valueMapInterface;
    } else {
        const subjectFilter = filter as filterSubjectInterface; 

        valueMap = {
            attendance: subjectFilter.attendance,
        } as valueSubjectInterface;
    }

    if (!filter) {
        return null; 
    }

    return (
        <>
            <SearchInput
                onChange={onFilterChange}
                value={filter.name}
                name={"name"}
                onResetFilter={onResetFilter}
                handleFind={handleFind}
            />
            <div className={styles.filterContainer}>
                {selectData.map(select => (
                    <Select
                        key={select.id}
                        onChange={onFilterChange}
                        selectName={select.selectName}
                        options={select.options}
                        value={valueMap[select.selectName as keyof typeof valueMap]}
                    />
                ))}
            </div>
        </>
    );
};

export default Filter;
