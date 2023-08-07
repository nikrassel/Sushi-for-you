import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCategory } from "../redux/filterSlice";

const Categories = () => {
  const dispatch = useDispatch();
  const activeCategory = useSelector((state) => state.filter.activeCategory);
  const categories = useSelector((state) => state.filter.allCategories);
  return (
    <div className="categories">
      <ul>
        {categories.map((elem) => (
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
