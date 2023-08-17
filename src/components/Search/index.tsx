import React from "react";
import { useDispatch, useSelector } from "react-redux";
// @ts-ignore
import debounce from "lodash.debounce";
import styles from "./Search.module.scss";
import { selectFilter, setSearchValue } from "../../redux/filterSlice";

const Search = () => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState("");
  const { searchValue } = useSelector(selectFilter);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const updateSearchValue = React.useMemo(
    () =>
      debounce((value: string) => {
        dispatch(setSearchValue(value));
      }, 500),
    [dispatch]
  );
  function changeInput(value: string) {
    setValue(value);
    updateSearchValue(value);
  }
  function onClearInput() {
    setValue("");
    dispatch(setSearchValue(""));
    inputRef.current?.focus();
  }
  return (
    <div className={styles.root}>
      <svg
        className={styles.icon}
        enableBackground="new 0 0 50 50"
        height="50px"
        id="Layer_1"
        version="1.1"
        viewBox="0 0 50 50"
        width="50px"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect fill="none" height="50" width="50" />
        <circle
          cx="21"
          cy="20"
          fill="none"
          r="16"
          stroke="#000000"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <line
          fill="none"
          stroke="#000000"
          strokeMiterlimit="10"
          strokeWidth="4"
          x1="32.229"
          x2="45.5"
          y1="32.229"
          y2="45.5"
        />
      </svg>
      <input
        ref={inputRef}
        className={styles.input}
        placeholder="Поиск..."
        value={value}
        onChange={(event) => changeInput(event.target.value)}
      />
      {searchValue && (
        <svg
          className={styles.clear}
          height="48"
          viewBox="0 0 48 48"
          width="48"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => onClearInput()}
        >
          <path d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z" />
          <path d="M0 0h48v48h-48z" fill="none" />
        </svg>
      )}
    </div>
  );
};

export default Search;
