import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../actions/products";
import { Container } from "@material-ui/core";
// import { Pagination } from "@material-ui/lab";

import Products from ".././Products/Products";
import Paginator from "../Paginator/Paginator";

const styles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "95vh",
};

const Landing = () => {
  const dispatch = useDispatch();

  const pagination = useSelector((state) => state.pagination);
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    if (pagination.page) {
      dispatch(getProducts("", pagination.page));
    } else {
      dispatch(getProducts());
    }
  }, [dispatch, pagination.page]);

  return (
    <div className="Landing" style={styles}>
      <Container maxWidth="md">
        <Products />
        <Paginator isHidden={loading} />
      </Container>
    </div>
  );
};

export default Landing;
