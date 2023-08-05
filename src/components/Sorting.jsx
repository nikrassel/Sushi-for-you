import React from "react";

const Sorting = ({ selectedSort, changeSort, sortOrder, changeOrder }) => {
  const [open, setOpen] = React.useState(false);
  // const [selectedSort, setSort] = React.useState(2);
  const sortType = [
    { title: "популярности", property: "rating" },
    { title: "цене", property: "price" },
    { title: "алфавиту", property: "title" },
  ];
  function changeSortType(type) {
    changeSort(type);
    setOpen(false);
  }
  function changeSortOrder() {
    if (sortOrder === "asc") {
      changeOrder("desc");
    } else {
      changeOrder("asc");
    }
  }
  return (
    <div className="sort">
      <div className="sort__label">
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => changeSortOrder()}
          cursor="pointer"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span onClick={() => setOpen(!open)}>{selectedSort.title}</span>
      </div>
      {open && (
        <div className="sort__popup">
          <ul>
            {sortType.map((type, i) => (
              <li
                className={
                  selectedSort.property === type.property ? "active" : ""
                }
                onClick={() => changeSortType(type)}
                key={i}
              >
                {type.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sorting;
