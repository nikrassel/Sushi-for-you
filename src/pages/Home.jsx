import React from "react";
import qs from "qs";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Categories from "../components/Categories";
import Sorting from "../components/Sorting";
import PositionBlock from "../components/PositionBlock";
import Skeleton from "../components/PositionBlock/skeleton";
import Pagination from "../components/Pagination";
import { selectFilter, setParams } from "../redux/filterSlice";
import { fetchMenu, selectMenu } from "../redux/menuSlice";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);
  const { items, loading } = useSelector(selectMenu);
  const {
    activeCategory,
    activeSortType,
    sortOrder,
    currentPage,
    searchValue,
  } = useSelector(selectFilter);
  const getMenu = React.useCallback(async () => {
    let endpoint = `page=${currentPage}&limit=6&sortBy=${activeSortType.property}&order=${sortOrder}`;
    if (activeCategory.id > 0) {
      endpoint += `&category=${activeCategory.name}`;
    }
    if (searchValue) {
      endpoint += `&search=${searchValue}`;
    }
    try {
      dispatch(fetchMenu(endpoint));
    } catch (error) {
      console.log("ERROR", error);
      alert("Возникла непредвиденная ошибка, попробуйте обновить страницу");
    }
  }, [
    activeCategory,
    currentPage,
    searchValue,
    activeSortType,
    sortOrder,
    dispatch,
  ]);
  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      dispatch(setParams({ ...params }));
      isSearch.current = true;
    }
  }, [dispatch]);
  React.useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: activeSortType.property,
        categoryId: activeCategory.id,
        currentPage,
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [activeCategory, activeSortType, currentPage, navigate]);
  React.useEffect(() => {
    window.scrollTo(0, 0);
    if (!isSearch.current) {
      getMenu();
    }
    isSearch.current = false;
  }, [
    activeCategory,
    activeSortType,
    sortOrder,
    searchValue,
    currentPage,
    getMenu,
  ]);
  // const filtredMenu = menu.filter((elem) => {
  //   if (elem.title.toLowerCase().includes(searchValue.toLowerCase())) {
  //     return true;
  //   }
  //   return false;
  // });
  return (
    <>
      <div className="content__top">
        <Categories />
        <Sorting />
      </div>
      <h2 className="content__title">Все меню</h2>
      <div className="content__items">
        {loading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((elem) => (
              <PositionBlock
                id={elem.id}
                title={elem.title}
                price={elem.price}
                imageSource={elem.image}
                key={elem.id}
                numberVars={elem.number ? elem.number : undefined}
                types={elem.types}
              />
            ))}
      </div>
      <Pagination />
    </>
  );
};

export default Home;
