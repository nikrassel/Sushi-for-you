import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCategory, changePage } from "../redux/filter/slice";
import { selectFilter } from "../redux/filter/selector";
import { TCategory } from "../models";

const Categories = () => {
  const dispatch = useDispatch();
  const { activeCategory, allCategories } = useSelector(selectFilter);
  function onChangeCategory(newCategory: TCategory) {
    dispatch(changePage(1));
    dispatch(changeCategory(newCategory));
  }
  return (
    <div className="categories">
      <ul>
        {allCategories.map((elem: TCategory) => (
          <li
            className={activeCategory.id === elem.id ? "active" : ""}
            onClick={() => onChangeCategory(elem)}
            key={elem.id}
          >
            {elem.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
