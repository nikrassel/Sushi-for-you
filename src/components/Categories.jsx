import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCategory, selectFilter } from "../redux/filterSlice";

const Categories = () => {
  const dispatch = useDispatch();
  const { activeCategory, allCategories } = useSelector(selectFilter);
  return (
    <div className="categories">
      <ul>
        {allCategories.map((elem) => (
          <li
            className={activeCategory.id === elem.id ? "active" : ""}
            onClick={() => dispatch(changeCategory(elem))}
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
