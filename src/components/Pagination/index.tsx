import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../../redux/filter/slice";
import { selectFilter } from "../../redux/filter/selector";
import { selectMenu } from "../../redux/menu/selectors";

const Pagination = () => {
  const dispatch = useDispatch();
  const { currentPage } = useSelector(selectFilter);
  const { items } = useSelector(selectMenu);
  if (items.length === 8 || currentPage > 1) {
    return (
      <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel=">"
        onPageChange={(event) => dispatch(changePage(event.selected + 1))}
        pageRangeDisplayed={8}
        pageCount={2}
        previousLabel="<"
        renderOnZeroPageCount={null}
        initialPage={currentPage - 1}
      />
    );
  }
  return null;
};

export default Pagination;
