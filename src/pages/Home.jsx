import React from "react";
import Categories from "../components/Categories";
import Sorting from "../components/Sorting";
import PositionBlock from "../components/PositionBlock";
import Skeleton from "../components/PositionBlock/skeleton";
import Pagination from "../components/Pagination";

const Home = ({ searchValue }) => {
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
  const [currentPage, setCurrentPage] = React.useState(1);
  React.useEffect(() => {
    setIsLoading(true);
    let baseUrl = `https://64cb863e700d50e3c7060c63.mockapi.io/items?page=${currentPage}&limit=6&sortBy=${selectedSort.property}&order=${sortOrder}`;
    if (activeCategory.id > 0) {
      baseUrl += `&category=${activeCategory.name}`;
    }
    if (searchValue) {
      baseUrl += `&search=${searchValue}`;
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
  }, [activeCategory, selectedSort, sortOrder, searchValue, currentPage]);
  // const filtredMenu = menu.filter((elem) => {
  //   if (elem.title.toLowerCase().includes(searchValue.toLowerCase())) {
  //     return true;
  //   }
  //   return false;
  // });
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
      <Pagination changePage={(number) => setCurrentPage(number)} />
    </>
  );
};

export default Home;
