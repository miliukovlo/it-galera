import React from 'react';
import styles from './Filter.module.css';
import SearchInput from './../SearchInput/SearchInput';
import { Select } from './../Select/Select';
import { filterInterface } from '@/Interface/filterInterface';
import { selectDataInterface, valueMapInterface } from '@/Interface/selectDataInterface';

interface FilterProps {
    filter: filterInterface;
    onFilterChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    onResetFilter: () => void;
    selectData: selectDataInterface[];
    handleFind: () => void
}

const Filter: React.FC<FilterProps> = ({ 
    filter, 
    onFilterChange, 
    onResetFilter, 
    selectData, 
    handleFind
}) => {
    const valueMap: valueMapInterface = {
        campus: filter.campus,
        group_name: filter.group_name,
        role: filter.role,
        department: filter.department,
    };

    if (filter) {
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
    }
};

export default Filter;
