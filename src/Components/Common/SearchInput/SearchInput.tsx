import React from "react";
import { styles } from "./SearchInput.module.css";

interface SearchInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onResetFilter: () => void;
  onFind: () => void;
}

const SearchInput = ({
  value,
  onChange,
  onResetFilter,
  onFind,
}: SearchInputProps) => {
  return (
    <div className={styles.searchInputContainer}>
      <input
        type='text'
        placeholder='Поиск...'
        value={value}
        onChange={onChange}
        className={styles.searchInput}
      />
      <button onClick={onResetFilter} className={styles.resetFilterButton}>
        Очистить
      </button>
      <button className={styles.findButton}></button>
    </div>
  );
};

export default SearchInput;
