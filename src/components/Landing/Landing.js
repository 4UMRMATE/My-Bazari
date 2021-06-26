import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "../../actions/products";
import { useSelector } from "react-redux";
import { Container } from "@material-ui/core";

import Products from ".././Products/Products";
import Form from ".././Form/Form";

const styles = {
  display: "flex",
  placeContent: "center",
  marginTop: "5vh",
};

const Landing = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="Landing" style={styles}>
      <Container maxWidth="md">
        <Products />
        <Form />
      </Container>
    </div>
  );
};

export default Landing;
