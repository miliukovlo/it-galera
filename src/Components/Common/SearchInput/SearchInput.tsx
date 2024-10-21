import React from "react";
import styles from "./SearchInput.module.css";
import CrossIcon from "@/Components/Common/Svg/Icons/CrossIcon/CrossIcon";

interface SearchInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleResetFilter: () => void;
  handleFind: () => void;
}

const SearchInput = ({
  value,
  onChange,
  handleResetFilter,
  handleFind,
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
      <button onClick={handleResetFilter} className={styles.resetFilterButton}>
        <CrossIcon />
      </button>
      <div className={styles.findButtonContainer}>
        <button onClick={handleFind} className={styles.findButton}>
          Найти
        </button>
      </div>
    </div>
  );
};

export default SearchInput;
