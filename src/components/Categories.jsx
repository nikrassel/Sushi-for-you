import React from "react";

const Categories = ({ activeCategory, changeCategory }) => {
  const categories = [
    { name: "Все", id: 0 },
    { name: "С лососем", id: 1 },
    { name: "С угрём", id: 2 },
    { name: "С креветкой", id: 3 },
    { name: "Запечёные", id: 4 },
    { name: "Наборы", id: 5 },
  ];
  // const [activeCategory, setActiveCategory] = React.useState(0);
  // function onClick(categoryId) {
  // setActiveCategory(categoryId);
  //   changeCategory(categoryId);
  // }
  return (
    <div className="categories">
      <ul>
        {categories.map((elem) => (
          <li
            className={activeCategory.id === elem.id ? "active" : ""}
            onClick={() => changeCategory(elem)}
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
