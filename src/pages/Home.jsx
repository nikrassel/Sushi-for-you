import React from "react";
import Categories from "../components/Categories";
import Sorting from "../components/Sorting";
import PositionBlock from "../components/PositionBlock";
import Skeleton from "../components/PositionBlock/skeleton";

const Home = () => {
  const [menu, setMenu] = React.useState([]);
  const [activeCategory, setActiveCategory] = React.useState({
    name: "Все",
    id: 0,
  });
  const [selectedSort, setSort] = React.useState({
    title: "алфавиту",
    property: "title",
  });
  const [sortOrder, setSortOrder] = React.useState("asc");
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    setIsLoading(true);
    let baseUrl = `https://64cb863e700d50e3c7060c63.mockapi.io/items?sortBy=${selectedSort.property}&order=${sortOrder}`;
    if (activeCategory.id > 0) {
      baseUrl += `&search=${activeCategory.name}`;
    }
    window.scrollTo(0, 0);
    fetch(baseUrl)
      .then((res) => {
        return res.json();
      })
      .then((response) => {
        setMenu(response);
        setIsLoading(false);
      });
  }, [activeCategory, selectedSort, sortOrder]);
  return (
    <>
      <div className="content__top">
        <Categories
          activeCategory={activeCategory}
          changeCategory={(category) => setActiveCategory(category)}
        />
        <Sorting
          selectedSort={selectedSort}
          changeSort={setSort}
          sortOrder={sortOrder}
          changeOrder={setSortOrder}
        />
      </div>
      <h2 className="content__title">Все меню</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : menu.map((elem) => (
              <PositionBlock
                title={elem.title}
                price={elem.price}
                imageSource={elem.image}
                key={elem.id}
                numberVars={elem.number ? elem.number : undefined}
                types={elem.types}
              />
            ))}
      </div>
    </>
  );
};

export default Home;
