import React from "react";
import styles from "./SearchInput.module.css";
import CrossIcon from "@/Components/Common/Svg/Icons/CrossIcon/CrossIcon";
import Button from "../Button/Button";

interface SearchInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onResetFilter: () => void;
  onFind?: () => void;
  name: string;
  handleFind: () => void
}

const SearchInput = ({
  value,
  onChange,
  onResetFilter,
  name,
  handleFind
}: SearchInputProps) => {
  return (
    <div className={styles.searchInputContainer}>
      <input
        type='text'
        placeholder='Поиск...'
        name={name}
        value={value}
        onChange={onChange}
        className={styles.searchInput}
      />
      <button onClick={onResetFilter} className={styles.resetFilterButton}>
        <CrossIcon />
      </button>
      <div className={styles.findButtonContainer}>
        <Button
          size="xl"
          text="Поиск"
          onClick={handleFind}
        />
      </div>
    </div>
  );
};

export default SearchInput;
