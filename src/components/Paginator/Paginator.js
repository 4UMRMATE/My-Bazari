import React, { useEffect, useState } from "react";
import { Pagination, PaginationItem } from "@material-ui/lab";
import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../../actions/pagination";

const Paginator = ({ isHidden }) => {
  const dispatch = useDispatch();
  const pagination = useSelector((state) => state.pagination);

  const styles = isHidden
    ? { display: "none" }
    : { display: "flex", justifyContent: "center", margin: "50px" };

  const handleChange = (event, value) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    dispatch(changePage(value));
  };

  return (
    <Pagination
      style={styles}
      count={pagination.pages}
      page={pagination.page}
      onChange={handleChange}
    />
  );
};

export default Paginator;
