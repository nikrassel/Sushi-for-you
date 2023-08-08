import React from "react";
import axios from "axios";
import qs from "qs";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Categories from "../components/Categories";
import Sorting from "../components/Sorting";
import PositionBlock from "../components/PositionBlock";
import Skeleton from "../components/PositionBlock/skeleton";
import Pagination from "../components/Pagination";
import { SearchContext } from "../App";
import { setParams } from "../redux/filterSlice";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);
  const { searchValue } = React.useContext(SearchContext);
  const [menu, setMenu] = React.useState([]);
  const activeCategory = useSelector((state) => state.filter.activeCategory);
  const selectedSort = useSelector((state) => state.filter.activeType);
  const sortOrder = useSelector((state) => state.filter.sortOrder);
  const currentPage = useSelector((state) => state.filter.currentPage);
  const [isLoading, setIsLoading] = React.useState(true);
  function getMenu() {
    setIsLoading(true);
    let baseUrl = `https://64cb863e700d50e3c7060c63.mockapi.io/items?page=${currentPage}&limit=6&sortBy=${selectedSort.property}&order=${sortOrder}`;
    if (activeCategory.id > 0) {
      baseUrl += `&category=${activeCategory.name}`;
    }
    if (searchValue) {
      baseUrl += `&search=${searchValue}`;
    }
    axios.get(baseUrl).then((res) => {
      setMenu(res.data);
      setIsLoading(false);
    });
  }
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
        sortProperty: selectedSort.property,
        categoryId: activeCategory.id,
        currentPage,
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [activeCategory, selectedSort, currentPage, navigate]);
  React.useEffect(() => {
    window.scrollTo(0, 0);
    if (!isSearch.current) {
      getMenu();
    }
    isSearch.current = false;
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
        <Categories />
        <Sorting />
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
      <Pagination />
    </>
  );
};

export default Home;
